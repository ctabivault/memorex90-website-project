import heroBand from "@/assets/hero-band.png";

const galleryImages = [
  { src: heroBand, alt: "Memorex90 live performance" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 glow-text">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((img, i) => (
            <div key={i} className="glass-card overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm font-display tracking-wider">
            More photos coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
