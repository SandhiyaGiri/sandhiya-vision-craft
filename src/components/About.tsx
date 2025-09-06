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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative fade-in">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/40 rounded-2xl rotate-3" />
              <Card className="relative w-full h-full p-6 bg-card hover:shadow-portfolio-lg transition-all duration-300 hover-lift">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👩‍💻</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      Sandhiya C V
                    </h3>
                    <p className="text-muted-foreground mt-2">AI Scientist</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-delay-1">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                A quick learner and curious about edge-cutting technologies and the world of 
                software engineering. I'm currently building vision and vision language models 
                for medical images, bridging the gap between AI innovation and real-world healthcare solutions.
              </p>
              
              <p>
                My journey spans from developing advanced medical AI models for radiograph analysis 
                to building intelligent systems that make a tangible impact in clinical workflows. 
                I believe in creating AI solutions where timing, trust, and clarity matter more than just technology.
              </p>
              
              <p>
                With experience across PyTorch, JAX, TensorFlow, and cutting-edge vision frameworks, 
                I'm passionate about transforming complex AI research into practical applications 
                that improve people's lives.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">8+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Classes Modeled</div>
              </div>
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