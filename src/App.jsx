import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll"; // Importa la librería Locomotive Scroll
import GoTopButton from "./components/GoTopButton";
import TrilemaContent from "./components/TrilemaContent";
import MenuNav from "./components/NavMenu";
import SocialMediaContent from "./components/SocialMediaContent";
import MerchContent from "./sections/MerchContent";
import PriceMentoring from "./sections/PriceMentoring";
import CryptoContent from "./sections/CryptoContent";
import CryptoChart from "./sections/CryptoChart";
import AboutJJChagerben from "./sections/AboutJJChagerben";
import CalcBTC from "./sections/CalcBTC";
import LivesContent from "./sections/LivesContent";
import Header from "./sections/Header";
import WorkWithMeContent from "./sections/WorkWithMe";
import NavBlur from "./utils/NavBlur";
import PointerEffect from "./utils/PointerEfects";
import SmoothScroll from "./utils/SmootScroll";

const App = () => {
  return (
    <div>
      <MenuNav />
      <PointerEffect />
      <NavBlur />
      <SmoothScroll />
      <GoTopButton />
      <div data-scroll-section>
        <Header />
        <TrilemaContent />
        <CryptoContent />
        <CalcBTC />
        <CryptoChart />
        <AboutJJChagerben />
        <LivesContent />
        <WorkWithMeContent />
        <SocialMediaContent />
        <MerchContent />
        <PriceMentoring />
      </div>
    </div>
  );
};

export default App;
