import type { Service } from "@/data/services";
import { buildWhatsAppLink } from "@/config/site";
import { useEffect } from "react";

type Props = {
  service: Service | null;
  onClose: () => void;
};

export function ServiceModal({ service, onClose }: Props) {
  useEffect(() => {
    if (!service) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleSchedule = () => {
    window.open(
      buildWhatsAppLink(`Oi, quero marcar: ${service.name} = ${service.price}`),
      "_blank",
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 p-0 backdrop-blur-sm animate-fade-scale sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-border bg-card shadow-[var(--shadow-elegant)] backdrop-blur-xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md backdrop-blur transition-transform hover:scale-110"
          aria-label="Fechar"
        >
          ✕
        </button>

        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-rose to-gold px-4 py-1 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
              {service.price}
            </div>
            <h2 className="font-display text-3xl font-bold text-white drop-shadow-lg">
              {service.name}
            </h2>
          </div>
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-foreground">{service.description}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-secondary/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Técnica</p>
              <p className="mt-1 text-sm text-foreground">{service.technique}</p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Duração</p>
              <p className="mt-1 text-sm text-foreground">{service.duration}</p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Benefícios</p>
            <ul className="space-y-1.5">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-rose">✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleSchedule}
            className="w-full rounded-2xl bg-gradient-to-r from-whatsapp to-whatsapp px-6 py-4 font-semibold text-whatsapp-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-[1.02] active:scale-95"
          >
            📅 Agendar este serviço
          </button>
        </div>
      </div>
    </div>
  );
}
