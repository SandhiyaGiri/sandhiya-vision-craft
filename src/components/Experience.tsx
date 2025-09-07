import { Card } from '@/components/ui/card';
import { CalendarDays, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Data Scientist',
    company: '5C Network',
    period: 'June 2025 - Present',
    location: 'Bangalore, India',
    description: 'Built and deployed fracture detection pipelines with cutting-edge vision frameworks and architectures, integrated expert validation and ensembling',
    isCurrent: true,
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
    period: 'April 2024 - May 2024',
    location: 'Bangalore, India',
    description: 'Developed an intelligent document querying system using RAG with graph-based retrieval for efficient information extraction from technical PDFs.',
    isCurrent: false,
    type: 'Work'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            My Path to AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From internships to building production-ready medical AI systems, each step taught me something about building what matters.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-6 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-2 ${
                  exp.isCurrent ? 'bg-blue-500' : 'bg-green-500'
                }`} />

                {/* Content card */}
                <Card className="flex-1 p-6 hover:shadow-lg transition-all duration-300 hover-lift bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-medium text-accent mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">
                          {exp.period}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {exp.location}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          exp.type === 'Work' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 fade-in">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />
            
            <div className="relative flex items-start gap-6">
              <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 mt-2" />
              
              <Card className="flex-1 p-6 hover:shadow-lg transition-all duration-300 hover-lift bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-heading font-bold text-foreground mb-1">
                      Bachelor of Engineering in Electronics and Communication
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      with minor degree in Data Science and Data Analytics
                    </p>
                    <h5 className="text-lg font-medium text-accent mb-3">
                      Government College of Technology, Coimbatore
                    </h5>
                    <p className="text-muted-foreground italic">
                      "A place that showed me the true scale of the world, my place within it, and of course, some engineering along the way."
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">
                        2021 - 2025
                      </div>
                      <div className="text-sm text-muted-foreground">
                        CGPA: 8.35
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Education
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;