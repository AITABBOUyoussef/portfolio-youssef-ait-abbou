import { profile, education, experiences } from "../data/profile.js";
import { withFallback } from "../utils/withFallback.js";

function About() {
  return (
    <section id="profil" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-slate-100">Profil</h2>
      <p className="mt-4 text-slate-300 leading-relaxed">
        {withFallback(profile.bio)}
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-medium text-accent mb-4">Formations</h3>
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.id} className="border-l-2 border-slate-700 pl-4">
                <p className="text-slate-100 font-medium">{item.degree}</p>
                <p className="text-sm text-slate-400">
                  {item.institution} — {item.period}
                  {item.inProgress && (
                    <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent">
                      En cours
                    </span>
                  )}
                </p>
                <p className="text-sm text-slate-300 mt-1">
                  {withFallback(item.details)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-accent mb-4">
            Expériences professionnelles
          </h3>
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={exp.id} className="border-l-2 border-slate-700 pl-4">
                <p className="text-slate-100 font-medium">{exp.role}</p>
                <p className="text-sm text-slate-400">
                  {exp.company} — {exp.period}
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-slate-300 space-y-1">
                  {exp.missions.map((mission, index) => (
                    <li key={index}>{mission}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
