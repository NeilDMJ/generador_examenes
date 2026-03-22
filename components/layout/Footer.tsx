import Link from "next/link";

const footerLinks = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
  { href: "/soporte", label: "Soporte" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-12 mt-auto transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-on-surface text-xl">
            Quizzly Pulse
          </span>
          <p className="text-sm tracking-wide text-on-surface-variant">
            © Quizzly Pulse. Eleva tu intelecto.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm tracking-wide text-on-surface-variant hover:text-primary underline decoration-2 underline-offset-4 transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
