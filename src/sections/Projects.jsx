import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

function Projects() {
  // Le projet principal (featured) est affiché en premier (cf. AC-013)
  const orderedProjects = [...projects].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <section id="projets" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-slate-100">Mes projets</h2>
      <p className="mt-2 text-sm text-slate-400">
        Trois projets réalisés dans le cadre de ma formation, illustrant mes
        compétences Full-Stack.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
