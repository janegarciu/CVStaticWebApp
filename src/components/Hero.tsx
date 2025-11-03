import { Button } from "@/components/ui/button";
import { Github, Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating elegant solutions to complex problems. 
            Specializing in modern web technologies and scalable applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="group">
              <Download className="group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="group-hover:rotate-12 transition-transform" />
              View GitHub
            </Button>
            <Button variant="ghost" size="lg" className="group">
              <Mail className="group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
