import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Zap,
  Users,
  Smartphone,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
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

  const projects = [
    {
      title: "NRBVN Account Opening Platform",
      company: "Nova Bank",
      description:
        "Built the complete frontend for enabling Nigerians in the diaspora to seamlessly open bank accounts with an intuitive and efficient user interface.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "REST APIs",
      ],
      features: [
        "Intuitive multi-step account opening flow",
        "Document upload and verification",
        "Real-time form validation",
        "Responsive design for all devices",
      ],
      status: "Live",
      type: "Banking Platform",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Yellowdot Learning Platform",
      company: "CyberFleet Integrated Limited",
      description:
        "Led end-to-end development of an educational platform with subscription-based access, real-time chat for mentor interactions, and smart course recommendations.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Zustand",
        "Socket.io",
        "Stripe",
      ],
      features: [
        "Real-time chat system for mentors",
        "Smart course recommendation engine",
        "Subscription and payment integration",
        "Interactive learning modules",
      ],
      status: "Live",
      type: "EdTech Platform",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Japaanow Platform",
      company: "CyberFleet Integrated Limited",
      description:
        "Collaborated on optimizing real-time interactions and improving user experience for this comprehensive platform.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "WebSocket",
        "PWA",
      ],
      features: [
        "Real-time user interactions",
        "Optimized performance",
        "Progressive Web App features",
        "Enhanced user experience",
      ],
      status: "Live",
      type: "Web Platform",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Referral Management Portal",
      company: "Nova Bank",
      description:
        "Developed internal tool for managing referral programs, improving operational efficiency and user engagement tracking.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "TypeScript",
        "Material UI",
        "Chart.js",
        "REST APIs",
      ],
      features: [
        "Referral tracking dashboard",
        "Analytics and reporting",
        "User management system",
        "Performance metrics",
      ],
      status: "Internal",
      type: "Management Tool",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "E-Visitor Management Application",
      company: "Nova Bank",
      description:
        "Built comprehensive visitor management system for improving office operations and security protocols.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "QR Code",
        "REST APIs",
      ],
      features: [
        "Digital visitor registration",
        "QR code check-in system",
        "Real-time visitor tracking",
        "Security integration",
      ],
      status: "Internal",
      type: "Management System",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Mango E-commerce App",
      company: "Lopworks Limited",
      description:
        "Created responsive e-commerce platform during internship, focusing on modern styling and user-friendly navigation.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Elixir Phoenix", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "User authentication",
        "Responsive design",
      ],
      status: "Demo",
      type: "E-commerce",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="projects"
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
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of applications I've built, from banking platforms to
              educational tools
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } lg:flex items-center gap-8`}
              >
                <Card className="gradient-card border-0 shadow-elegant hover-lift overflow-hidden lg:flex-1">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-accent mb-4">{project.icon}</div>
                        <div className="text-4xl sm:text-6xl font-display font-bold text-gradient-primary opacity-50">
                          {project.title.split(" ")[0]}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {project.type}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Details */}
                <div className="space-y-4 sm:space-y-6 lg:flex-1 mt-6 lg:mt-0">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-gradient-hero">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            project.status === "Live" ? "default" : "secondary"
                          }
                          className={
                            project.status === "Live"
                              ? "gradient-primary text-white"
                              : ""
                          }
                        >
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {project.company}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1 sm:flex-none"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground flex-1 sm:flex-none"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 lg:mt-16"
          >
            <Card className="gradient-card border-0 shadow-elegant">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4">
                  Interested in Working Together?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited to take on new challenges and create
                  amazing user experiences. Let's discuss your next project!
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="px-6 sm:px-8 py-3 hover-glow hover-lift"
                  asChild
                >
                  <a href="#contact">
                    <Zap className="w-5 h-5 mr-2" />
                    Start a Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
