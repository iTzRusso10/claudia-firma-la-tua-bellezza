import salonInterior from "@/assets/salon-interior.jpg";
import heroSalon from "@/assets/hero-salon.jpg";

const salonFeatures = [
  "Ambiente climatizzato e confortevole",
  "Postazioni spaziose e private",
  "Prodotti professionali di alta gamma",
  "Area relax con bevande offerte",
  "Massima igiene e sterilizzazione",
  "Parcheggio comodo nelle vicinanze",
];

export const SalonSection = () => {
  return (
    <section id="salone" className="py-20 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Il Nostro Salone
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Un'atmosfera pensata per
            <span className="text-primary italic"> il tuo benessere</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Il nostro salone è stato progettato per offrirti un'esperienza
            rilassante e confortevole, dove ogni dettaglio è curato per farti
            sentire coccolata.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant h-[400px] md:h-[500px]">
            <img
              src={salonInterior}
              alt="Interno del salone con postazioni moderne e accoglienti"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>

          {/* Secondary Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant h-[400px] md:h-[500px]">
            <img
              src={heroSalon}
              alt="Area styling del salone con illuminazione professionale"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>
        </div>

        {/* Features */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            Cosa troverai da noi
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salonFeatures.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-foreground"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Atmosphere Description */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-foreground">
              Eleganza
            </h4>
            <p className="text-muted-foreground text-sm">
              Un design raffinato che crea un'atmosfera di lusso sobrio ed
              accogliente.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-foreground">
              Relax
            </h4>
            <p className="text-muted-foreground text-sm">
              Musica soft, profumazioni delicate e un ambiente pensato per
              rilassarti.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">💎</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-foreground">
              Cura
            </h4>
            <p className="text-muted-foreground text-sm">
              Attenzione maniacale alla pulizia, all'ordine e ad ogni singolo
              dettaglio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
