import React from "react";
import MerchContent from "./sections/MerchContent";
import Header from "./sections/Header";
import PriceMentoring from "./sections/PriceMentoring";
import CryptoContent from "./sections/CryptoContent";
import CalcBTC from "./sections/CalcBTC";
import CryptoChart from "./sections/CryptoChart";
import AboutJJChagerben from "./sections/AboutJJChagerben";
import LivesContent from "./sections/LivesContent";
import WorkWithMeContent from "./sections/WorkWithMe";
import MenuNav from "./components/layout/NavMenu";
import SocialMediaContent from "./components/common/SocialMediaContent";
import TrilemaContent from "./components/layout/TrilemaContent";
import SmoothScroll from "./utils/SmootScroll";
import PointerEffect from "./utils/PointerEfects";

const App = () => {
  return (
    <div>
      <MenuNav />
      <PointerEffect />
      <SmoothScroll />
      <div id="main-content" data-scroll-section>
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