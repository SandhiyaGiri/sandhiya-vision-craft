import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Download, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "NPTEL Computer Vision",
      issuer: "National Programme on Technology Enhanced Learning",
      description: "Comprehensive course covering computer vision fundamentals, image processing, and deep learning applications",
      pdfPath: "/certificates/Sandhiya_Computer_Vision_NPTEL.pdf",
      icon: Award,
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "NPTEL Deep Learning",
      issuer: "National Programme on Technology Enhanced Learning",
      description: "Advanced deep learning concepts including neural networks, CNNs, RNNs, and modern architectures",
      pdfPath: "/certificates/Sandhiya_Deep_Learning_NPTEL.pdf",
      icon: Award,
      color: "from-green-500/20 to-green-600/20"
    },
    {
      title: "iWE League Scholar",
      issuer: "Ananya's Goldman Sachs iWE League",
      description: "Recognition for excellence in women's entrepreneurship and technology leadership",
      pdfPath: "/certificates/iWE League Scholar -  SANDHIYA C V.pdf",
      icon: Award,
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "GATE 2024 Data Science and Analytics",
      issuer: "Graduate Aptitude Test in Engineering",
      description: "Score: 39.67 | All India Rank: 5158",
      externalLink: "https://drive.google.com/file/d/1S6tPJcQ2Bfh1e1hp2QLWc9Ms8NcJkjs5/view?usp=sharing",
      icon: Award,
      color: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      title: "GATE 2024 ECE",
      issuer: "Graduate Aptitude Test in Engineering",
      description: "Score: 26 | All India Rank: 7458",
      externalLink: "https://drive.google.com/file/d/1MLDYM1qbR_TSQgmA-uEaIQ8ejNdD0sW6/view?usp=sharing",
      icon: Award,
      color: "from-orange-500/20 to-orange-600/20"
    }
  ];

  const handleDownload = (pdfPath: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    link.target = '_blank';
    link.click();
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Certifications & Recognitions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and academic recognitions in AI, computer vision, and technology leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-portfolio-lg transition-all duration-300 hover-lift bg-card/50 backdrop-blur-sm flex flex-col h-full"
              >
                <div className="flex-grow">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-foreground" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 font-medium">
                    {cert.issuer}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {cert.externalLink ? (
                  <Button
                    asChild
                    className="w-full hover-lift bg-accent hover:bg-accent-hover"
                    size="sm"
                  >
                    <a href={cert.externalLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleDownload(cert.pdfPath, cert.title)}
                    className="w-full hover-lift bg-accent hover:bg-accent-hover"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;