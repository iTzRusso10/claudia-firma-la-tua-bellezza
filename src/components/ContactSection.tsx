import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ExternalLink,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: "0961 367034",
    href: "tel:+390961367034",
  },
  {
    icon: MapPin,
    label: "Indirizzo",
    value: "Viale dei Bizantini, 75/2, 88100 Catanzaro CZ",
    href: "https://maps.google.com/?q=Viale+dei+Bizantini+75/2+88100+Catanzaro+CZ",
  },
];

const hours = [
  { day: "Lunedì", hours: "Chiuso" },
  { day: "Martedì - Venerdì", hours: "9:00 - 18:30" },
  { day: "Sabato", hours: "9:00 - 18:30" },
  { day: "Domenica", hours: "Chiuso" },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Messaggio inviato!",
      description: "Ti ricontatteremo al più presto. Grazie!",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Ciao! Vorrei prenotare un appuntamento presso Claudia Firma la Tua Bellezza."
    );
    window.open(`https://wa.me/390961367034?text=${message}`, "_blank");
  };

  return (
    <section id="contatti" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Contatti
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Siamo qui
            <span className="text-primary italic"> per te</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Prenota il tuo appuntamento o contattaci per qualsiasi informazione.
            Saremo felici di accoglierti nel nostro salone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Prenota su WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                Il modo più veloce per prenotare il tuo appuntamento.
                Rispondiamo entro poche ore!
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto gap-2"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Scrivici su WhatsApp
              </Button>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block text-foreground font-medium">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Orari di Apertura
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-foreground">{item.day}</span>
                    <span
                      className={`font-medium ${
                        item.hours === "Chiuso"
                          ? "text-muted-foreground"
                          : "text-primary"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Inviaci un messaggio
            </h3>
            <p className="text-muted-foreground mb-6">
              Compila il form e ti ricontatteremo al più presto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome e Cognome *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Il tuo nome"
                  className="bg-background"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="La tua email"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Il tuo numero"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Messaggio *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Come possiamo aiutarti?"
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="elegant"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Invio in corso..."
                ) : (
                  <>
                    Invia messaggio
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Inviando questo form accetti la nostra privacy policy.
              </p>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative">
          <div className="mt-16  rounded-2xl overflow-hidden shadow-soft min-h-[500px] bg-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.0!2d16.590!3d38.910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133f3e8b8c8c8c8b%3A0x8c8c8c8c8c8c8c8c!2sViale%20dei%20Bizantini%2C%2075%2F2%2C%2088100%20Catanzaro%20CZ!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa del salone Claudia Firma la Tua Bellezza"
            />
          </div>
          {/* Overlay per la mappa */}
          <div className="absolute bottom-5 left-5 right-5 w-fit bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-elevated shadow-md">
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <h4 className="font-display font-semibold text-foreground">
                  Claudia Firma la Tua Bellezza
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Viale dei Bizantini, 75/2, 88100 Catanzaro CZ
                </p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Viale+dei+Bizantini+75/2+88100+Catanzaro+CZ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
