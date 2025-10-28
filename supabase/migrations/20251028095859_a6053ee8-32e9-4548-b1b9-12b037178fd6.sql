-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create portfolio_data table for storing project and tech stack information
CREATE TABLE public.portfolio_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  data_type TEXT NOT NULL,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_data ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" 
ON public.portfolio_data 
FOR SELECT 
USING (true);

-- Create policy to allow public insert access
CREATE POLICY "Allow public insert access" 
ON public.portfolio_data 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow public update access
CREATE POLICY "Allow public update access" 
ON public.portfolio_data 
FOR UPDATE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_portfolio_data_updated_at
BEFORE UPDATE ON public.portfolio_data
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Insert initial portfolio data
INSERT INTO public.portfolio_data (data_type, content) VALUES
('about', '{"name": "Sandhiya C V", "title": "AI/ML Engineer & Computer Vision Specialist", "bio": "Passionate about building intelligent systems that solve real-world problems through AI, machine vision, and agentic workflows."}'::jsonb),
('tech_stack', '{"languages": ["Python", "JavaScript", "TypeScript", "SQL"], "frameworks": ["TensorFlow", "PyTorch", "React", "Node.js"], "ai_tools": ["Google Gemini", "OpenAI", "AWS Bedrock", "Agno"], "cloud": ["AWS", "Google Cloud", "Supabase"], "specializations": ["Computer Vision", "Agentic AI", "Deep Learning", "NLP"]}'::jsonb),
('projects', '{"projects": [{"title": "AI Boomi Hackathon — RightTime", "description": "AI-powered communication app that bridges consumers and delivery agents through smart translation, voice assistance, and schedule awareness.", "tech": ["Google Gemini", "Agno", "Multi-agent orchestration"], "type": "hackathon"}, {"title": "Google Agentic AI Hackathon — Sahayak", "description": "AI-powered multi-agent platform supporting teachers in multi-grade, low-resource classrooms with localized content and personalized learning aids.", "tech": ["Agentic AI", "Google AI"], "type": "hackathon"}, {"title": "AWS Super Hack — TechGenie", "description": "AI co-pilot for MSPs automating repetitive technician workflows including SLA monitoring, time tracking, and ticket resolution.", "tech": ["AWS Bedrock", "Agent Core", "SuperOps", "Jira"], "type": "hackathon"}]}'::jsonb);