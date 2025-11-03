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
      
      {/* Mesh gradient background */}
      <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl md:text-5xl font-bold text-primary-foreground">
                  YN
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-pulse">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Full Stack Developer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting elegant solutions to complex problems with modern web technologies. 
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button variant="hero" size="lg" className="group shadow-[0_0_30px_rgba(var(--primary-glow),0.4)] hover:shadow-[0_0_50px_rgba(var(--primary-glow),0.6)] transition-all duration-300">
              <Download className="group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="group border-primary/50 hover:border-primary hover:shadow-[0_0_20px_rgba(var(--primary-glow),0.3)]">
              <Github className="group-hover:rotate-12 transition-transform" />
              View GitHub
            </Button>
            <Button variant="ghost" size="lg" className="group hover:bg-primary/10">
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
