import React from 'react';
import GoTopButton from './components/GoTopButton';
import TrilemaContent from './components/TrilemaContent';
import SocialMediaContent from './components/SocialMediaContent';
import MerchContent from './sections/MerchContent';
import PriceMentoring from './sections/PriceMentoring';
import CryptoContent from './sections/CryptoContent';
import CryptoChart from './sections/CryptoChart';
import AboutJJChagerben from './sections/AboutJJChagerben';
import LivesContent from './sections/LivesContent';
import Header from './sections/Header';
import WorkWithMeContent from './sections/WorkWithMe';
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
