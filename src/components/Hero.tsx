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
    link.href = '/resume-sandhiya-cv.pdf';
    link.download = 'Sandhiya_CV_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Grey Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(29,78,216,0.05),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-slate-800 mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Sandhiya C V
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 mb-6 font-semibold leading-relaxed fade-in-delay-1">
            AI Scientist & Computer Vision Expert
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto fade-in-delay-1">
            Specializing in medical imaging, vision-language models, and building intelligent systems that bridge AI and healthcare
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-delay-2">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold hover-lift min-w-[180px] shadow-lg"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button
              onClick={handleDownloadResume}
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 text-lg font-semibold hover-lift min-w-[180px] shadow-lg"
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
          className="flex flex-col items-center text-slate-500 hover:text-slate-700 transition-colors"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;