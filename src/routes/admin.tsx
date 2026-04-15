import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { formatPrice } from "@/lib/menu-data";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Don Bruno" },
      { name: "description", content: "Panel de administración de Comidas Rápidas Don Bruno" },
    ],
  }),
  component: AdminPage,
});

interface Order {
  id: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  date: string;
}

function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [pin, setPin] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("donbruno_orders") || "[]");
    setOrders(stored);
  }, []);

  const today = new Date().toDateString();
  const todayOrders = orders.filter((o) => new Date(o.date).toDateString() === today);
  const todayTotal = todayOrders.reduce((s, o) => s + o.total, 0);
  const allTotal = orders.reduce((s, o) => s + o.total, 0);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-sm px-4 py-20 text-center">
          <p className="text-4xl">🔒</p>
          <h1 className="mt-4 text-xl font-bold text-foreground">Panel de Administración</h1>
          <p className="mt-2 text-sm text-muted-foreground">Ingresa el PIN para acceder</p>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="PIN"
            className="mt-4 w-full rounded-lg border border-border bg-input px-4 py-3 text-center text-lg tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            onKeyDown={(e) => {
              if (e.key === "Enter" && pin === "1234") setAuthenticated(true);
            }}
          />
          <button
            onClick={() => { if (pin === "1234") setAuthenticated(true); }}
            className="mt-3 w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Entrar
          </button>
          <p className="mt-2 text-xs text-muted-foreground">PIN por defecto: 1234</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-2xl font-bold text-gradient-gold">📊 Panel de Administración</h1>

        {/* Summary cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Pedidos Hoy</p>
            <p className="mt-1 text-3xl font-bold text-primary">{todayOrders.length}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Ventas Hoy</p>
            <p className="mt-1 text-3xl font-bold text-primary">{formatPrice(todayTotal)}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Ventas Totales</p>
            <p className="mt-1 text-3xl font-bold text-foreground">{formatPrice(allTotal)}</p>
          </div>
        </div>

        {/* Orders list */}
        <h2 className="mt-8 text-lg font-bold text-foreground">Pedidos de Hoy</h2>
        {todayOrders.length === 0 ? (
          <p className="mt-4 text-center text-muted-foreground">No hay pedidos hoy todavía</p>
        ) : (
          <div className="mt-4 space-y-3">
            {todayOrders.map((order) => (
              <div key={order.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {new Date(order.date).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                  <p className="font-bold text-primary">{formatPrice(order.total)}</p>
                </div>
                <ul className="mt-2 space-y-1">
                  {order.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {item.quantity}x {item.name} — {formatPrice(item.price * item.quantity)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => {
            if (confirm("¿Borrar todos los pedidos?")) {
              localStorage.removeItem("donbruno_orders");
              setOrders([]);
            }
          }}
          className="mt-8 rounded-lg bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground transition-colors hover:bg-destructive/90"
        >
          🗑️ Limpiar Historial
        </button>
      </main>
    </div>
  );
}
