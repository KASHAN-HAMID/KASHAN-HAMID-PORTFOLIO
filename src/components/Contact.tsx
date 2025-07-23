import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (formRef.current) {
        gsap.fromTo(
          formRef.current.children,
          { 
            opacity: 0, 
            x: -50,
            rotationY: -15
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kashanhamid786@gmail.com",
      href: "mailto:kashanhamid786@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "03062617874",
      href: "https://wa.me/923062617874"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/kashan_hamid_?igsh=NXJ1NzQ4Zm44a2Vy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/kashan-hamid-8aa3242b4",
      color: "from-blue-600 to-blue-700"
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
    <section ref={sectionRef} id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
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
            Let's Connect
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? I'm here to help you create amazing digital experiences. 
            Let's discuss your next project and turn your vision into reality.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about web development and design. Don't hesitate to reach out!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:shadow-glow transition-smooth group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-smooth">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-effect rounded-lg hover:shadow-glow transition-smooth group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="glass-effect p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <form ref={formRef} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input 
                      placeholder="Your name"
                      className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project inquiry"
                    className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    variant="animated"
                    size="lg" 
                    className="w-full py-6 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;