import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "HigherGenieAI LLC",
      role: "Founder / Software Engineer",
      period: "2024 – Present",
      location: "Remote",
      type: "current",
      highlights: [
        "Designing and developing an AI-assisted interview preparation platform",
        "Building backend services using Java, Spring Boot, and REST APIs with secure authentication",
        "Integrating data analytics and ML-based insights to enhance user experience",
        "Deploying and managing services on cloud infrastructure with CI/CD workflows",
      ],
    },
    {
      company: "Newgen Software Technologies Ltd",
      role: "Senior Software Engineer (Full Stack Java Developer)",
      period: "July 2018 – August 2023",
      location: "Hyderabad, India",
      type: "past",
      highlights: [
        "Worked on large-scale BFSI digital transformation projects",
        "Delivered secure and high-performance banking applications",
        "Contributed across backend services, frontend UI, database optimization, cloud deployments, and DevOps automation",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-padding max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building enterprise-grade solutions across the financial services industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-auto ${
                  index % 2 === 0 ? "md:right-0 md:-translate-x-1/2" : "md:left-0 md:translate-x-1/2"
                } w-4 h-4 rounded-full border-4 border-background ${
                  exp.type === "current" ? "bg-primary" : "bg-muted-foreground"
                } md:-translate-y-0 top-2`}
              />

              <div className={`p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all ${
                index % 2 === 0 ? "md:mr-4" : "md:ml-4"
              }`}>
                {exp.type === "current" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    Current
                  </span>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                
                <div className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  <span className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>

                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-muted-foreground">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
