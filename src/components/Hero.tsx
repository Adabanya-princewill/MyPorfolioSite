import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
//import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const downloadCV = () => {
    import("@/utils/pdfGenerator").then(({ generateCV }) => {
      generateCV();
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      // style={{
      //   backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%), url(${heroImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-96 h-96 rounded-full gradient-primary opacity-20 absolute -top-48 -left-48"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="w-64 h-64 rounded-full gradient-accent opacity-20 absolute -bottom-32 -right-32"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gradient-hero mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              PRINCEWILL ADABANYA
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Frontend Developer crafting{" "}
            <span className="text-gradient-primary font-semibold">
              beautiful
            </span>
            ,{" "}
            <span className="text-gradient-primary font-semibold">
              responsive
            </span>
            , and{" "}
            <span className="text-gradient-primary font-semibold">
              user-centered
            </span>{" "}
            web applications
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-muted-foreground text-sm sm:text-base px-4"
          >
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Lekki, Lagos State, Nigeria</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+234 810 851 4620</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span className="break-all">adabanyaprince@gmail.com</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4"
          >
            <Button
              size="lg"
              variant="hero"
              className="px-6 sm:px-8 py-3 hover-glow hover-lift w-full sm:w-auto"
              onClick={downloadCV}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 sm:px-8 py-3 hover-lift w-full sm:w-auto"
              asChild
            >
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/Adabanya-princewill"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover-lift"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/princewilladabanya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:adabanyaprince@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-success hover:text-success-foreground transition-all duration-300 hover-lift"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-accent rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
