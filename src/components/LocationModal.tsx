import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/config/site";

type Props = {
  open: boolean;
  onClose: () => void;
  onOpenMaps: () => void;
};

export function LocationModal({ open, onClose, onOpenMaps }: Props) {
  const [phase, setPhase] = useState<"loading" | "ready">("loading");

  useEffect(() => {
    if (!open) return;
    setPhase("loading");
    const t = setTimeout(() => setPhase("ready"), 1500);
    return () => clearTimeout(t);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-fade-scale"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-elegant)] backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {phase === "loading" ? (
          <>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose to-gold">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-background border-t-transparent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Localizando...</h3>
            <p className="mt-2 text-sm text-muted-foreground">Encontrando o estúdio</p>
          </>
        ) : (
          <>
            <div className="mb-4 text-5xl">📍</div>
            <h3 className="font-display text-2xl font-bold text-foreground">Estamos aqui</h3>
            <p className="mt-3 text-sm text-muted-foreground">{SITE_CONFIG.address}</p>
            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={onOpenMaps}
                className="rounded-xl bg-gradient-to-r from-rose to-primary px-5 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              >
                Abrir no Google Maps
              </button>
              <button
                onClick={onClose}
                className="rounded-xl px-5 py-3 text-sm text-muted-foreground hover:text-foreground"
              >
                Fechar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
