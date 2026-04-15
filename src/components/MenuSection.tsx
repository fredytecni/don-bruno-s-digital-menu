import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/lib/menu-data";
import { formatPrice } from "@/lib/menu-data";

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  onAddItem: (item: MenuItem) => void;
}

export function MenuSection({ title, items, onAddItem }: MenuSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-bold text-primary">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-lg">{item.emoji}</span>
                <h3 className="font-semibold text-foreground">{item.name}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              <p className="mt-2 text-lg font-bold text-primary">{formatPrice(item.price)}</p>
            </div>
            <Button
              size="sm"
              onClick={() => onAddItem(item)}
              className="mt-1 shrink-0"
            >
              Agregar
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
