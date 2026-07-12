import heroImage from "@/assets/hero-food.jpg";
import logoAsset from "@/assets/menu-real/logo1.jpg.asset.json";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Comidas Rápidas Don Bruno" width={1920} height={1024} className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:py-20">
        <img
          src={logoAsset.url}
          alt="Logo Don Bruno"
          className="mx-auto h-28 w-28 rounded-full border-2 border-primary object-cover shadow-xl shadow-primary/30 sm:h-36 sm:w-36"
        />
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-gradient-gold">Comidas Rápidas</span>
          <br />
          <span className="text-foreground">Don Bruno</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Hamburguesas artesanales, choriperros, costillas de cerdo y picadas. ¡Pide directo por WhatsApp!
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
          <a href="tel:+573102890506" className="rounded-full border border-border bg-card px-3 py-1 hover:border-primary/50">📞 310 289 0506</a>
          <a href="tel:+573185230634" className="rounded-full border border-border bg-card px-3 py-1 hover:border-primary/50">📞 318 523 0634</a>
        </div>
      </div>
    </section>
  );
}
