import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with React & TypeScript.",
    link: "#",
  },
  {
    name: "Spring Boot API",
    description: "RESTful API with Spring Boot & PostgreSQL.",
    link: "#",
  },
  {
    name: "E-Commerce App",
    description: "Full-stack e-commerce platform with React & Node.js.",
    link: "#",
  },
];

const notes = [
  {
    title: "Understanding React Server Components",
    date: "March 15, 2026",
    color: "bg-blue-500",
  },
  {
    title: "Spring Boot Best Practices for Production",
    date: "February 28, 2026",
    color: "bg-accent",
  },
  {
    title: "Building Scalable Node.js Applications",
    date: "January 10, 2026",
    color: "bg-orange-500",
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative z-10 bg-background pb-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Projects */}
        <div>
          <h2 className="text-xl font-display font-semibold text-foreground mb-1">
            Projects
          </h2>
          <p className="text-muted-foreground text-xs mb-6">
            A few things I've been building.
          </p>
          <div className="space-y-0">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                className="flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover:bg-secondary/50 transition-colors group border-b border-border last:border-0"
              >
                <div>
                  <p className="text-foreground font-medium text-sm font-display">
                    {project.name}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <h2 className="text-xl font-display font-semibold text-foreground mb-1">
            Notes
          </h2>
          <p className="text-muted-foreground text-xs mb-6">
            Hope you enjoyed these on Hackernews.
          </p>
          <div className="space-y-4">
            {notes.map((note, i) => (
              <div
                key={i}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className={`w-2 h-2 rounded-sm mt-1.5 ${note.color} shrink-0`} />
                <div>
                  <p className="text-foreground text-sm font-medium hover:text-accent transition-colors">
                    {note.title}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {note.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
