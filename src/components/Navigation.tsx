import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#hackathons', label: 'Hackathons' },
    { href: '#projects', label: 'Featured Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#architectures', label: 'Architectures' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Let\'s Work Together' },
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement('a');
    link.href = '/resume-sandhiya-cv.pdf';
    link.download = 'Sandhiya_CV_Resume.pdf';
    link.click();
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-slate-900 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-700 transition-colors"
      >
        Skip to content
      </a>
      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-sm shadow-portfolio-md'
            : 'bg-transparent'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-heading font-bold text-slate-900">
              Sandhiya CV
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-medium transition-colors ${
                    isActive 
                      ? 'text-slate-900 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadResume}
                className="hover-lift"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover-lift"
              >
                <a
                  href="https://www.linkedin.com/in/sandhiya-c-v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadResume}
                  className="w-full justify-start"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full justify-start"
                >
                  <a
                    href="https://www.linkedin.com/in/sandhiya-c-v"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;