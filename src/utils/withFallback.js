// Cf. FR-011 / AC-015 : une information nécessaire absente doit afficher
// "À compléter" pendant la phase de travail, jamais un contenu inventé.

const DEFAULT_FALLBACK = "À compléter";

/**
 * Retourne la valeur si elle est renseignée (non vide, non null, non undefined),
 * sinon retourne le texte de repli "À compléter".
 * À utiliser uniquement pour des champs obligatoires du schéma (cf. 03-DATA-SCHEMA.md).
 * Ne pas utiliser pour des champs facultatifs (ex. demoUrl) : ceux-ci doivent
 * simplement être omis de l'affichage plutôt que de montrer "À compléter".
 */
export function withFallback(value, fallback = DEFAULT_FALLBACK) {
  if (value === null || value === undefined) return fallback;
  if (typeof value === "string" && value.trim() === "") return fallback;
  if (Array.isArray(value) && value.length === 0) return fallback;
  return value;
}

export default withFallback;
