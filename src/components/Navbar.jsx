import { useState } from "react";
import { profile } from "../data/profile.js";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Profil", href: "#profil" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-slate-800">
      <nav
        className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3"
        aria-label="Navigation principale"
      >
        <a
          href="#accueil"
          className="font-semibold text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          {profile.firstName} {profile.lastName}
        </a>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="md:hidden text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-2"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul id="mobile-menu" className="md:hidden flex flex-col gap-1 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-slate-200 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
