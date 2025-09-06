import { Card } from '@/components/ui/card';
import { CalendarDays, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Data Scientist',
    company: '5C Network',
    period: 'June 2025 - Present',
    location: 'Bangalore, India',
    description: 'Built and deployed fracture detection pipelines with cutting-edge vision frameworks and architectures, integrated expert validation and ensembling',
    highlights: [
      'Developed multi-class fracture detection models covering 5+ targetclasses',
      'Implemented expert validation workflows via Lable studio',
      'Automated AI observability using n8n',
      'Enhanced model performance with ensemble techniques'
    ]
  },
  {
    role: 'Data Science Intern',
    company: '5C Network',
    period: 'Jan 2025 - May 2025',
    location: 'Bangalore, India',
    description: 'Developed advanced medical AI models for radiograph analysis, including vision-language systems, while optimizing deep learning performance across PyTorch, JAX, and TensorFlow.',
    highlights: [
      'Built vision-language models for radiology',
      'Optimized performance across multiple ML frameworks',
      'Worked on state-of-the-art medical imaging solutions',
      'Contributed to cutting-edge AI research'
    ]
  },
  {
    role: 'Data Science Intern',
    company: 'Mquotient',
    period: 'Aug 2024 - Oct 2024',
    location: 'Remote',
    description: 'Built an image classification engine for financial documents across 50+ classes. Applied OCR with Tesseract and leveraged LLMs for post-processing to improve accuracy.',
    highlights: [
      'Developed classification system for 50+ document types',
      'Integrated OCR and text classification using SVM',
      'Enhanced accuracy with LLM post-processing',
      'Handled noisy OCR outputs effectively'
    ]
  },
  {
    role: 'Data Science Intern',
    company: 'Halliburton',
    period: 'April 2024 - May 2024',
    location: 'Bangalore, India',
    description: 'Developed an intelligent document querying system using RAG with graph-based retrieval for efficient information extraction from technical PDFs.',
    highlights: [
      'Built intelligent document querying system',
      'Implemented RAG with graph-based retrieval',
      'Enhanced information extraction capabilities',
      'Gained hands-on industry experience'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through AI and data science, from internships to building 
            production-ready medical AI systems
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-background" />

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="p-6 hover:shadow-portfolio-lg transition-all duration-300 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg font-medium text-accent mb-2">
                          {exp.company}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground text-sm">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 fade-in">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Education
          </h3>
          
          <Card className="p-6 hover:shadow-portfolio-lg transition-all duration-300 hover-lift max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                Bachelor of Engineering in Electronics and Communication
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                with minor degree in Data Science and Data Analytics
              </p>
              <h5 className="text-lg font-medium text-accent mb-2">
                Government College of Technology, Coimbatore
              </h5>
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  2021 - 2025
                </div>
                <div>
                  CGPA: 8.35
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "A place that showed me the true scale of the world, my place within it, and of course, some engineering along the way."
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;