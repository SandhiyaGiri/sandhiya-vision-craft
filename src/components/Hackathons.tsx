import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Award, Github, Brain, Mic, Zap, Users } from 'lucide-react';

const hackathons = [
  {
    title: 'Lucio AI Hackathon — CorpusRush',
    year: '2026',
    description: 'High-performance document reasoning pipeline with multi-format support and source attribution.',
    techStack: ['Python', 'Azure AI', 'FastAPI', 'FAISS', 'RAG'],
    outcome: 'Multi-format document Q&A',
    icon: FileText,
    color: 'from-green-500/20 to-green-600/20',
    codeLink: 'https://github.com/SandhiyaGiri/CorpusRush',
    demoLink: null,
    deckLink: null,
    certificateLink: null,
    linkedinLink: null,
  },
  {
    title: 'ElevenLabs Hackathon — Sangre',
    year: '2025',
    description: 'Multilingual telehealth companion for understanding health reports through empathetic voice conversations.',
    techStack: ['Next.js', 'TypeScript', 'ElevenLabs WebRTC', 'Tailwind CSS'],
    outcome: 'Multilingual voice companion',
    icon: Mic,
    color: 'from-cyan-500/20 to-cyan-600/20',
    codeLink: 'https://github.com/SandhiyaGiri/sangre',
    demoLink: 'https://drive.google.com/file/d/1k0uqJAMRioWqMsaSbQqqa7DDD3PzT6gQ/view?usp=sharing',
    deckLink: null,
    certificateLink: null,
    linkedinLink: null,
  },
  {
    title: 'Google Gemini AI Hackathon — Medical Interpreter',
    year: '2026',
    description: 'AI-powered medical data interpretation tool for intelligent health report analysis.',
    techStack: ['Google Gemini API', 'React', 'TypeScript', 'Tailwind CSS'],
    outcome: 'AI-powered medical analysis',
    icon: Brain,
    color: 'from-purple-500/20 to-purple-600/20',
    codeLink: 'https://github.com/SandhiyaGiri/medical-interpreter',
    demoLink: 'https://youtu.be/NsP96Kif8lw?si=oZQj75rjgIQGCsQk',
    deckLink: null,
    certificateLink: null,
    linkedinLink: null,
  },
  {
    title: 'AI Boomi Hackathon — RightTime',
    year: '2025',
    description: 'AI-powered communication app that bridges consumers and delivery agents through smart translation and schedule awareness.',
    techStack: ['Google Gemini', 'Agno', 'Multi-agent'],
    outcome: 'Smart delivery communication',
    icon: Zap,
    color: 'from-orange-500/20 to-orange-600/20',
    codeLink: null,
    demoLink: null,
    deckLink: '/deck/AI-Boomi-Hackathon-Delivery.pdf',
    certificateLink: null,
    linkedinLink: 'https://www.linkedin.com/posts/sandhiya-c-v_as-far-back-as-i-can-remember-ive-always-activity-7369057066868490241-Wpk9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnxq-8BZGuw77Zgd3AaHWG4D_fwwRtKxnk',
  },
  {
    title: 'Google Agentic AI Hackathon — Sahayak',
    year: '2025',
    description: 'AI-powered multi-agent platform that supports teachers in multi-grade, low-resource classrooms with localized content.',
    techStack: ['Google AI', 'Agno', 'Multi-agent', 'LLM'],
    outcome: 'Teacher support platform',
    icon: Users,
    color: 'from-blue-500/20 to-blue-600/20',
    codeLink: null,
    demoLink: null,
    deckLink: '/deck/Google-Agentic-AI-Sahayak.pdf',
    certificateLink: '/certificates/Hack2skill-Certificate.png',
    linkedinLink: null,
  },
  {
    title: 'AWS Super Hack — TechGenie',
    year: '2025',
    description: 'AI co-pilot for Managed Service Providers that automates repetitive technician workflows.',
    techStack: ['AWS Bedrock', 'Agent Core', 'AI'],
    outcome: 'MSP workflow automation',
    icon: Zap,
    color: 'from-amber-500/20 to-amber-600/20',
    codeLink: null,
    demoLink: null,
    deckLink: '/deck/Super-Hac-MSP-system.pdf',
    certificateLink: null,
    linkedinLink: null,
  },
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="hackathons-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 id="hackathons-heading" className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Hackathons
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring, experimenting, and learning through real-world innovation challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => {
            const IconComponent = hackathon.icon;
            return (
              <Card
                key={hackathon.title}
                className="group hover:shadow-portfolio-hover transition-all duration-300 hover-lift overflow-hidden fade-in bg-card/50 backdrop-blur-sm flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${hackathon.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-7 h-7 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors leading-tight">
                        {hackathon.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{hackathon.year}</p>
                      <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full inline-block">
                        {hackathon.outcome}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed flex-grow">
                    {hackathon.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hackathon.techStack.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-border mt-auto flex-wrap">
                    {hackathon.codeLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                        asChild
                      >
                        <a href={hackathon.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {hackathon.demoLink && (
                      <Button
                        size="sm"
                        className="flex-1 bg-accent text-white hover:bg-blue-700"
                        asChild
                      >
                        <a href={hackathon.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo Video
                        </a>
                      </Button>
                    )}
                    {hackathon.deckLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                        asChild
                      >
                        <a href={hackathon.deckLink} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-2" />
                          Deck
                        </a>
                      </Button>
                    )}
                    {hackathon.certificateLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                        asChild
                      >
                        <a href={hackathon.certificateLink} target="_blank" rel="noopener noreferrer">
                          <Award className="w-4 h-4 mr-2" />
                          Certificate
                        </a>
                      </Button>
                    )}
                    {hackathon.linkedinLink && (
                      <Button
                        size="sm"
                        className="flex-1 bg-accent text-white hover:bg-blue-700"
                        asChild
                      >
                        <a href={hackathon.linkedinLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          LinkedIn Post
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
