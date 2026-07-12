import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import { Cart } from "@/components/Cart";
import { useCart } from "@/lib/cart-store";
import { categories, menuItems } from "@/lib/menu-data";
import { openWhatsApp } from "@/components/WhatsAppButton";
import qrPagos from "@/assets/menu-real/qr-pagos.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comidas Rápidas Don Bruno — Menú Digital" },
      { name: "description", content: "Hamburguesas, perros americanos, costillas BBQ y más. Pide por WhatsApp." },
      { property: "og:title", content: "Comidas Rápidas Don Bruno" },
      { property: "og:description", content: "Menú digital con pedidos por WhatsApp" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  const cart = useCart();
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory
    ? menuItems.filter((i) => i.category === selectedCategory)
    : menuItems;

  const groupedItems = categories
    .filter((c) => !selectedCategory || c.id === selectedCategory)
    .map((c) => ({
      ...c,
      items: filteredItems.filter((i) => i.category === c.id),
    }))
    .filter((g) => g.items.length > 0);

  const handleWhatsApp = () => {
    openWhatsApp(cart.items, cart.total);
    // Save order to localStorage for admin
    const orders = JSON.parse(localStorage.getItem("donbruno_orders") || "[]");
    orders.push({
      id: Date.now().toString(),
      items: cart.items,
      total: cart.total,
      date: new Date().toISOString(),
    });
    localStorage.setItem("donbruno_orders", JSON.stringify(orders));
    cart.clearCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cart.count} />
      <HeroSection />

      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Category filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              !selectedCategory
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Todo
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id === selectedCategory ? null : c.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Menu */}
          <div>
            {groupedItems.map((g) => (
              <MenuSection key={g.id} title={g.name} items={g.items} onAddItem={cart.addItem} />
            ))}
          </div>

          {/* Cart sidebar (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-20">
              <Cart
                items={cart.items}
                total={cart.total}
                onAdd={(id) => {
                  const item = menuItems.find((m) => m.id === id);
                  if (item) cart.addItem(item);
                }}
                onRemove={cart.removeItem}
                onClear={cart.clearCart}
                onWhatsApp={handleWhatsApp}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile cart floating button */}
      {cart.count > 0 && (
        <div className="fixed bottom-4 left-4 right-4 lg:hidden">
          <button
            onClick={() => setShowCart(!showCart)}
            className="glow-gold w-full rounded-xl bg-primary px-6 py-4 text-lg font-bold text-primary-foreground shadow-2xl transition-transform active:scale-95"
          >
            🛒 Ver Pedido ({cart.count}) — {new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(cart.total)}
          </button>
        </div>
      )}

      {/* Mobile cart modal */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowCart(false)} />
          <div className="relative w-full max-h-[80vh] overflow-y-auto rounded-t-2xl border-t border-border bg-card p-4">
            <div className="mb-3 flex justify-center">
              <div className="h-1 w-10 rounded-full bg-muted-foreground/30" />
            </div>
            <Cart
              items={cart.items}
              total={cart.total}
              onAdd={(id) => {
                const item = menuItems.find((m) => m.id === id);
                if (item) cart.addItem(item);
              }}
              onRemove={cart.removeItem}
              onClear={cart.clearCart}
              onWhatsApp={() => {
                handleWhatsApp();
                setShowCart(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 border-t border-border bg-brand-dark">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-bold text-primary">📞 Pedidos</h3>
              <p className="text-sm text-muted-foreground">Llamadas y WhatsApp</p>
              <div className="mt-2 space-y-1 text-sm">
                <a href="https://wa.me/573102890506" target="_blank" rel="noreferrer" className="block text-foreground hover:text-primary">
                  📱 310 289 0506
                </a>
                <a href="https://wa.me/573185230634" target="_blank" rel="noreferrer" className="block text-foreground hover:text-primary">
                  📱 318 523 0634
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-primary">💳 Métodos de pago</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground font-medium">Nequi:</span> 310 289 0506 · llave{" "}
                  <span className="text-foreground">@NEQUIMAU777</span>
                </li>
                <li>
                  <span className="text-foreground font-medium">DaviPlata:</span> 318 523 0634 · llave{" "}
                  <span className="text-foreground">@PLATA3185230634</span>
                </li>
                <li>Efectivo</li>
                <li>Todas las billeteras digitales</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            © 2026 Comidas Rápidas Don Bruno — Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
