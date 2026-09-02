import { Link } from "react-router-dom";
import SkillBadge from "./SkillBadge.jsx";

function ProjectCard({ project }) {
  return (
    <article
      className={`rounded-xl border p-5 bg-slate-900/40 transition-shadow hover:shadow-lg hover:shadow-accent/10 ${
        project.featured ? "border-accent" : "border-slate-800"
      }`}
    >
      {project.featured && (
        <span className="inline-block mb-2 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent">
          ⭐ Projet principal
        </span>
      )}

      {/* Image de couverture ou placeholder neutre (cf. FR-011 / 03-DATA-SCHEMA) */}
      {project.coverImage ? (
        <div className="mb-4 h-36 overflow-hidden rounded-lg bg-slate-800">
          <img
            src={project.coverImage}
            alt={`Capture d'écran du projet ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div
          className="mb-4 flex h-36 items-center justify-center rounded-lg bg-slate-800 text-slate-500 text-xs"
          aria-hidden="true"
        >
          Capture à venir
        </div>
      )}

      <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
      <p className="mt-2 text-sm text-slate-400 line-clamp-3">
        {project.context}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <SkillBadge key={tech.name} label={tech.name} />
        ))}
      </div>

      <div className="mt-5">
        <Link
          to={`/projets/${project.id}`}
          className="text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          Voir le projet →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
