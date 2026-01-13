import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home", isRoute: true },
  { href: "/servizi", label: "Servizi", isRoute: true },
  { href: "/contatti", label: "Contatti", isRoute: true },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
            ? "bg-white backdrop-blur-md shadow-soft"
            : "bg-transparent"
        } ${isMobileMenuOpen ? "lg:hidden blur-sm" : ""}`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-lg md:text-xl font-semibold text-primary tracking-wide"
            >
              Claudia Borelli
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.isRoute ? (
                    <Link
                      preventScrollReset={false}
                      to={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200 font-medium tracking-wide uppercase"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => navigate(link.href)}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200 font-medium tracking-wide uppercase"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button - Desktop */}
            <Button
              variant="elegant"
              size="sm"
              onClick={() => navigate("/contatti")}
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
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => navigate(link.href)}
                      className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                    >
                      {link.label}
                    </button>
                  )}
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
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contatti");
              }}
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
