import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              CB ~ Firma la Tua Bellezza
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Un salone dedicato alla bellezza e alla cura dei tuoi capelli.
              Esperienza, professionalità e attenzione personalizzata.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Seguici su Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Seguici su Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Link Utili
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#chi-siamo", label: "Chi Siamo" },
                { href: "#servizi", label: "Servizi" },
                { href: "#salone", label: "Il Salone" },
                { href: "#contatti", label: "Contatti" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Servizi
            </h4>
            <ul className="space-y-3">
              {[
                "Taglio & Piega",
                "Colore & Schiariture",
                "Trattamenti Curativi",
                "Styling Eventi",
                "Consulenze",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary-foreground/50" />
                <span className="text-primary-foreground/70 text-sm">
                  Viale dei Bizantini, 75/2, 88100 Catanzaro CZ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary-foreground/50" />
                <a
                  href="tel:+390961367034"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  0961 367034
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} CB ~ Firma la Tua Bellezza. Tutti i diritti
              riservati.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
