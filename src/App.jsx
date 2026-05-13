import './styles/global.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import QuoteSection from './components/QuoteSection';
import SpotifySection from './components/SpotifySection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <QuoteSection />
        <SpotifySection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
