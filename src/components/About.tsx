import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Zap, Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      items: [
        "HTML5",
        "CSS3",
        "SASS",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "React (Styled Components)",
      ],
    },
    {
      category: "JavaScript Frameworks",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "React.js",
        "Vue.js",
        "TypeScript",
        "Next.js",
        "Redux",
        "Zustand",
      ],
    },
    {
      category: "Tools & Testing",
      icon: <Target className="w-6 h-6" />,
      items: [
        "Git (GitLab, Bitbucket)",
        "Jest",
        "React Testing Library",
        "Lighthouse",
        "Web Vitals",
      ],
    },
    {
      category: "APIs & Integration",
      icon: <Lightbulb className="w-6 h-6" />,
      items: ["REST APIs", "GraphQL", "Performance Optimization"],
    },
    {
      category: "Backend",
      icon: <Code className="w-6 h-6" />,
      items: ["Java", "SpringBoot", "Oracle", "Postgres"],
    },
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Collaboration",
      description: "Strong team collaboration and communication skills",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design Focus",
      description:
        "Combining innovative design with efficient coding practices",
    },
    {
      icon: <Target className="w-8 h-8 text-success" />,
      title: "User-Centered",
      description: "Delivering seamless and intuitive user experiences",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-primary mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate frontend developer dedicated to creating exceptional
              web experiences
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="gradient-card border-0 shadow-elegant">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I am a dedicated frontend developer committed to creating
                  user-friendly, responsive web applications. With a strong
                  focus on delivering seamless and intuitive user experiences, I
                  combine innovative design with efficient coding practices. By
                  adhering to usability and accessibility standards, I ensure
                  that the applications I build are engaging and accessible to
                  all users.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-6 sm:mb-8 text-center">
              Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card className="gradient-card border-0 shadow-elegant hover-lift h-full">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex justify-center mb-3 sm:mb-4">
                        {value.icon}
                      </div>
                      <h4 className="font-display font-semibold text-base sm:text-lg mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-6 sm:mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="gradient-card border-0 shadow-elegant hover-lift h-full">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 mb-3 sm:mb-4">
                        <div className="text-accent">{skillGroup.icon}</div>
                        <h4 className="font-display font-semibold text-base sm:text-lg">
                          {skillGroup.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
