function Button({ href, children, variant = "solid", external = false, download = false }) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants = {
    solid: "bg-accent text-background hover:bg-accent/90",
    outline:
      "border border-slate-600 text-slate-100 hover:border-accent hover:text-accent",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}

export default Button;
