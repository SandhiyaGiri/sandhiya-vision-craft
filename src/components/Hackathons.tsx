import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Award } from 'lucide-react';

const hackathons = [
  {
    title: 'AI Boomi Hackathon — RightTime',
    description: 'AI-powered communication app that bridges consumers and delivery agents through smart translation and schedule awareness.',
    details: 'Built using Google Gemini models and Agno multi-agent orchestration. Solo project with working MVP.',
    buttons: [
      { label: 'Deck', icon: FileText, link: '/src/assets/deck/AI-Boomi-Hackathon-Delivery.pdf' },
      { label: 'LinkedIn Post', icon: ExternalLink, link: 'https://www.linkedin.com/posts/sandhiya-c-v_as-far-back-as-i-can-remember-ive-always-activity-7369057066868490241-Wpk9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnxq-8BZGuw77Zgd3AaHWG4D_fwwRtKxnk' }
    ]
  },
  {
    title: 'Google Agentic AI Hackathon — Sahayak',
    description: 'AI-powered multi-agent platform that supports teachers in multi-grade, low-resource classrooms.',
    details: 'Generates localized content and personalized learning aids. Sparked deep interest in Agentic AI workflows.',
    buttons: [
      { label: 'Deck', icon: FileText, link: '/src/assets/deck/Google-Agentic-AI-Sahayak.pdf' },
      { label: 'Certificate', icon: Award, link: '/src/assets/certificates/Hack2skill-Certificate.png' }
    ]
  },
  {
    title: 'AWS Super Hack — TechGenie',
    description: 'AI co-pilot for Managed Service Providers that automates repetitive technician workflows.',
    details: 'Built on AWS Bedrock and Agent Core. Currently shortlisted for second round.',
    buttons: [
      { label: 'Deck', icon: FileText, link: '/src/assets/deck/Super-Hac-MSP-system.pdf' }
    ]
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="hackathons-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 id="hackathons-heading" className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-4">
            Hackathons
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Exploring, experimenting, and learning through real-world innovation challenges.
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card
              key={hackathon.title}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden fade-in bg-white border-slate-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 leading-tight">
                  {hackathon.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  {hackathon.description}
                </p>

                {/* Details */}
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {hackathon.details}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {hackathon.buttons.map((button) => {
                    const IconComponent = button.icon;
                    return (
                      <Button
                        key={button.label}
                        variant="outline"
                        size="sm"
                        className="border-slate-300 text-slate-700 hover:bg-slate-50"
                        asChild
                      >
                        <a
                          href={button.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent className="w-4 h-4 mr-2" />
                          {button.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
