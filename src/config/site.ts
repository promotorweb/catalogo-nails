// Edite aqui as informações da profissional
export const SITE_CONFIG = {
  name: "Bruna Costa",
  title: "Especialista em Nail Design",
  // Número WhatsApp no formato internacional (55 + DDD + número), só dígitos
  whatsapp: "5511999999999",
  // Endereço para o Google Maps
  address: "Rua das Flores, 123 - Vila Mariana, São Paulo - SP",
};

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encoded}`;
}

export function buildMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.address)}`;
}
