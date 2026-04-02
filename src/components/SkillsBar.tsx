const skills = [
  "React", "Node.js", "JavaScript", "TypeScript", "Java",
  "Spring Boot", "Python", "Next.js", "PostgreSQL", "MongoDB",
  "Docker", "Git", "REST APIs", "GraphQL", "Tailwind CSS",
];

const SkillsBar = () => {
  return (
    <section className="relative z-10 py-12 border-t border-b border-border overflow-hidden">
      <div className="flex animate-scroll gap-8">
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="text-muted-foreground text-sm whitespace-nowrap font-body tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsBar;
