import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const coursework = [
    "Cloud Computing",
    "Machine Learning",
    "Data Mining",
    "Operating Systems",
    "Systems Programming",
    "Software Engineering",
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-padding max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through formal education and applied projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Master of Science in Computer Science
                    </h3>
                    <p className="text-primary font-medium">
                      Fairleigh Dickinson University, USA
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground px-3 py-1 bg-muted/50 rounded-full w-fit">
                    2025
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">
                  Strengthened skills in Cloud Computing, Machine Learning, Data Mining, 
                  Operating Systems, and Systems Programming through applied, production-style projects.
                </p>

                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-foreground font-medium mb-3">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Key Coursework
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
