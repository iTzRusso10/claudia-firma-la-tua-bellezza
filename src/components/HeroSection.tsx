import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-salon.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interno elegante del salone CB ~ Firma la Tua Bellezza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block text-primary/70 text-sm md:text-base tracking-[0.3em] uppercase font-medium">
              Firma la Tua Bellezza
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up">
            La Bellezza dei tuoi Capelli
            <span className="block text-primary italic mt-2">
              in mani esperte
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
            Un'esperienza esclusiva di cura e stile, dove ogni dettaglio è
            pensato per esaltare la tua naturale eleganza.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              variant="hero"
              onClick={() => navigate("/contatti")}
              className="group"
            >
              Prenota il tuo appuntamento
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" onClick={() => navigate("/servizi")}>
              Scopri i servizi
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-muted-foreground animate-fade-in animation-delay-600">
            <div className="text-center">
              <span className="block font-serif text-3xl md:text-4xl text-primary font-semibold">
                15+
              </span>
              <span className="text-sm tracking-wide">Anni di esperienza</span>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <span className="block font-serif text-3xl md:text-4xl text-primary font-semibold">
                5000+
              </span>
              <span className="text-sm tracking-wide">Clienti soddisfatte</span>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <span className="block font-serif text-3xl md:text-4xl text-primary font-semibold">
                100%
              </span>
              <span className="text-sm tracking-wide">
                Prodotti professionali
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
