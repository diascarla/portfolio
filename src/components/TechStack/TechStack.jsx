import { skills } from "../../data/skills";
import { SkillPill } from "../shared/SkillPill";

export const TechStack = () => {
  return (
    <section className="bg-[color:var(--bg-page)] py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <SkillPill key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};