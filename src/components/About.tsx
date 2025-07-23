import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap, Users, Award, Coffee } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { 
            opacity: 0, 
            y: 100,
            rotationX: -90
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack development with modern frameworks like React, Next.js, and Node.js",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating stunning visual identities, social media posts, and marketing materials",
      tech: ["Adobe CS", "Figma", "Canva", "Photoshop"]
    },
    {
      icon: Zap,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with focus on usability and aesthetics",
      tech: ["Figma", "Adobe XD", "Prototyping", "Wireframing"]
    }
  ];

  const stats = [
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "25+", label: "Happy Clients" },
    { icon: Coffee, number: "∞", label: "Cups of Coffee" },
    { icon: Zap, number: "3+", label: "Years Experience" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <section ref={sectionRef} id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold gradient-text mb-6"
          >
            About Me
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate developer and designer who bridges the gap between functionality and aesthetics. 
            With expertise in both web development and graphic design, I create comprehensive digital solutions 
            that not only work flawlessly but also captivate users visually.
          </motion.p>
        </motion.div>

        {/* Skills Cards */}
        <motion.div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div key={skill.title}>
              <Card className="glass-effect p-8 h-full group hover:shadow-glow transition-smooth">
                <div className="text-center space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-secondary/50 rounded-full text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <Card className="glass-effect p-6 hover:shadow-glow transition-smooth">
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;