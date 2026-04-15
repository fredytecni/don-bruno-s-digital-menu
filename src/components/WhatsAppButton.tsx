import type { CartItem } from "@/lib/menu-data";
import { formatPrice } from "@/lib/menu-data";

const PHONE_NUMBERS = ["573102890506", "573185230634"];

export function buildWhatsAppMessage(items: CartItem[], total: number): string {
  const lines = items.map(
    (i) => `• ${i.quantity}x ${i.name} — ${formatPrice(i.price * i.quantity)}`
  );
  return encodeURIComponent(
    `🔥 *Pedido Comidas Rápidas Don Bruno*\n\n${lines.join("\n")}\n\n💰 *Total: ${formatPrice(total)}*\n\n¡Gracias por tu pedido!`
  );
}

export function openWhatsApp(items: CartItem[], total: number, phoneIndex = 0) {
  const msg = buildWhatsAppMessage(items, total);
  const phone = PHONE_NUMBERS[phoneIndex] || PHONE_NUMBERS[0];
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}
