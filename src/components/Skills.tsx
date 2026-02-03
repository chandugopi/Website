import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & APIs",
      skills: ["Java 17", "Spring Boot", "Spring MVC", "Spring Security", "Microservices", "REST APIs", "Hibernate", "JPA"],
      color: "from-primary to-accent",
    },
    {
      title: "Messaging & Architecture",
      skills: ["Apache Kafka", "Event-Driven Architecture", "Asynchronous Processing"],
      color: "from-accent to-blue-500",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, IAM)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"],
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Databases",
      skills: ["Oracle", "PostgreSQL", "MySQL", "PL/SQL"],
      color: "from-orange-400 to-amber-500",
    },
    {
      title: "Frontend",
      skills: ["React.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Testing & Tools",
      skills: ["JUnit", "Mockito", "Maven", "Git", "Agile/Scrum"],
      color: "from-rose-400 to-red-500",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 5+ years of enterprise development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-primary-foreground mb-4`}>
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted/50 text-muted-foreground rounded-lg hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
