import { Card } from '@/components/ui/card';
import { Code, Cpu, Stethoscope, Eye, Wrench, Database, Cloud, Globe } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      items: ["Python", "JavaScript", "TypeScript", "C/C++"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "AI/ML Frameworks",
      icon: Cpu,
      items: ["PyTorch", "JAX", "TensorFlow", "Agno", "Google AI Studio"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      title: "Medical Imaging Libraries",
      icon: Stethoscope,
      items: ["MONAI", "torchxrayvision", "SLANTbrainSeg", "TotalSegmentator", "DICOM"],
      color: "from-red-500/20 to-red-600/20"
    },
    {
      title: "Vision Libraries",
      icon: Eye,
      items: ["Detectron2", "YOLO", "Roboflow", "MMDetection", "Faster R-CNN", "RetinaNet"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      items: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "LiveKit WebRTC"],
      color: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      items: ["PostgreSQL", "SQLite", "Supabase", "GCP", "Docker", "Render"],
      color: "from-teal-500/20 to-teal-600/20"
    },
    {
      title: "AI Agents & Tools",
      icon: Cloud,
      items: ["CopilotKit", "AG-UI", "Whisper", "Kimi-K2", "Docker Compose"],
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      items: ["Visual Studio Code", "Cursor", "Lovable", "Jupyter Notebook", "GitHub"],
      color: "from-gray-500/20 to-gray-600/20"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build AI solutions for medical imaging and computer vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-portfolio-lg transition-all duration-300 hover-lift bg-card/50 backdrop-blur-sm"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="px-3 py-2 bg-muted/50 rounded-lg text-sm font-medium text-foreground/90 hover:bg-muted/70 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;