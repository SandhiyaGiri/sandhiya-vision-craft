import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--hero-overlay)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
              Sandhiya C V
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 font-light leading-relaxed fade-in-delay-1">
            Building intelligent systems that bridge AI and the real world
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-2">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-3 text-lg font-medium hover-lift"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg font-medium hover-lift"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;