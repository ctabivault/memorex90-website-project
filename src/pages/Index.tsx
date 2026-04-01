import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import ShowsSection from "@/components/ShowsSection";
import MusicSection from "@/components/MusicSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideosSection />
      <ShowsSection />
      <MusicSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
