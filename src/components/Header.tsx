import { Link } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";

export function Header({ cartCount }: { cartCount?: number }) {
  const { isAdmin } = useAuth();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-brand-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="text-lg font-bold text-gradient-gold">Don Bruno</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>
            Menú
          </Link>
          {isAdmin && (
            <Link to="/admin" className="text-sm text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>
              Admin
            </Link>
          )}
          {cartCount !== undefined && cartCount > 0 && (
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}
