const MONTHS_FR = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

/**
 * Formate une date au format "AAAA-MM" (ex. "2026-09") en libellé français
 * (ex. "Septembre 2026"). Retourne la valeur brute si le format est inattendu.
 */
export function formatMonthYear(value) {
  if (!value || typeof value !== "string") return value;
  const [year, month] = value.split("-");
  const monthIndex = Number(month) - 1;
  if (!year || Number.isNaN(monthIndex) || !MONTHS_FR[monthIndex]) {
    return value;
  }
  return `${MONTHS_FR[monthIndex]} ${year}`;
}

export default formatMonthYear;
