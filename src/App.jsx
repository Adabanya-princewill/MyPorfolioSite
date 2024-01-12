import { NavBar } from "./components/NavBar";
import './index.css'
import ShuffleHero from "./components/ShuffleHero";
import { BouncyCardsFeatures } from "./components/BouncyCardsFeatures";
import HoverDevCards from "./components/HoverDevCards";
import { SimpleRegistrationForm } from "./components/SimpleRegistrationForm";
import { FooterWithSitemap } from "./components/FooterWithSitemap";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="App max-w-screen-xl mx-auto">
      <div className="feature-section">
        <NavBar />
        <ShuffleHero />
      </div>
      <HoverDevCards />
      <BouncyCardsFeatures />
      <SimpleRegistrationForm />
      <FooterWithSitemap />
    </div>
  );
}

export default App;
