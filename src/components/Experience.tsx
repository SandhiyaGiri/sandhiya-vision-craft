import { Card } from '@/components/ui/card';
import { CalendarDays, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Founding Engineer',
    company: 'Cornet Health',
    period: 'Nov 2025 - Present',
    location: 'Bengaluru, India',
    description: 'Built a high-performance image classification system for 46 classes with <500ms latency; worked closely with clients during integration, delivering beyond scope and contributing directly to revenue growth.',
    isCurrent: true,
    type: 'Work'
  },
  {
    role: 'Data Scientist',
    company: '5C Network',
    period: 'June 2025 - Nov 2025',
    location: 'Bangalore, India',
    description: 'Gained in-depth domain expertise in medical imaging and radiology to design clinically relevant models with secondary capture integration. Developed and deployed an AI system for predicting pathologies and generating automated radiology reports immediately after X-ray acquisition.',
    isCurrent: false,
    type: 'Work'
  },
  {
    role: 'Data Science Intern',
    company: '5C Network',
    period: 'Jan 2025 - May 2025',
    location: 'Bangalore, India',
    description: 'Developed advanced medical AI models for radiograph analysis, including vision-language systems, while optimizing deep learning performance across PyTorch, JAX, and TensorFlow.',
    isCurrent: false,
    type: 'Work'
  },
  {
    role: 'Data Science Intern',
    company: 'Mquotient',
    period: 'Aug 2024 - Oct 2024',
    location: 'Remote',
    description: 'Built an image classification engine for financial documents across 50+ classes. Applied OCR with Tesseract and leveraged LLMs for post-processing to improve accuracy.',
    isCurrent: false,
    type: 'Work'
  },
  {
    role: 'Data Science Intern',
    company: 'Halliburton',
    period: 'Apr 2024 - May 2024',
    location: 'Bangalore, India',
    description: 'Developed an intelligent document querying system using RAG with graph-based retrieval for efficient information extraction from technical PDFs.',
    isCurrent: false,
    type: 'Work'
  },
  {
    role: 'Bachelor of Engineering in Electronics and Communication',
    company: 'Government College of Technology, Coimbatore',
    period: '2021 - 2025',
    location: 'CGPA: 8.35',
    description: 'with minor degree in Data Science and Data Analytics. A place that showed me the true scale of the world, my place within it, and of course, some engineering along the way.',
    isCurrent: false,
    type: 'Education'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
            My Path to AI
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            From internships to building production-ready medical AI systems, each step taught me something about building what matters.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-4 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 mt-5 z-10 ${exp.isCurrent ? 'bg-blue-500' : exp.type === 'Education' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />

                {/* Content card */}
                <Card className="flex-1 p-4 hover:shadow-md transition-all duration-300 hover-lift bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-heading font-semibold text-foreground mb-0.5 leading-snug">
                        {exp.role}
                      </h3>
                      <h4 className="text-xs font-medium text-muted-foreground mb-2">
                        {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0 flex-wrap sm:justify-end">
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${exp.type === 'Work'
                        ? 'border-green-500 text-green-700'
                        : exp.type === 'Education'
                          ? 'border-yellow-500 text-yellow-700'
                          : 'border-blue-500 text-blue-700'
                        }`}>
                        {exp.type}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-500 text-white">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;