import React from 'react';
import Header from './components/Header';
import GoTopButton from './components/GoTopButton';
import TrilemaContent from './components/TrilemaContent';
import CryptoContent from './components/CryptoContent';
import CryptoChart from './components/CryptoChart';
import AboutJJChagerben from './components/AboutJJChagerben';
import LivesContent from './components/LivesContent';
import WorkWithMeContent from './components/WorkWithMe';
import SocialMediaContent from './components/SocialMediaContent';
import MerchContent from './components/MerchContent';
import PriceMentoring from './components/PriceMentoring';
import NavBlur from './utils/NavBlur';
import PointerEffect from './utils/PointerEfects';
import SmoothScroll from './utils/SmothScroll';

const App = () => {
  return (
    <div>
      <SmoothScroll />
      <PointerEffect />
      <NavBlur />
      <Header />
      <GoTopButton />
      <TrilemaContent />
      <CryptoContent />
      <CryptoChart />
      <AboutJJChagerben />
      <LivesContent />
      <WorkWithMeContent />
      <SocialMediaContent />
      <MerchContent />
      <PriceMentoring />
    </div>
  );
};

export default App;
