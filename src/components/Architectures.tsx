import { Card } from '@/components/ui/card';
import { Brain, Target, Layers, MessageSquare } from 'lucide-react';

const Architectures = () => {
  const architectureCategories = [
    {
      title: "Classification",
      icon: Brain,
      items: ["ResNet", "ResNeXt", "DenseNet", "ViT", "EfficientNet"],
      color: "from-blue-500/20 to-blue-600/20",
      description: "Image classification models for medical diagnosis"
    },
    {
      title: "Detection",
      icon: Target,
      items: ["Faster-RCNN", "Detection-Transformer (DETR)", "RetinaNet", "EfficientDet", "YOLO"],
      color: "from-green-500/20 to-green-600/20",
      description: "Object detection for medical imaging analysis"
    },
    {
      title: "Segmentation",
      icon: Layers,
      items: ["U-Net", "YOLO-Seg", "PSPNet", "SLANT"],
      color: "from-purple-500/20 to-purple-600/20",
      description: "Pixel-level segmentation for anatomical structures"
    },
    {
      title: "Vision-Language Models",
      icon: MessageSquare,
      items: ["BioMedCLIP", "MedGemma", "Radiolog"],
      color: "from-orange-500/20 to-orange-600/20",
      description: "Multimodal models for medical text-image understanding"
    }
  ];

  return (
    <section id="architectures" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Experimented Architectures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep learning architectures I've worked with for various computer vision and medical imaging tasks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {architectureCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-portfolio-lg transition-all duration-300 hover-lift bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="px-4 py-3 bg-muted/50 rounded-lg text-sm font-medium text-foreground/90 hover:bg-muted/70 transition-colors border border-border/50"
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

export default Architectures;