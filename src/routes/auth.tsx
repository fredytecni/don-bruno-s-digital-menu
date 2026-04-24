import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Acceso Admin — Don Bruno" },
      { name: "description", content: "Inicio de sesión para administradores de Don Bruno." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Cuenta creada. Ya puedes iniciar sesión.");
        setMode("login");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Sesión iniciada");
        navigate({ to: "/admin" });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error de autenticación";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-sm px-4 py-12">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
          <div className="text-center">
            <p className="text-4xl">🔐</p>
            <h1 className="mt-2 text-xl font-bold text-foreground">
              {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
            </h1>
            <p className="mt-1 text-xs text-muted-foreground">
              Solo administradores pueden acceder al panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              autoComplete="email"
              className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Procesando..." : mode === "login" ? "Entrar" : "Registrarme"}
            </Button>
          </form>

          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="mt-4 w-full text-center text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            {mode === "login"
              ? "¿No tienes cuenta? Crear una"
              : "¿Ya tienes cuenta? Iniciar sesión"}
          </button>

          <div className="mt-6 border-t border-border pt-4 text-center">
            <Link to="/" className="text-xs text-muted-foreground hover:text-primary">
              ← Volver al menú
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
