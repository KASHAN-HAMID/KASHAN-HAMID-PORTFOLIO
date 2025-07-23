import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Palette } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Modal state for graphic design large view
  const [selectedGraphic, setSelectedGraphic] = useState<null | typeof graphicProjects[0]>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (projectsRef.current) {
        gsap.fromTo(
          projectsRef.current.children,
          { 
            opacity: 0, 
            y: 80,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "The Vision Consultants",
      description: "A comprehensive study abroad consulting website built with modern web technologies. Features include student portal, course listings, and consultation booking system.",
      image: "./p2.png",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://www.thevisionconsultants.com/",
      category: "Web Development",
      featured: true
    },
    {
      title: "Bold Hue",
      description: "A vibrant portfolio showcase website with stunning animations and modern design principles. Built to demonstrate creative capabilities and user experience design.",
      image: "./p1.png",
      tech: ["React", "Framer Motion", "GSAP", "Tailwind CSS"],
      liveUrl: "https://boldhue.vercel.app/",
      category: "Web Development",
      featured: true
    },
    {
      title: "Ahmed's Portfolio",
      description: "A professional portfolio website showcasing development skills and projects. Features responsive design, smooth animations, and optimized performance.",
      image: "./p3.png",
      tech: ["React", "Vite", "CSS3", "JavaScript"],
      liveUrl: "https://ahmeds-portfolio-ten.vercel.app/",
      category: "Web Development",
      featured: false
    }
  ];

  const graphicProjects = [
    {
      title: "Poster",
      description: "Dynamic poster design ",
      image: "./p4.jpg",
      category: "Graphic Design",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"]
    },
    {
      title: "Social Media Posts",
      description: "Complete brand identity package with logo, color palette, and brand guidelines",
      image: "./p5.jpg",
      category: "Graphic Design",
      tools: ["InDesign", "Photoshop", "Lightroom"]
    },
    {
      title: "Standee",
      description: "Standee of your own demand",
      image: "./p6.jpg",
      category: "Graphic Design",
      tools: ["Adobe Illustrator", "Adobe Photoshop"]
    }
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
    <section ref={sectionRef} id="portfolio" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      {/* Modal for large graphic project view */}
     {selectedGraphic && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    onClick={() => setSelectedGraphic(null)} // Close on background click
    onKeyDown={(e) => {
      if (e.key === "Escape") setSelectedGraphic(null);
    }}
    tabIndex={-1} // Make div focusable for key events
    ref={(node) => node && node.focus()} // Autofocus to catch escape key
  >
    <div
      className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
    >
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-black"
        onClick={() => setSelectedGraphic(null)}
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <img
        src={selectedGraphic.image}
        alt={selectedGraphic.title}
        className="w-full h-auto rounded mb-4"
      />
      <h4 className="text-2xl font-bold mb-2">{selectedGraphic.title}</h4>
      <p className="mb-2">{selectedGraphic.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedGraphic.tools.map((tool) => (
          <span
            key={tool}
            className="px-2 py-1 text-xs bg-secondary/50 rounded-full text-secondary-foreground"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
)}


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
            My Portfolio
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Explore my latest projects showcasing expertise in web development and graphic design. 
            Each project represents a unique challenge solved with creativity and technical excellence.
          </motion.p>
        </motion.div>

        {/* Web Development Projects */}
        <div className="mb-16">
          <motion.h3 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-8 text-center"
          >
            Web Development
          </motion.h3>
          
          <motion.div 
            ref={projectsRef}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card className="glass-effect overflow-hidden h-full group hover:shadow-glow transition-smooth">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {project.title}
                      </h4>
                      {project.featured && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary/50 rounded-full text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="animated"
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Graphic Design Projects */}
        <div>
          <motion.h3 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-8 text-center"
          >
            Graphic Design
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {graphicProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                onClick={() => setSelectedGraphic(project)}
                className="cursor-pointer"
              >
                <Card className="glass-effect overflow-hidden h-full group hover:shadow-glow transition-smooth">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {project.title}
                      </h4>
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs bg-secondary/50 rounded-full text-secondary-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
