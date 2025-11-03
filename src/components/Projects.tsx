import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and message analytics.",
    tech: ["React", "Python", "OpenAI", "WebSocket"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Builder",
    description: "No-code portfolio builder with customizable templates and drag-and-drop editor.",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Some of my recent work</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card 
              key={idx} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github />
                  Code
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
