import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Improved application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    achievements: [
      "Built 10+ production applications",
      "Reduced deployment time by 60%",
      "Introduced automated testing"
    ]
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    period: "2018 - 2020",
    description: "Started career working on frontend and backend features for startup products.",
    achievements: [
      "Shipped features used by 10k+ users",
      "Learned modern development practices",
      "Contributed to product roadmap"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <Card 
              key={idx} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up border-l-4 border-l-primary"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
