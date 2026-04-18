import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Background } from "@/components/Background";
import { BioHero } from "@/components/BioHero";
import { CatalogOverlay } from "@/components/CatalogOverlay";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <main className="relative h-[100dvh] overflow-hidden font-sans text-foreground">
      <Background />
      <BioHero onCatalog={() => setCatalogOpen(true)} />
      <CatalogOverlay open={catalogOpen} onClose={() => setCatalogOpen(false)} />
    </main>
  );
}
