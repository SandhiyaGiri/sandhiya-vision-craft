import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© 2025 Sandhiya C V</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm px-1"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm px-1"
            >
              Featured Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm px-1"
            >
              Let's Work Together
            </a>
            <a
              href="https://www.linkedin.com/in/sandhiya-c-v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm px-1"
              aria-label="Visit Sandhiya's LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Passionate about building AI systems that make a real-world impact. 
            Currently focusing on medical imaging and computer vision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;