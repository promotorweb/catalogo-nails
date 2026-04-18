import { useEffect, useState } from "react";
import { CATEGORIES, type Service } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { ServiceModal } from "./ServiceModal";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CatalogOverlay({ open, onClose }: Props) {
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-background/80 px-5 py-4 backdrop-blur-md">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
            Catálogo
          </p>
          <h2 className="font-display text-xl font-bold text-foreground">
            Serviços
          </h2>
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar catálogo"
          className="rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-semibold text-foreground transition-all hover:scale-105 active:scale-95"
        >
          ✕ Fechar
        </button>
      </header>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="mb-12 last:mb-0">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {cat.title}
                </h3>
                <div className="ml-2 h-px flex-1 bg-gradient-to-r from-rose/40 to-transparent" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cat.services.map((svc) => (
                  <ServiceCard
                    key={svc.id}
                    service={svc}
                    onDescription={() => setActive(svc)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </div>
  );
}
