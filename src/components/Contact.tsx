import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "adabanyaprince@gmail.com",
      href: "mailto:adabanyaprince@gmail.com",
      color: "text-accent",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+234 810 851 4620",
      href: "tel:+2348108514620",
      color: "text-primary",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Lekki, Lagos State, Nigeria",
      href: "#",
      color: "text-success",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Adabanya-princewill",
      color: "hover:bg-muted hover:text-foreground",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/princewilladabanya",
      color: "hover:bg-primary hover:text-primary-foreground",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:adabanyaprince@gmail.com",
      color: "hover:bg-accent hover:text-accent-foreground",
    },
  ];

  const interests = [
    "Reading",
    "Goal setting",
    "Research",
    "Travelling",
    "Building Networks",
    "Soccer",
    "Table-tennis",
  ];

  return (
    <section
      id="contact"
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's build something
              amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold mb-8">
                Get In Touch
              </h3>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="gradient-card border-0 shadow-elegant hover-lift">
                      <CardContent className="p-4">
                        <a
                          href={info.href}
                          className="flex items-center gap-4 group"
                        >
                          <div
                            className={`${info.color} group-hover:scale-110 transition-transform`}
                          >
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {info.label}
                            </p>
                            <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">
                  Connect on Social
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-card ${social.color} transition-all duration-300 hover-lift`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Interests & CTA */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold mb-8">
                Personal Interests
              </h3>

              <Card className="gradient-card border-0 shadow-elegant mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <motion.span
                        key={interest}
                        variants={itemVariants}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="gradient-card border-0 shadow-elegant">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-display font-semibold mb-4">
                    Ready to Start a Project?
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    I'm always open to discussing new opportunities, interesting
                    projects, and creative collaborations.
                  </p>
                  <Button
                    size="lg"
                    variant="hero"
                    className="px-8 py-3 hover-glow hover-lift"
                    asChild
                  >
                    <a href="mailto:adabanyaprince@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="mt-20 pt-8 border-t border-border/50 text-center"
      >
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Princewill Adabanya
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2025 All rights reserved. Available for frontend development
          opportunities.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
