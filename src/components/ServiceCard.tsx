import type { Service } from "@/data/services";
import { buildWhatsAppLink } from "@/config/site";

type Props = {
  service: Service;
  onDescription: () => void;
};

export function ServiceCard({ service, onDescription }: Props) {
  const handleSchedule = () => {
    window.open(
      buildWhatsAppLink(`Oi, quero marcar: ${service.name} = ${service.price}`),
      "_blank",
    );
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-md shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          width={800}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
        <div className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-rose to-gold px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
          {service.price}
        </div>
        <h3 className="absolute bottom-3 left-4 right-4 font-display text-xl font-bold text-white drop-shadow-lg">
          {service.name}
        </h3>
      </div>

      <div className="flex gap-2 p-3">
        <button
          onClick={handleSchedule}
          className="flex-1 rounded-xl bg-whatsapp px-3 py-3 text-sm font-semibold text-whatsapp-foreground transition-transform hover:scale-105 active:scale-95"
        >
          📅 Agendar
        </button>
        <button
          onClick={onDescription}
          className="flex-1 rounded-xl border border-border bg-secondary px-3 py-3 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105 active:scale-95"
        >
          ℹ️ Detalhes
        </button>
      </div>
    </article>
  );
}
