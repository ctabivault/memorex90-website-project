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
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 drop-shadow-2xl">
          Memorex90
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-8">
          The Rock Party Fusion Band for Festivals, Fairs, Corporate Functions, Private Parties & Large Music Venues
        </p>
        <a href="#shows" className="btn-band">
          Upcoming Shows
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
