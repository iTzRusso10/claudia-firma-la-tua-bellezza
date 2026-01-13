import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
    features: [
      "Consulenza personalizzata",
      "Taglio su misura",
      "Piega inclusa",
    ],
  },
  {
    image: serviceColor,
    title: "Colore & Schiariture",
    description:
      "Dai colori classici alle tecniche più innovative come balayage e degradé. Utilizziamo prodotti che rispettano la salute del capello.",
    features: [
      "Colorazione classica",
      "Balayage & Shatush",
      "Schiariture delicate",
    ],
  },
  {
    image: serviceTreatment,
    title: "Trattamenti Curativi",
    description:
      "Trattamenti ristrutturanti e rigeneranti per capelli stressati, secchi o danneggiati. Ridiamo vita e luminosità alla tua chioma.",
    features: [
      "Cheratina",
      "Trattamenti ricostruttivi",
      "Maschere professionali",
    ],
  },
  {
    image: serviceStyling,
    title: "Styling & Eventi",
    description:
      "Acconciature eleganti per matrimoni, cerimonie e occasioni speciali. Realizziamo il look perfetto per il tuo grande giorno.",
    features: [
      "Acconciature sposa",
      "Look da cerimonia",
      "Styling personalizzato",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Ciao! Vorrei prenotare un appuntamento presso CB ~ Firma la Tua Bellezza."
    );
    window.open(`https://wa.me/390961367034?text=${message}`, "_blank");
    setIsBookingDialogOpen(false);
  };

  const handleCall = () => {
    window.location.href = "tel:+390961367034";
    setIsBookingDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background/10">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background/10">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4">
                I Nostri Servizi
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Servizi pensati per
                <span className="text-primary italic"> valorizzarti</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Offriamo una gamma completa di servizi per la cura e lo styling
                dei capelli, sempre con la massima attenzione alla qualità e al
                benessere del capello.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-background/10">
          <div className="container mx-auto px-4 md:px-8">
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
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="elegant-outline"
                      onClick={() => setIsBookingDialogOpen(true)}
                      className="group/btn"
                    >
                      Prenota ora
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mt-14 py-16 md:py-24 bg-secondary/40">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {/* CTA Card */}
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft text-center">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Non trovi quello che cerchi?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Offriamo anche consulenze personalizzate per capire insieme
                  qual è il trattamento più adatto a te. Ogni cliente è unica e
                  merita un'attenzione speciale.
                </p>
                <Button
                  variant="elegant"
                  size="lg"
                  onClick={() => navigate("/contatti")}
                  className="gap-2 w-full"
                >
                  Richiedi una consulenza gratuita
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card p-6 rounded-xl shadow-soft text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Prodotti Premium
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Utilizziamo solo prodotti professionali di altissima qualità
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-soft text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Puntualità
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Rispettiamo i tuoi impegni e i tempi concordati
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-soft text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Risultati Garantiti
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    La tua soddisfazione è la nostra priorità assoluta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Booking Dialog */}
      <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-center">
              Prenota il tuo appuntamento
            </DialogTitle>
            <DialogDescription className="text-center">
              Scegli il metodo che preferisci per contattarci
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4">
            {/* WhatsApp Button */}
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full gap-3"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Scrivici su WhatsApp
            </Button>

            {/* Phone Call Button */}
            <Button
              variant="elegant-outline"
              size="lg"
              className="w-full gap-3"
              onClick={handleCall}
            >
              <Phone className="w-5 h-5" />
              Chiamaci: 0961 367034
            </Button>

            {/* Alternative text */}
            <p className="text-xs text-muted-foreground text-center mt-2">
              Oppure{" "}
              <button
                onClick={() => {
                  setIsBookingDialogOpen(false);
                  navigate("/contatti");
                }}
                className="text-primary underline hover:no-underline"
              >
                vai alla pagina contatti
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
