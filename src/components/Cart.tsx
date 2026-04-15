import { Button } from "@/components/ui/button";
import type { CartItem } from "@/lib/menu-data";
import { formatPrice } from "@/lib/menu-data";

interface CartProps {
  items: CartItem[];
  total: number;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onWhatsApp: () => void;
}

export function Cart({ items, total, onAdd, onRemove, onClear, onWhatsApp }: CartProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-3xl">🛒</p>
        <p className="mt-2 text-muted-foreground">Tu carrito está vacío</p>
        <p className="text-sm text-muted-foreground">¡Agrega productos del menú!</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-primary/30 bg-card p-4 glow-gold">
      <h3 className="mb-3 text-lg font-bold text-primary">🛒 Tu Pedido</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-2 rounded-lg bg-secondary/50 px-3 py-2">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">{item.emoji} {item.name}</p>
              <p className="text-xs text-muted-foreground">{formatPrice(item.price)} c/u</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => onRemove(item.id)}
                className="flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-foreground transition-colors hover:bg-destructive hover:text-destructive-foreground"
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-bold text-foreground">{item.quantity}</span>
              <button
                onClick={() => onAdd(item.id)}
                className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/80"
              >
                +
              </button>
            </div>
            <p className="w-20 text-right text-sm font-bold text-primary">{formatPrice(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="text-lg font-bold text-foreground">Total:</span>
        <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
      </div>

      <div className="mt-4 flex gap-2">
        <Button variant="outline" size="sm" onClick={onClear} className="flex-1">
          Vaciar
        </Button>
        <Button size="lg" onClick={onWhatsApp} className="flex-[2] gap-2 text-base font-bold">
          📱 Pedir por WhatsApp
        </Button>
      </div>
    </div>
  );
}
