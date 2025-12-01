import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend": ["Blazor", "JavaScript", "Bootstrap CSS", "Tailwind CSS", "Radzen", "React"],
  "Backend": ["C#", ".NET", "ASP.NET", "EntityFramework", "Dapper", "PostgreSQL", "MSSQL", "MongoDB", "Redis"],
  "Tools": ["Git", "Docker", "Azure", "ElasticSearch", "Grafana", "RabbitMQ"],
  "Other": ["REST APIs", "Testing", "Agile", "UI/UX Design"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">Tools and technologies I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], idx) => (
            <Card 
              key={category} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up border-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
