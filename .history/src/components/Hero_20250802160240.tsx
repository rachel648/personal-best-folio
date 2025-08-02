import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profileHero from "@/assets/profile-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-hero"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden hero-glow animate-float">
              <img
                src={profileHero}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              Creative{" "}
              <span className="gradient-text">Developer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies
              and innovative design solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                onClick={() => scrollToSection("projects")}
                variant="hero"
                size="xl"
                className="animate-glow"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                size="xl"
                className="border-primary/20 hover:border-primary"
              >
                About Me
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 pt-8">
              <a
                href="https://github.ra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rachel-kanyiri-31a423262/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rachelraqelmurithi@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;