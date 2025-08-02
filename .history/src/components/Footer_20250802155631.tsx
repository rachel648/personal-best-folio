import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="font-display font-bold text-xl gradient-text mb-2">
                Portfolio
              </div>
              <p className="text-muted-foreground">
                Crafting digital experiences with passion and precision.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/rachel648"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://https://www.linkedin.com/in/rachel-kanyiri-31a423262/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="malito:rachelraqelmurithi@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground flex items-center justify-center space-x-1">
              <span>© {currentYear}</span>
          
              <span>by Rachel Murithi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;