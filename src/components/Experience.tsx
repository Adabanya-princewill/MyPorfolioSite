import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
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

  const experiences = [
    {
      title: "Application Developer",
      company: "Nova Bank",
      period: "February 2025 – Present",
      location: "Nigeria",
      type: "Current",
      achievements: [
        "Built the frontend for the NRBVN Account Opening platform, enabling Nigerians in the diaspora to seamlessly open accounts with an intuitive and efficient user interface.",
        "Contributed to the development of key internal tools, including the Referral Management Portal and E-Visitor Management Application, improving operational efficiency.",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "CyberFleet Integrated Limited",
      period: "December 2023 – January 2025",
      location: "Nigeria",
      type: "Recent",
      achievements: [
        "Led the end-to-end development of Yellowdot, including integrating subscription-based access and payment flows.",
        "Built key features like real-time chat for mentor interactions and a smart course recommendation system, significantly enhancing user engagement and personalisation.",
        "Collaborated across engineering and design teams on projects like Japaanow, optimising real-time interactions, improving user experience, and consistently delivering high-quality results.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Lopworks Limited",
      period: "January 2023 – September 2023",
      location: "Nigeria",
      type: "Internship",
      achievements: [
        "Gained hands-on experience with Vue.js, Elixir (Phoenix), PostgreSQL, and Tailwind CSS by working on applications like the Mango App (mini e-commerce platform) and Music DB (relational database app).",
        "Created responsive, user-friendly interfaces for product catalogs, landing pages, and quiz apps, enhancing navigation and visual appeal through modern styling techniques.",
        "Documented internal projects extensively to support team collaboration, project handovers, and long-term development continuity.",
      ],
    },
  ];

  const education = {
    degree: "Bachelor of Engineering (B.Eng.) in Mechanical Engineering",
    school: "Chukwuemeka Odumegwu Ojukwu University (COOU)",
    location: "Uli, Anambra State, Nigeria",
    period: "2017-2022",
    grade: "Second Class Upper",
  };

  const certifications = [
    "HTML, CSS, and JavaScript for Web Developers - Johns Hopkins University (Coursera)",
    "Advanced React - Johns Hopkins University (Coursera)",
    "NYSC Completed – (November 2023 – October 2024)",
    "Tunga Frontend Track Training",
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
              Experience & Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and continuous learning path
            </p>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-accent" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="gradient-card border-0 shadow-elegant hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-display font-semibold text-gradient-hero mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-lg font-medium text-foreground mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant={
                            exp.type === "Current" ? "default" : "secondary"
                          }
                          className={
                            exp.type === "Current"
                              ? "gradient-primary text-white"
                              : ""
                          }
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-foreground/90"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Education
            </h3>
            <Card className="gradient-card border-0 shadow-elegant">
              <CardContent className="p-6">
                <h4 className="text-xl font-display font-semibold text-gradient-primary mb-2">
                  {education.degree}
                </h4>
                <p className="text-lg font-medium text-foreground mb-2">
                  {education.school}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {education.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {education.location}
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="border-success text-success"
                >
                  {education.grade}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-success" />
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="gradient-card border-0 shadow-elegant hover-lift">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                        <span className="text-foreground/90">{cert}</span>
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

export default Experience;
