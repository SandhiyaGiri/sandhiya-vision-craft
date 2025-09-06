import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Please fill in all fields',
        description: 'All fields are required to send your message.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again or contact me directly via email.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sandhiyagiri07@gmail.com',
      href: 'mailto:sandhiyagiri07@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7871019893',
      href: 'tel:+917871019893'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sandhiya-c-v',
      href: 'https://www.linkedin.com/in/sandhiya-c-v'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'SandhiyaGiri',
      href: 'https://www.github.com/SandhiyaGiri'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss AI opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Get in Touch
            </h3>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm always excited to collaborate on innovative AI projects, especially 
              in healthcare and computer vision. Whether you have a specific project 
              in mind or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center space-x-4 fade-in-delay-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {info.label}
                    </p>
                    <a
                      href={info.href}
                      target={info.label === 'Email' || info.label === 'Phone' ? '_self' : '_blank'}
                      rel={info.label === 'Email' || info.label === 'Phone' ? '' : 'noopener noreferrer'}
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-8 p-4 bg-card rounded-lg border">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="text-foreground">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-delay-2">
            <Card className="p-6">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can work together..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover hover-lift"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;