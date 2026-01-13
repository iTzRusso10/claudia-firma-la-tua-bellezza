import { Heart, Sparkles, Users, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Consulenza Personalizzata",
    description:
      "Ogni trattamento inizia con un'attenta analisi dei tuoi capelli e delle tue esigenze.",
  },
  {
    icon: Sparkles,
    title: "Prodotti Professionali",
    description:
      "Utilizziamo solo i migliori prodotti selezionati per garantire risultati eccellenti.",
  },
  {
    icon: Users,
    title: "Team Qualificato",
    description:
      "Professioniste in continua formazione sulle ultime tendenze e tecniche.",
  },
  {
    icon: Award,
    title: "Esperienza Consolidata",
    description:
      "Oltre 15 anni di passione e dedizione al servizio della tua bellezza.",
  },
];

export const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-20 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Chi Siamo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Un luogo dove cura e stile
            <span className="text-primary italic"> si incontrano</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Da oltre quindici anni, il nostro salone è un punto di riferimento
            per chi cerca qualità, professionalità e attenzione personalizzata.
            Crediamo che ogni donna meriti di sentirsi bella e sicura di sé.
          </p>
        </div>

        {/* Philosophy Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              La nostra filosofia
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crediamo che la bellezza autentica nasca dalla salute del capello.
              Per questo, ogni nostro servizio parte da un'attenta diagnosi
              dello stato dei tuoi capelli e del cuoio capelluto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Non ci limitiamo a seguire le mode: costruiamo insieme a te un
              percorso personalizzato che rispetti la natura dei tuoi capelli e
              valorizzi al meglio i tuoi tratti.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il nostro obiettivo è che tu esca dal salone non solo più bella,
              ma con la consapevolezza di come prenderti cura della tua chioma
              anche a casa.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif">
              "
            </div>
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed pt-8">
              La nostra missione è far sentire ogni donna speciale, valorizzando
              la sua unicità attraverso la cura dei capelli.
            </p>
            <footer className="mt-6 text-muted-foreground">
              — Il Team Claudia Firma la Tua Bellezza
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
