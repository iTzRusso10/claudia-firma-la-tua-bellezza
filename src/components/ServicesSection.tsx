import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import serviceCut from "@/assets/service-cut.jpg";
import serviceColor from "@/assets/service-color.jpg";
import serviceTreatment from "@/assets/service-treatment.jpg";
import serviceStyling from "@/assets/service-styling.jpg";

const services = [
  {
    image: serviceCut,
    title: "Taglio & Piega",
    description:
      "Un taglio studiato per valorizzare il tuo viso e il tuo stile personale. Ogni taglio include consulenza, shampoo e piega professionale.",
    features: ["Consulenza personalizzata", "Taglio su misura", "Piega inclusa"],
  },
  {
    image: serviceColor,
    title: "Colore & Schiariture",
    description:
      "Dai colori classici alle tecniche più innovative come balayage e degradé. Utilizziamo prodotti che rispettano la salute del capello.",
    features: ["Colorazione classica", "Balayage & Shatush", "Schiariture delicate"],
  },
  {
    image: serviceTreatment,
    title: "Trattamenti Curativi",
    description:
      "Trattamenti ristrutturanti e rigeneranti per capelli stressati, secchi o danneggiati. Ridiamo vita e luminosità alla tua chioma.",
    features: ["Cheratina", "Trattamenti ricostruttivi", "Maschere professionali"],
  },
  {
    image: serviceStyling,
    title: "Styling & Eventi",
    description:
      "Acconciature eleganti per matrimoni, cerimonie e occasioni speciali. Realizziamo il look perfetto per il tuo grande giorno.",
    features: ["Acconciature sposa", "Look da cerimonia", "Styling personalizzato"],
  },
];

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contatti");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servizi" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4">
            I Nostri Servizi
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Servizi pensati per
            <span className="text-primary italic"> valorizzarti</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Offriamo una gamma completa di servizi per la cura e lo styling dei
            capelli, sempre con la massima attenzione alla qualità e al benessere
            del capello.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-serif text-2xl md:text-3xl font-semibold text-primary-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="elegant-outline"
                  onClick={scrollToContact}
                  className="group/btn"
                >
                  Prenota ora
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Non trovi quello che cerchi? Offriamo anche consulenze personalizzate
            per capire insieme qual è il trattamento più adatto a te.
          </p>
          <Button variant="outline" onClick={scrollToContact}>
            Richiedi una consulenza gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};
