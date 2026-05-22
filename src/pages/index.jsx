import "../styles/global.css";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import QuoteSection from "../components/QuoteSection";
import SpotifySection from "../components/SpotifySection";
import WaitlistSection from "../components/WaitlistSection";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import TrailerSection from "../components/TrailerSection";

export default function Index() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <QuoteSection />
        <SpotifySection />
        <TrailerSection />
        <WaitlistSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
