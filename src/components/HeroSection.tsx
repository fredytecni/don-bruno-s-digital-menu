import heroImage from "@/assets/hero-food.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Comidas Rápidas Don Bruno" width={1920} height={1024} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
        <p className="text-5xl sm:text-7xl">🔥</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-gradient-gold">Comidas Rápidas</span>
          <br />
          <span className="text-foreground">Don Bruno</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Hamburguesas, perros, costillas BBQ y mucho más. ¡Pide directo por WhatsApp!
        </p>
      </div>
    </section>
  );
}
