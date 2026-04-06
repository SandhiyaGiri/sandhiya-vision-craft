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
                    src="./sandhiya-github.jpeg"
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
                I'm a Full Stack Engineer with a background in computer vision, with experience across early-stage startups and enterprise environments like Halliburton. I started in data science and went on to deliver a computer vision system that exceeded expectations and directly contributed to revenue growth.
              </p>
              <p>
                Through hackathons and hands-on projects, I developed a strong interest in building end-to-end products, which led me to focus on full-stack development. I'm particularly interested in applying AI within software systems and working in teams that value strong engineering and innovation.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;