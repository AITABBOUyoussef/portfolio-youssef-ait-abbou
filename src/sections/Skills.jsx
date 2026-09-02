import { skillCategories } from "../data/skills.js";
import SkillBadge from "../components/SkillBadge.jsx";

function Skills() {
  return (
    <section id="competences" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-slate-100">Compétences</h2>

      <div className="mt-8 grid sm:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <h3 className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
