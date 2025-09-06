import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement('a');
    link.href = '/resume-sandhiya-cv.pdf';
    link.download = 'Sandhiya_CV_Resume.pdf';
    link.click();
  };

  return (
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
            <h1 className="text-xl font-heading font-bold text-foreground">
              Sandhiya CV
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-foreground hover:text-accent font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            
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
                  className="block px-3 py-2 text-foreground hover:text-accent font-medium transition-colors"
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
  );
};

export default Navigation;