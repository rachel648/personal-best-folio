import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "iMental - Mental Health App",
      description: "A secure mental health platform developed with kotlin and Firebase, enabling private consultations, progress tracking, and peer support communities. It focuses on confidentiality and AI-driven recommendations to enhance user experience.",
      image: project1,
      technologies: ["Kotlin", "Firebase", "AI (Planned)", "Android Studio"],
      liveUrl: "https://example.com", // Replace with real URL if available
      githubUrl: "https://github.com", // Replace with real repo link if available
      featured: true,
    },
    {
      id: 2,
      title: "Billing & Payment System",
      description: "An automated billing and payment system featuring session-based payments, real-time balance updates, and scheduled resets. Designed for secure transactions and seamless integration into service-based platforms.",
      image: project2,
      technologies: ["Javascript", "MongoDb", "Daraja mpesa Express APIs", "Express.js", "Visual Studio Code"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 3,
      title: "iMental Model",
      description: "A research-driven prototype and model for AI-assisted mental health support, combining predictive analytics, consultation tracking, and user progress insights. This model laid the foundation for the iMental App and secured innovation grants.",
      image: project3,
      technologies: ["Python", "Machine Learning", "Data Analytics", "Django", "Flask"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills in
              modern web development, design, and problem-solving.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  {project.featured && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-primary text-primary-foreground">
                      Featured Project
                    </div>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button
                      variant="hero"
                      size="sm"
                      className="group/btn"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 hover:border-primary group/btn"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div
                  className={`relative group/image ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover group-hover/image:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;