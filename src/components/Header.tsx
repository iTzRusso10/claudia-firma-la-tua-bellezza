import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#salone", label: "Il Salone" },
  { href: "#contatti", label: "Contatti" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Blur Overlay - covers entire viewport when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/20 backdrop-blur-md z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        } ${isMobileMenuOpen ? "lg:hidden blur-sm" : ""}`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="font-serif text-lg md:text-xl font-semibold text-primary tracking-wide"
            >
              Firma la Tua Bellezza
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200 font-medium tracking-wide uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button - Desktop */}
            <Button
              variant="elegant"
              size="sm"
              onClick={() => scrollToSection("#contatti")}
              className="hidden lg:flex gap-2"
            >
              <Phone className="w-4 h-4" />
              Prenota Ora
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - slides in from right */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background shadow-elegant z-50 transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-serif text-xl font-semibold text-primary">
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Footer */}
          <div className="p-4 border-t border-border">
            <Button
              variant="elegant"
              size="lg"
              className="w-full gap-2"
              onClick={() => scrollToSection("#contatti")}
            >
              <Phone className="w-4 h-4" />
              Prenota Ora
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
