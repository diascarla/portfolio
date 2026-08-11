import { skills } from "../../data/skills";
import { SkillPill } from "../UI/SkillPill";

export const TechStack = () => {
  return (
    <section className="py-12 bg-(--bg-page) ">
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto px-6">
        {skills.map((skill) => (
          <SkillPill key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
};