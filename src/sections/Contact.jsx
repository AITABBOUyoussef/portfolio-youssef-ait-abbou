import { profile } from "../data/profile.js";
import { withFallback } from "../utils/withFallback.js";
import Button from "../components/Button.jsx";

function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold text-slate-100">Me contacter</h2>

      <p className="mt-3 text-slate-300">
        {withFallback(profile.opportunity)} — Disponibilité :{" "}
        {withFallback(profile.availability)}
      </p>
      <p className="mt-1 text-sm text-slate-400">
        {withFallback(profile.location)} — {withFallback(profile.mobility)}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button href={`mailto:${profile.email}`} variant="solid">
          {withFallback(profile.email)}
        </Button>
        <Button href={profile.linkedinUrl} variant="outline" external>
          LinkedIn
        </Button>
        <Button href={profile.githubUrl} variant="outline" external>
          GitHub
        </Button>
      </div>

      {/*
        FR-010 : aucun service de formulaire n'est connecté (cf. AC-014).
        Le contact se fait donc uniquement via un lien mailto réel,
        jamais via un formulaire présenté comme fonctionnel.
      */}
      <p className="mt-6 text-xs text-slate-500">
        Pas de formulaire de contact connecté pour le moment — cliquez sur
        l'email ci-dessus pour m'écrire directement.
      </p>
    </section>
  );
}

export default Contact;
