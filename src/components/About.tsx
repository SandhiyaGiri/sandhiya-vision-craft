import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative fade-in">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <Card className="relative w-full h-full p-6 bg-white border-slate-200 hover:shadow-lg transition-all duration-300">
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
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                AI Scientist at 5C Network, specializing in developing vision and vision-language models for radiographic images, as well as medical imaging modalities such as CT, MRI, and X-ray. I have hands-on experience in building and deploying models for classification, detection, and segmentation tasks. Alongside my professional work, I also pursue hobby projects in agentic AI, workflow automation, and web development.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;