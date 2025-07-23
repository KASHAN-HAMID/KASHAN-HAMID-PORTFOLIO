import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/kashan_hamid_?igsh=NXJ1NzQ4Zm44a2Vy",
      label: "Instagram"
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
      href: "https://wa.me/923062617874",
      label: "WhatsApp"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Kashan Hamid</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Web Developer & Graphic Designer crafting digital experiences that make a difference. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-effect rounded-lg text-muted-foreground hover:text-primary transition-smooth group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">kashanhamid786@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">03062617874</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Kashan Hamid. All rights reserved.
          </p>
          <motion.p 
            className="text-muted-foreground text-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> and passion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;