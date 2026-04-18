import profile from "@/assets/profile.jpg";
import { SITE_CONFIG, buildWhatsAppLink, buildMapsLink } from "@/config/site";
import { useState } from "react";
import { LocationModal } from "./LocationModal";

type Props = {
  onCatalog: () => void;
};

export function BioHero({ onCatalog }: Props) {
  const [locationOpen, setLocationOpen] = useState(false);

  const handleSchedule = () => {
    window.open(
      buildWhatsAppLink("Oi, gostaria de agendar um horário."),
      "_blank",
    );
  };

  return (
    <section className="relative flex h-[100dvh] flex-col items-center justify-center px-6 py-8 text-center">
      {/* Floating ornaments */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-32 w-32 rounded-full bg-rose/20 blur-3xl animate-float" />
        <div
          className="absolute right-[12%] bottom-[20%] h-40 w-40 rounded-full bg-gold/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Profile */}
      <div className="relative mb-5">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-rose to-gold blur-2xl opacity-50" />
        <div className="rounded-full p-1 animate-bubble">
          <img
            src={profile}
            alt={SITE_CONFIG.name}
            width={512}
            height={512}
            className="h-32 w-32 rounded-full border-4 border-background object-cover shadow-[var(--shadow-elegant)] sm:h-40 sm:w-40"
          />
        </div>
      </div>

      {/* Identity */}
      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Nail Studio
      </p>
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        <span className="bg-gradient-to-r from-rose via-primary to-gold bg-clip-text text-transparent">
          {SITE_CONFIG.name}
        </span>
      </h1>
      <p className="mt-2 max-w-xs text-sm text-muted-foreground sm:text-base">
        {SITE_CONFIG.title}
      </p>

      {/* Actions — bio links style */}
      <div className="mt-7 flex w-full max-w-sm flex-col gap-3">
        <button
          onClick={onCatalog}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose to-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] active:scale-[0.98]"
        >
          <span className="relative z-10">✨ Ver Catálogo</span>
        </button>
        <button
          onClick={handleSchedule}
          className="rounded-2xl bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-[var(--shadow-card)] transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          📅 Agendar pelo WhatsApp
        </button>
        <button
          onClick={() => setLocationOpen(true)}
          className="rounded-2xl border border-border bg-card/80 px-6 py-4 text-base font-semibold text-foreground backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-card active:scale-[0.98]"
        >
          📍 Onde Estou
        </button>
      </div>

      {/* Tiny footer */}
      <p className="absolute bottom-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
        © {new Date().getFullYear()} {SITE_CONFIG.name}
      </p>

      <LocationModal
        open={locationOpen}
        onClose={() => setLocationOpen(false)}
        onOpenMaps={() => window.open(buildMapsLink(), "_blank")}
      />
    </section>
  );
}
