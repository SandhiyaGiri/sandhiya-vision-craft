import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Sandhiya_DataScience.pdf';
    link.download = 'Sandhiya_DataScience.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean White Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-gray-900 mb-8 leading-tight">
            Sandhiya C V
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-6 font-medium leading-relaxed fade-in-delay-1">
            AI Scientist & Computer Vision Expert
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-12 font-normal leading-relaxed max-w-3xl mx-auto fade-in-delay-1">
            AI Scientist and admirer with experience in developing agentic systems and a belief in first-principles learning, seeking opportunities to solve problems where full-stack engineering meets agentic workflows in a startup that values strong culture and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-delay-2">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium hover-lift min-w-[180px] shadow-sm border-0"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button
              onClick={handleDownloadResume}
              size="lg"
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 text-lg font-medium hover-lift min-w-[180px] shadow-sm"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 hover:text-gray-700 transition-colors"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;