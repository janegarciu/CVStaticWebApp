import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: ".NET Full-Stack Developer",
    company: "ABF",
    location: "Roosendaal, The Netherlands",
    period: "2025 - Present",
    description: "Developed and maintained new and existing features for an eCommerce microservices project.",
    achievements: [
      "Delivered 10+ new features for an eCommerce microservices platform using .NET 9, ASP.NET Core, and MSSQL.",
      "Optimized API performance using indexes, caching and async patterns, reducing request latency by 40%",
      "Built 15+ Blazor UI components following Figma designs, increasing user interaction speed by 25%.",
      "Monitored distributed systems with Grafana and ServicePulse, improving system observability."
    ]
  },
  {
    title: ".NET Developer",
    company: "Software Mind(DataStation)",
    location: "Chișinău, Republic of Moldova",
    period: "2023 - 2025",
    description: "Gained valuable experience developing Blazor Server Compliance Management System.",
    achievements: [
      "Developed a Blazor Server Compliance Management System serving 200+ enterprise users.",
      "Reduced page load times by 35% through front-end optimization and database indexing.",
      "Improved maintainability by refactoring legacy logic and implementing unit test coverage over 80%.",
      "Collaborated across teams to deliver bi-weekly releases, ensuring 100% sprint goal completion rate."
    ]
  },
  {
    title: ".NET Developer",
    company: "Software Mind (Bettech / Pulsebet)",
    location: "Chișinău, Republic of Moldova",
    period: "2022 - 2023",
    description: "Developed and maintained Sports Betting web application.",
    achievements: [
      "Designed and implemented 10+ betting features using ASP.NET Core, EF Core, and PostgreSQL.",
      "Increased platform stability by 40% through optimized query execution and service refactoring.",
      "Reduced defect rate by 25% via proactive code review and integration testing.",
      "Migrated legacy modules to RESTful APIs, cutting system response times from 2.8s to under 1s."
    ]
  },
  {
    title: "QA Automation Engineer",
    company: "Allied Testing",
    location: "Chișinău, Republic of Moldova",
    period: "2019 - 2022",
    description: "Designed and developed UI automation testing solution frameworks.",
    achievements: [
      "Built an automation framework in C# using SpecFlow and NUnit, reducing manual testing effort by 60%.",
      "Created 60+ automated regression test cases integrated into CI/CD pipelines.",
      "Reduced bug detection time by 40% through early automation in the development cycle.",
      "Mentored 3 junior QA engineers, improving team productivity and test quality consistency."
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
                  <p className="text-primary font-medium mb-3 text-lg">{exp.company} - {exp.location}</p>
                  <p className="text-muted-foreground mb-4 text-lg">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2">
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
