import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      label: "Experience",
      value: "5+ Years",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jersey City, NJ",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "MS Computer Science",
    },
    {
      icon: Rocket,
      label: "Current Focus",
      value: "HigherGenieAI",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable, secure applications that solve real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-foreground font-medium">Java Backend / Full Stack Engineer</span> with 
              5+ years of hands-on enterprise experience in designing and building scalable applications 
              within the <span className="text-primary">Banking and Financial Services (BFSI)</span> domain.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My expertise spans Java 17, Spring Boot, Microservices, REST APIs, and SQL-based databases, 
              with recent focus on cloud-native development, event-driven architectures (Kafka), 
              containerization, and CI/CD pipelines.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm the Founder & Software Engineer at <span className="text-primary">HigherGenieAI LLC</span>, 
              building an AI-assisted interview preparation platform that combines my enterprise experience 
              with modern cloud and data-driven technologies.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
