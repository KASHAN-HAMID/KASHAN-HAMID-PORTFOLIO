import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download, ArrowDown, Eye } from "lucide-react";
import kashanHeadshot from "@/assets/kashan-headshot.jpg";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (textRef.current && imageRef.current && buttonsRef.current) {
      tl.fromTo(textRef.current.children,
        { 
          opacity: 0, 
          y: 50,
          filter: "blur(10px)"
        },
        { 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      )
      .fromTo(imageRef.current,
        { 
          scale: 0.8, 
          opacity: 0,
          rotation: -10
        },
        { 
          scale: 1, 
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)"
        }, "-=0.5"
      )
      .fromTo(buttonsRef.current.children,
        { 
          opacity: 0, 
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.3"
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kashan-hamid",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kashan-hamid-8aa3242b4",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:kashanhamid786@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+923062617874",
      label: "Phone"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-20 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            variants={itemVariants}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold gradient-text leading-tight"
                variants={itemVariants}
              >
                Kashan Hamid
              </motion.h1>
              
              <motion.div 
                className="text-2xl lg:text-3xl font-medium text-muted-foreground"
                variants={itemVariants}
              >
                <span className="text-primary">Web Developer</span> & <span className="text-primary">Graphic Designer</span>
              </motion.div>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                Crafting exceptional digital experiences through innovative web development and stunning graphic design. 
                I transform ideas into pixel-perfect realities with a passion for clean code and beautiful aesthetics.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div 
              ref={buttonsRef}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button 
                variant="animated"
                size="lg" 
                className="px-8 py-6 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                View Work
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-effect hover:bg-primary/10 transition-smooth group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              <img
                ref={imageRef}
                src={kashanHeadshot}
                alt="Kashan Hamid"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-dark border-4 border-primary/20 floating-animation"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          variants={itemVariants}
        >
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;