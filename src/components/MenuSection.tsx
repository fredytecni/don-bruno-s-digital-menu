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
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.name}
                width={768}
                height={576}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent" />
              <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground shadow-lg">
                {formatPrice(item.price)}
              </span>
            </div>
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.emoji}</span>
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
              <Button
                size="sm"
                onClick={() => onAddItem(item)}
                className="mt-1 shrink-0"
              >
                Agregar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
