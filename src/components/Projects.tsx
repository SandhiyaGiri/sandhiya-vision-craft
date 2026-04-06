import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Stethoscope, Brain, FileText, BarChart3, MessageSquare, Eye, Mic, Heart, Activity, Smartphone, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Laminar Dental - Dental Scribe Platform',
    year: '2025-Present',
    description: 'Professional dental practice management and documentation platform.',
    techStack: ['Full Stack', 'Healthcare'],
    why: 'Advanced dental practice management system.',
    tags: ['Full Stack', 'Healthcare'],
    category: 'Healthcare',
    icon: Stethoscope,
    outcome: 'Dental practice optimized',
    color: 'from-red-500/20 to-red-600/20',
    fullStack: 'Comprehensive dental management platform.',
    websiteLink: 'https://laminardental.com/',
    isWebsiteOnly: true
  },
  {
    title: 'Sangre - Telehealth Insight Companion',
    year: '2025',
    description: 'Multilingual AI voice assistant for explaining health reports with voice-based conversations and safety guardrails.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ElevenLabs WebRTC', 'JSON Schema Validation'],
    why: 'Built a full-stack voice-first health assistant enabling patients to understand lab results through empathetic conversations in 5 languages. Designed report validation pipeline, insight generation with reference ranges, and integrated ElevenLabs agent for real-time voice interaction with safety guardrails.',
    tags: ['Full Stack', 'Healthcare', 'Agentic AI', 'RAG'],
    category: 'Healthcare',
    icon: Mic,
    outcome: 'Multilingual voice health companion',
    color: 'from-cyan-500/20 to-cyan-600/20',
    fullStack: 'Frontend: Next.js with voice UI, real-time transcription. Backend: Report validation, insight pipeline, ElevenLabs agent integration.',
    demoLink: 'https://drive.google.com/file/d/1k0uqJAMRioWqMsaSbQqqa7DDD3PzT6gQ/view?usp=sharing',
    codeLink: 'https://github.com/SandhiyaGiri/sangre'
  },
  {
    title: 'Medical Interpreter',
    year: '2026',
    description: 'AI-powered medical data interpretation using Google Gemini for intelligent analysis and insights.',
    techStack: ['Google Gemini API', 'React', 'TypeScript', 'Tailwind CSS', 'AI Studio'],
    why: 'Developed an intelligent medical data analysis tool leveraging Gemini API for real-time interpretation of medical reports and lab results. Designed intuitive UI for inputting medical data and receiving AI-powered insights.',
    tags: ['Full Stack', 'Healthcare', 'Agentic AI', 'RAG'],
    category: 'Healthcare',
    icon: Brain,
    outcome: 'AI-powered medical analysis',
    color: 'from-purple-500/20 to-purple-600/20',
    fullStack: 'Frontend: React with TypeScript. Backend: Gemini API integration for medical data processing.',
    demoLink: 'https://youtu.be/NsP96Kif8lw?si=oZQj75rjgIQGCsQk',
    codeLink: 'https://github.com/SandhiyaGiri/medical-interpreter'
  },
  {
    title: 'Finzly Quiz Kiosk',
    year: '2026',
    description: 'Interactive kiosk application for banking readiness assessment with instant scoring and report generation.',
    techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Express.js', 'PostgreSQL'],
    why: 'Architected a full-stack interactive quiz platform with lead capture, real-time scoring, and report generation. Built animated frontend with instant feedback, designed backend API for score calculation and admin features including Excel export functionality.',
    tags: ['Full Stack'],
    category: 'Full Stack',
    icon: BarChart3,
    outcome: 'Interactive quiz & reporting system',
    color: 'from-amber-500/20 to-amber-600/20',
    fullStack: 'Frontend: React + Vite with smooth animations and interactive flows. Backend: Express.js APIs, score calculation, admin panel for exports.'
  },
  {
    title: 'CorpusRush - Document Reasoning Pipeline',
    year: '2026',
    description: 'High-performance document ingestion and Q&A system with multi-format support and source attribution.',
    techStack: ['Python', 'Azure AI', 'FastAPI', 'FAISS', 'Embedding API', 'PyPDF2', 'DOCX', 'XLSX'],
    why: 'Built an end-to-end document processing pipeline handling PDF, DOCX, and XLSX formats. Designed intelligent chunking with metadata tracking, Azure AI embeddings, FAISS vector indexing, and retrieval-augmented generation for accurate Q&A with source citations.',
    tags: ['Full Stack', 'Agentic AI', 'RAG'],
    category: 'Full Stack',
    icon: FileText,
    outcome: 'Multi-format document Q&A system',
    color: 'from-green-500/20 to-green-600/20',
    fullStack: 'Backend: Python pipeline with Azure API integration, FastAPI serving. Processing: Multi-format parsing, chunking, embeddings, vector search, LLM integration.',
    codeLink: 'https://github.com/SandhiyaGiri/CorpusRush'
  },
  {
    title: 'Personalized Health Assistant',
    year: '2025',
    description: 'Multi-agent health platform featuring meal planning, glucose monitoring and nutrition analysis.',
    techStack: ['AI Agents', 'Agno', 'Google AI Studio', 'FastAPI', 'Next.js', 'SQLite'],
    why: 'Architected a multi-agent health platform using the Agno framework, orchestrating 6 AI agents with intelligent intent routing and cross-agent communication. Developed a full-stack conversational interface with FastAPI backend, Next.js frontend for meal planning and health tracking.',
    tags: ['Agentic AI', 'Healthcare'],
    category: 'Healthcare',
    icon: Heart,
    outcome: '6 AI agents orchestrated',
    color: 'from-pink-500/20 to-pink-600/20',
    fullStack: 'Frontend: Next.js interface for meal planning. Backend: FastAPI with Agno agents orchestration.',
    codeLink: 'https://github.com/SandhiyaGiri/health_agent'
  },
  {
    title: 'Radiology Reporting System for BPL X-Ray',
    year: '2025',
    description: 'AI system for predicting pathologies and generating automated radiology reports.',
    techStack: ['PyTorch', 'Detectron2', 'Roboflow', 'Medical Imaging (DICOM)', 'Faster R-CNN', 'YOLO'],
    why: 'Developed an AI system capable of predicting pathologies and generating automated radiology reports immediately after X-ray acquisition. Architected a multi-stage diagnostic pipeline for normal/abnormal classification, device detection, and multi-pathology segmentation across 21 conditions.',
    tags: ['Computer Vision', 'Healthcare'],
    category: 'Healthcare',
    icon: Activity,
    outcome: '21 conditions detected',
    color: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    title: 'Q&A Retrieval System (Graph-based)',
    year: '2024',
    description: 'Intelligent PDF querying using RAG with graph-based retrieval and hybrid search.',
    techStack: ['Neo4j', 'Cypher', 'Embeddings', 'BM25', 'Reranker', 'Streamlit'],
    why: 'Developed a retrieval-augmented generation system for multi-PDF datasets during internship at Halliburton. Built graph relationships between text chunks and entities for structured retrieval. Combined dense and sparse encoders with reranking to improve answer relevance by 25-35%.',
    tags: ['Agentic AI', 'RAG'],
    category: 'Full Stack',
    icon: FileText,
    outcome: 'Multi-PDF RAG system',
    color: 'from-orange-500/20 to-orange-600/20',
    codeLink: 'https://github.com/SandhiyaGiri/CorpusRush'
  }
];

const allTags = ['Full Stack', 'Agentic AI', 'Healthcare', 'Computer Vision', 'RAG'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
    if (tag === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tags.includes(tag)));
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Projects & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack applications, AI-powered systems, and intelligent healthcare solutions
            built with modern engineering practices
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-delay-1">
          <button
            onClick={() => handleFilterChange('All')}
            className={`project-tag ${activeFilter === 'All' ? 'active' : ''}`}
          >
            All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilterChange(tag)}
              className={`project-tag ${activeFilter === tag ? 'active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.title}
                className="group hover:shadow-portfolio-hover transition-all duration-300 hover-lift overflow-hidden fade-in bg-card/50 backdrop-blur-sm flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-7 h-7 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.year}
                      </p>
                      <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full inline-block">
                        {project.outcome}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-border mt-auto">
                    {project.isWebsiteOnly ? (
                      <Button
                        size="sm"
                        className="flex-1 bg-accent hover:bg-accent-hover text-accent-foreground"
                        asChild
                      >
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Know More
                        </a>
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:bg-accent hover:text-accent-foreground hover:border-accent"
                          asChild
                        >
                          <a
                            href={project.codeLink || "https://www.github.com/SandhiyaGiri"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-accent hover:bg-accent-hover text-accent-foreground"
                          asChild
                        >
                          <a href={project.demoLink || "#contact"} target={project.demoLink ? "_blank" : undefined} rel={project.demoLink ? "noopener noreferrer" : undefined}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {project.demoLink ? 'Demo Video' : 'Details'}
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;