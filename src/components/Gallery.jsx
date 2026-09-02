function Gallery({ images = [], altPrefix = "Capture d'écran" }) {
  // Tant qu'aucune vraie capture n'est fournie, on affiche des placeholders
  // neutres plutôt que des images inventées (cf. FR-011 / 03-DATA-SCHEMA).
  const slots = images.length > 0 ? images : Array(3).fill(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {slots.map((src, index) =>
        src ? (
          <img
            key={index}
            src={src}
            alt={`${altPrefix} ${index + 1}`}
            loading="lazy"
            className="h-32 w-full rounded-lg object-cover"
          />
        ) : (
          <div
            key={index}
            className="flex h-32 items-center justify-center rounded-lg bg-slate-800 text-xs text-slate-500"
            aria-hidden="true"
          >
            Capture à venir
          </div>
        )
      )}
    </div>
  );
}

export default Gallery;
