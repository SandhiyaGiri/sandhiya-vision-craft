import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // GET: Retrieve portfolio data
    if (req.method === 'GET') {
      console.log('GET request received - fetching portfolio data');
      
      const { data, error } = await supabase
        .from('portfolio_data')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching data:', error);
        return new Response(
          JSON.stringify({ error: error.message }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      console.log(`Successfully fetched ${data?.length || 0} records`);
      
      // Format response for easier consumption
      const formattedData = data?.reduce((acc: any, item: any) => {
        acc[item.data_type] = item.content;
        return acc;
      }, {});

      return new Response(
        JSON.stringify({ 
          success: true,
          data: formattedData,
          raw: data 
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // POST: Add or update portfolio data
    if (req.method === 'POST') {
      console.log('POST request received - adding/updating portfolio data');
      
      const body = await req.json();
      const { data_type, content } = body;

      if (!data_type || !content) {
        return new Response(
          JSON.stringify({ 
            error: 'Missing required fields: data_type and content are required' 
          }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      // Check if data_type already exists
      const { data: existing } = await supabase
        .from('portfolio_data')
        .select('id')
        .eq('data_type', data_type)
        .maybeSingle();

      let result;
      
      if (existing) {
        // Update existing record
        console.log(`Updating existing record for data_type: ${data_type}`);
        const { data, error } = await supabase
          .from('portfolio_data')
          .update({ content })
          .eq('data_type', data_type)
          .select()
          .single();

        if (error) {
          console.error('Error updating data:', error);
          return new Response(
            JSON.stringify({ error: error.message }),
            { 
              status: 500, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
            }
          );
        }
        result = data;
      } else {
        // Insert new record
        console.log(`Inserting new record for data_type: ${data_type}`);
        const { data, error } = await supabase
          .from('portfolio_data')
          .insert({ data_type, content })
          .select()
          .single();

        if (error) {
          console.error('Error inserting data:', error);
          return new Response(
            JSON.stringify({ error: error.message }),
            { 
              status: 500, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
            }
          );
        }
        result = data;
      }

      console.log('Successfully saved data:', result);

      return new Response(
        JSON.stringify({ 
          success: true,
          message: existing ? 'Data updated successfully' : 'Data created successfully',
          data: result 
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Method not allowed
    return new Response(
      JSON.stringify({ error: 'Method not allowed. Use GET or POST.' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error: any) {
    console.error('Error in portfolio-api function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
