import { profile } from "../data/profile.js";
import { withFallback } from "../utils/withFallback.js";
import { formatMonthYear } from "../utils/formatDate.js";
import Button from "../components/Button.jsx";

function CV() {
  const hasCv = Boolean(profile.cvUrl && profile.cvFileName);

  return (
    <section id="cv" className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold text-slate-100">Mon CV</h2>
      <p className="mt-3 text-slate-300">
        CV ciblé {withFallback(profile.jobTitle)} — dernière mise à jour :{" "}
        {formatMonthYear(withFallback(profile.cvUpdatedAt))}
      </p>

      {hasCv ? (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={profile.cvUrl} variant="solid" external>
            Consulter mon CV
          </Button>
          <Button href={profile.cvUrl} variant="outline" download>
            Télécharger ({profile.cvFileName})
          </Button>
        </div>
      ) : (
        // AC-003 : aucun CV valide fourni → aucun lien fictif, on indique "À compléter"
        <p className="mt-6 text-slate-500 italic">À compléter</p>
      )}
    </section>
  );
}

export default CV;
