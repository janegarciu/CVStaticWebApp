import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Bearings Management System UI",
    description: "Bearing Management UI is a Blazor Web Assembly Standalone frontend application for managing bearings data. It interacts with the Bearing Management API and provides a user-friendly interface for authentication, viewing, adding, updating, and deleting bearings.",
    tech: ["Blazor", "Radzen Components", "SQLite", "RefitClient", ".NET 9.0"],
    github: "https://github.com/janegarciu/BearingManagementSystemUI",
  },
  {
    title: "Flight Booking App",
    description: "Flight booking microservices based application.",
    tech: ["Java", "Spring Boot", "Spring Cloud", "Spring Data", "Scala(cache microservice)", "PostgreSQL", "EhCache"],
    github: "https://github.com/janegarciu/PAD/tree/master/FlightBookingSystem/Flight-App-Microservices",
  },
  {
    title: "CSV Parser",
    description: "Parse people defined in a csv file and save them into the database table.",
    tech: ["Java", "JDK", "TailwindCSS"],
    github: "https://github.com/janegarciu/CSV",
  },
  {
    title: "Scala Actor Model App",
    description: "Scala based project implementing Actor System Model using akka-actor-typed-- library. This project is aimed to develop a good comprehension of Scala language and Akka framework as well as understanding of actor's concurrency capabilities.",
    tech: ["Scala", "Akka"],
    github: "https://github.com/janegarciu/RTP/tree/main/ActorModel",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Some of my works</p>
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
                <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.github, "_blank")}>
                  <Github />
                  Code
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
