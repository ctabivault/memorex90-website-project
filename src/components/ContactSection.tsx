import { Mail, Facebook, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 glow-text">
          Connect With Us
        </h2>

        <div className="flex items-center justify-center gap-5 mb-10">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>

        <div className="glass-card inline-flex items-center gap-3 px-6 py-4">
          <Mail size={18} className="text-primary" />
          <a
            href="mailto:memorex90@gmail.com"
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            memorex90@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
