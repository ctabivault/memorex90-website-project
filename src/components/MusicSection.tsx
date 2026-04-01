import { ExternalLink } from "lucide-react";

const albums = [
  { title: "The Woo Song", image: "https://thedilemmaband.com/img/woo-song.jpg" },
  { title: "Sweet Woman", image: "https://thedilemmaband.com/img/sweet-woman.jpg" },
  { title: "Fix You Up", image: "https://thedilemmaband.com/img/fix-you-up.webp" },
  { title: "Land Ho?", image: "https://thedilemmaband.com/img/landho.jpg" },
];

const MusicSection = () => {
  return (
    <section id="music" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text">
          Latest Release
        </h2>

        {/* Featured release */}
        <div className="max-w-md mx-auto mb-12">
          <div className="glass-card p-6 text-center">
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src="https://thedilemmaband.com/img/woo-song.jpg"
                alt="The Woo Song album cover"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-1 mb-4">
              <p className="font-display text-primary text-sm">Song: <span className="text-foreground">The Woo Song</span></p>
              <p className="font-display text-primary text-sm">Released: <span className="text-foreground">June 30th, 2023</span></p>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="https://music.apple.com/us/album/the-woo-song-single/1691610363" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Apple Music">🎵</a>
              <a href="https://open.spotify.com/album/6XMylmOK1kB3h2XloWNXIR" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Spotify">🎧</a>
              <a href="https://music.amazon.com/albums/B0C7CL7RT1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Amazon Music">🎶</a>
            </div>
            <a
              href="https://music.apple.com/us/artist/the-dilemma/1441568766"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-band text-xs"
            >
              <ExternalLink size={14} /> Purchase Music
            </a>
          </div>
        </div>

        {/* Music Video */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-display text-xl text-center text-foreground mb-6">
            Official Music Video — The Woo Song
          </h3>
          <div className="glass-card overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/HXgJ-TYcGas"
                title="The Woo Song Official Music Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Discography */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 glow-text">
          Discography
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {albums.map((album) => (
            <div key={album.title} className="glass-card p-3 text-center group">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={album.image}
                  alt={`${album.title} album cover`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h4 className="font-display text-sm text-foreground">{album.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
