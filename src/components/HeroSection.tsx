import heroBand from "@/assets/hero-band.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden">
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

      {/* Bottom navigation links */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-8 md:gap-12">
        {[
          { label: "Home", path: "" },
          { label: "About", path: "about" },
          { label: "Videos", path: "videos" },
          { label: "Gallery", path: "gallery" },
          { label: "Social", path: "social" },
        ].map((item) => (
          <a
            key={item.label}
            href={`#${item.path || "home"}`}
            className="flex flex-col items-center text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <span className="text-sm md:text-base font-display tracking-wider">{item.label}</span>
            <span className="text-[10px] md:text-xs opacity-60 font-body">
              www.memorex90.com/{item.path}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
