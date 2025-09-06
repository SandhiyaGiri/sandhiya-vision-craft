import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Ankle Fracture Detection',
    year: '2025',
    description: 'Detection of fractures in radiographs using state-of-the-art vision frameworks.',
    techStack: ['PyTorch', 'YOLOv8/v11', 'Detectron2', 'RF-DETR', 'Faster R-CNN', 'CLAHE', 'LabelStudio', 'GCP', 'n8n'],
    why: 'Developed multi-class fracture detection models on annotated X-ray datasets (AXR, HIL) covering 38 fracture classes. Addressed the issue of view variation involved in Ankle Fracture detection and built each model specifically for different views.',
    tags: ['Computer Vision', 'Healthcare', 'Deep Learning'],
    category: 'Healthcare'
  },
  {
    title: 'Shoulder Fracture Detection',
    year: '2025',
    description: 'Building robust fracture classification and detection systems for shoulder X-rays.',
    techStack: ['PyTorch', 'RF-DETR', 'MMDetection RTMDet', 'YOLO', 'Faster R-CNN'],
    why: 'Designed binary and multi-class models to distinguish normal and fracture cases in shoulder radiographs. RF-DETR Large outperformed baseline models with ~88% recall post human-in-loop validation.',
    tags: ['Computer Vision', 'Healthcare', 'AI'],
    category: 'Healthcare'
  },
  {
    title: 'Pleural Effusion Segmentation',
    year: '2025',
    description: 'Advanced segmentation of pleural effusion in chest radiographs.',
    techStack: ['PyTorch', 'MONAI', 'UNet', 'UNet++', 'Attention UNet', 'SwinUNETR', 'YOLO', 'TorchXRayVision'],
    why: 'Trained and compared 7 segmentation models on a dataset of 6,223 annotated images. YOLO and TorchXRayVision models demonstrated superior results due to pretraining on large-scale CXR datasets, highlighting the importance of domain-specific transfer learning.',
    tags: ['Computer Vision', 'Segmentation', 'Healthcare'],
    category: 'Healthcare'
  },
  {
    title: 'Vision-Language Models for Radiology',
    year: '2025',
    description: 'Bridging imaging and reporting through multimodal AI.',
    techStack: ['PyTorch', 'JAX', 'TensorFlow', 'MONAI VILA V3', 'PaliGemma', 'MedGemma', 'BioMedCLIP', 'BioMedLM'],
    why: 'Built VLM pipelines aligning radiographs with reports for diagnostic support. Experimented with zero-shot inference, fine-tuned BioMedCLIP for classification (~83% accuracy), and trained models on 40k image-report pairs.',
    tags: ['LLM', 'Computer Vision', 'Healthcare', 'Multimodal'],
    category: 'Research'
  },
  {
    title: 'Q&A Retrieval System (Graph-based)',
    year: '2024',
    description: 'Intelligent PDF querying using RAG with graph-based retrieval.',
    techStack: ['Neo4j', 'Cypher', 'ember-v1 embeddings', 'BM25', 'Reranker', 'Streamlit'],
    why: 'Developed a retrieval-augmented generation (RAG) system to query multi-PDF datasets. Built graph relationships between text chunks and entities for structured retrieval. Combined dense and sparse encoders with reranking.',
    tags: ['RAG', 'Graph DB', 'NLP'],
    category: 'NLP'
  },
  {
    title: 'Q&A Retrieval System (FAISS-based)',
    year: '2024',
    description: 'Efficient unstructured data querying with FAISS and LLM integration.',
    techStack: ['FAISS', 'Sentence Transformers', 'Mistral-7B', 'RAG'],
    why: 'Designed a scalable retrieval pipeline for unstructured PDFs. Stored embeddings in FAISS for efficient similarity search and clustering. Integrated Mistral-7B for response generation.',
    tags: ['RAG', 'LLM', 'NLP'],
    category: 'NLP'
  },
  {
    title: 'Customer Review Intelligence',
    year: '2022',
    description: 'NLP-powered review analytics for a leading electronics retailer.',
    techStack: ['spaCy', 'Transformers', 'FastAPI'],
    why: 'Built before GenAI hype to mine customer reviews for sentiment, entities, and CX issues. Provided actionable insights for product improvement and customer experience enhancement.',
    tags: ['NLP', 'Analytics', 'Sentiment Analysis'],
    category: 'Analytics'
  },
  {
    title: 'Sentiment Analysis',
    year: '2024',
    description: 'Classifying movie reviews with Naive Bayes for opinion mining.',
    techStack: ['Python', 'NLP', 'Scikit-learn', 'IMDB dataset'],
    why: 'Trained a Naive Bayes classifier on IMDB 50k dataset, achieving 85.7% accuracy. Applied text preprocessing and serialized the trained model for reusability on newly scraped datasets.',
    tags: ['NLP', 'Machine Learning', 'Sentiment Analysis'],
    category: 'NLP'
  }
];

const allTags = Array.from(new Set(projects.flatMap(project => project.tags))).sort();

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
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of AI and data science projects spanning healthcare, 
            NLP, and computer vision
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
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-portfolio-hover transition-all duration-300 hover-lift overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.year}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Why I built it */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.why}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        background: 'var(--tag-bg)',
                        color: 'var(--tag-text)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a
                      href="https://www.github.com/SandhiyaGiri"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="#contact">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
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