import { motion } from "framer-motion";
import { ExternalLink, Database, Shield, Zap, Cloud, Brain, Server } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "3-IN-1 Online Trading Account System",
      category: "Enterprise Banking",
      description: "End-to-end trading account system with customer onboarding, KYC validation, and core banking integrations.",
      technologies: ["Java", "Spring Boot", "React.js", "Redux", "Oracle", "Docker", "AWS EC2"],
      icon: Database,
      highlights: [
        "RESTful APIs for customer onboarding and KYC validation",
        "Responsive UI with React.js and Redux",
        "Role-based access control aligned with banking compliance",
      ],
    },
    {
      title: "NRI/NRO Account Management System",
      category: "Enterprise Banking",
      description: "Microservices-based architecture for NRI/NRO onboarding and account management workflows.",
      technologies: ["Spring Boot", "Spring Security", "JWT", "Angular", "TypeScript", "Jenkins"],
      icon: Shield,
      highlights: [
        "Microservices architecture for decoupled workflows",
        "JWT-based secure authentication",
        "Multilingual support with reactive forms",
      ],
    },
    {
      title: "NEFT Batch Approval & Processing System",
      category: "Transaction Processing",
      description: "High-volume NEFT transaction processing system with batch validation and approval workflows.",
      technologies: ["Spring Batch", "PL/SQL", "Oracle"],
      icon: Zap,
      highlights: [
        "Optimized batch processing for high-volume transactions",
        "Auditing and reconciliation mechanisms",
        "Real-time monitoring dashboards",
      ],
    },
    {
      title: "Cloud-Native Microservices Platform",
      category: "Academic Project",
      description: "Event-driven microservices system with asynchronous transaction workflows.",
      technologies: ["Java 17", "Spring Boot", "Kafka", "Docker", "Kubernetes", "AWS"],
      icon: Cloud,
      highlights: [
        "Event-driven architecture with Kafka",
        "Containerized deployments with Kubernetes",
        "JWT-based security implementation",
      ],
    },
    {
      title: "Job Application Outcome Prediction",
      category: "Machine Learning",
      description: "ML-based system to predict application outcomes using historical data analysis.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      icon: Brain,
      highlights: [
        "Multiple ML models for prediction",
        "Data preprocessing and feature engineering",
        "Visualization for analytical insights",
      ],
    },
    {
      title: "HigherGenieAI Platform",
      category: "Startup",
      description: "AI-assisted interview preparation platform with personalized coaching and analytics.",
      technologies: ["Java", "Spring Boot", "REST APIs", "Cloud Infrastructure", "ML"],
      icon: Server,
      highlights: [
        "AI-powered interview preparation",
        "Secure authentication system",
        "ML-based insights for user experience",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background-secondary">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of enterprise and personal projects showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                  <li key={hIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted/30 text-muted-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 text-xs text-muted-foreground">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
