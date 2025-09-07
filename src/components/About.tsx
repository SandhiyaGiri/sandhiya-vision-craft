import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Download, Github } from 'lucide-react';

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-sandhiya-cv.pdf';
    link.download = 'Sandhiya_CV_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative fade-in">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/40 rounded-2xl rotate-3" />
              <Card className="relative w-full h-full p-6 bg-card hover:shadow-portfolio-lg transition-all duration-300 hover-lift">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Sandhiya C V" 
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-delay-1">
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                AI Scientist at 5C Network, specializing in developing vision and vision-language models for radiographic images, as well as medical imaging modalities such as CT, MRI, and X-ray. I have hands-on experience in building and deploying models for classification, detection, and segmentation tasks. Alongside my professional work, I also pursue hobby projects in agentic AI, workflow automation, and web development.
              </p>
            </div>


            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadResume}
                className="hover-lift bg-accent hover:bg-accent-hover"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                asChild
                className="hover-lift"
              >
                <a
                  href="mailto:sandhiyagiri07@gmail.com"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              
              <Button
                variant="outline"
                asChild
                className="hover-lift"
              >
                <a
                  href="https://www.github.com/SandhiyaGiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;