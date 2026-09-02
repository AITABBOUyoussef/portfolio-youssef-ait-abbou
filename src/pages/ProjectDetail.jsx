import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import { withFallback } from "../utils/withFallback.js";
import SkillBadge from "../components/SkillBadge.jsx";
import Gallery from "../components/Gallery.jsx";
import Button from "../components/Button.jsx";

function Section({ title, children }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-accent mb-2">{title}</h2>
      <div className="text-slate-300 leading-relaxed">{children}</div>
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-300">Projet introuvable.</p>
        <Link to="/#projets" className="text-accent hover:underline">
          ← Retour aux projets
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link
        to="/#projets"
        className="text-sm text-slate-400 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
      >
        ← Retour aux projets
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-100">
          {withFallback(project.name)}
        </h1>
        {project.featured && (
          <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent">
            ⭐ Projet principal
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <SkillBadge key={tech.name} label={tech.name} />
        ))}
      </div>

      <Section title="Contexte">{withFallback(project.context)}</Section>
      <Section title="Besoin">{withFallback(project.problem)}</Section>
      <Section title="Solution">{withFallback(project.solution)}</Section>

      <Section title="Fonctionnalités">
        <ul className="list-disc list-inside space-y-1">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </Section>

      <Section title="Ma contribution">
        <ul className="list-disc list-inside space-y-1">
          {project.personalContribution.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {project.difficulties && project.difficulties.length > 0 && (
        <Section title="Difficultés rencontrées">
          <ul className="list-disc list-inside space-y-1">
            {project.difficulties.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>
      )}

      {project.solutionsImplemented && project.solutionsImplemented.length > 0 && (
        <Section title="Solutions mises en œuvre">
          <ul className="list-disc list-inside space-y-1">
            {project.solutionsImplemented.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>
      )}

      {project.results && project.results.length > 0 && (
        <Section title="Résultats">
          <ul className="list-disc list-inside space-y-1">
            {project.results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Aperçu">
        <Gallery
          images={project.gallery}
          altPrefix={`Capture d'écran du projet ${project.name}`}
        />
      </Section>

      <Section title="Liens">
        <div className="flex flex-wrap gap-3">
          {project.repositories.map((repo) => (
            <Button key={repo.url} href={repo.url} variant="outline" external>
              GitHub — {repo.label}
            </Button>
          ))}

          {/* Le bouton Démo n'apparaît que si demoUrl est réellement fourni (cf. AC-005) */}
          {project.demoUrl && (
            <Button href={project.demoUrl} variant="solid" external>
              Voir la démo
            </Button>
          )}

          {project.externalResources?.map((resource) => (
            <Button
              key={resource.url}
              href={resource.url}
              variant="outline"
              external
            >
              {resource.label}
            </Button>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default ProjectDetail;
