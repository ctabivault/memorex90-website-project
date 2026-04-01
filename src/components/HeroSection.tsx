import heroBand from "@/assets/hero-band.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBand}
          alt="Memorex90 live performance"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20 md:pt-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 drop-shadow-2xl opacity-50">
          Memorex90
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
          Playing Songs from your favorite 80s and 90s Mixtapes
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
