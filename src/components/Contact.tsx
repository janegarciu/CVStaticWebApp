import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8 animate-slide-up">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Email</p>
                <a href="mailto:jeniagarciu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  jeniagarciu@gmail.com
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6" onClick={() => window.open("https://github.com/janegarciu", "_blank")}>
              <Button variant="outline" size="lg" className="flex-col h-auto py-4" >
                <Github className="w-6 h-6 mb-2" />
                <span className="text-xs">GitHub</span>
              </Button>
              <Button variant="outline" size="lg" className="flex-col h-auto py-4" onClick={() => window.open("http://linkedin.com/in/eugenie-garciu-a96434173", "_blank")}>
                <Linkedin className="w-6 h-6 mb-2" />
                <span className="text-xs">LinkedIn</span>
              </Button>
              <Button variant="outline" size="lg" className="flex-col h-auto py-4" onClick={() => window.open("https://mail.google.com", "_blank")}>
                <Mail className="w-6 h-6 mb-2" />
                <span className="text-xs">Email</span>
              </Button>
            </div>
          </div>
        </Card>
        
        <div className="text-center mt-12 text-muted-foreground">
          <p>© 2025 Eugenie Garciu. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
