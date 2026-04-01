const VideosSection = () => {
  return (
    <section id="videos" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          Watch Us Live
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="glass-card overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jRiAgZ8tmiw"
                title="Memorex90 Live Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/cMS-34U0C9Q"
                title="Memorex90 Concert Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <h3 className="font-display text-xl text-foreground mb-4">Listen to Our Music</h3>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://music.apple.com/us/album/the-woo-song-single/1691610363"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Apple Music"
            >
              🎵
            </a>
            <a
              href="https://open.spotify.com/album/6XMylmOK1kB3h2XloWNXIR"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Spotify"
            >
              🎧
            </a>
            <a
              href="https://music.amazon.com/albums/B0C7CL7RT1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Amazon Music"
            >
              🎶
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
