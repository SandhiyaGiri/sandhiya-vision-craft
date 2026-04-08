import { ChevronDown, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start bg-white px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto w-full pt-20 lg:pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text content */}
          <div className="fade-in order-2 lg:order-1">
            {/* Role badge */}
            <div className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-600 mb-6">
              Full Stack Engineer
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Sandhiya C V
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
              I build end-to-end products as a Full Stack Engineer.
              Focused on backend systems, frontend clarity, and applied AI.
              Experience across startups and enterprise environments.
              Driven by ownership, speed, and real-world impact.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <Button
                className="bg-gray-900 text-white hover:bg-gray-700 px-6 h-11 text-sm font-medium"
                asChild
              >
                <a href="/Sandhiya_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/sandhiya-c-v"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                asChild
              >
                <a
                  href="https://www.github.com/SandhiyaGiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="flex justify-center lg:justify-end fade-in order-1 lg:order-2">
            {/* Wrapper gives bubbles a local positioning context */}
            <div className="relative">
              {/* Decorative circle — top right of photo */}
              <div className="absolute -top-4 -right-3 w-9 h-9 rounded-full bg-blue-300/70 z-10" />
              {/* Decorative circle — bottom left of photo */}
              <div className="absolute -bottom-3 -left-3 w-7 h-7 rounded-full bg-purple-300/70 z-10" />

              {/* Photo */}
              <div className="w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/sandhiya-github.jpeg"
                  alt="Sandhiya C V"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#experience"
          className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-sm mb-1.5">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
