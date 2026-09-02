import { profile } from "../data/profile.js";
import { withFallback } from "../utils/withFallback.js";
import Button from "../components/Button.jsx";

function Avatar() {
  const initials = `${profile.firstName?.[0] ?? ""}${
    profile.lastName?.[0] ?? ""
  }`.toUpperCase();

  return (
    <div
      className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800 text-2xl font-semibold text-accent ring-2 ring-accent/40"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-[80vh] flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-2xl text-center">
        <Avatar />

        <h1 className="text-3xl md:text-4xl font-semibold text-slate-100">
          {withFallback(profile.firstName)} {withFallback(profile.lastName)}
        </h1>

        <p className="mt-2 text-accent font-medium">
          {withFallback(profile.jobTitle)}
        </p>

        <p className="mt-1 text-sm text-slate-400">
          {withFallback(profile.opportunity)} — {withFallback(profile.location)}
        </p>

        <p className="mt-6 text-slate-300 leading-relaxed">
          {withFallback(profile.valueProposition)}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="#projets" variant="solid">
            Voir mes projets
          </Button>
          <Button href="#cv" variant="outline">
            Consulter mon CV
          </Button>
          <Button href={profile.linkedinUrl} variant="outline" external>
            LinkedIn
          </Button>
          <Button href={profile.githubUrl} variant="outline" external>
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
