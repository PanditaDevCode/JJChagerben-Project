// App.jsx
import React from 'react';
import Header from './components/Header';
import GoTopButton from './components/GoTopButton';
import InformationContainer from './components/InformationContainer';
import CryptoContent from './components/CryptoContent';
import CryptoChart from './components/CryptoChart';
import AboutJJChagerben from './components/AboutJJChagerben';
import LivesContent from './components/LivesContent';
import WorkWithMeContent from './components/WorkWithMe';
import SocialMediaContent from './components/SocialMediaContent';

const App = () => {
  return (
    <div>
      <Header />
      <GoTopButton />
      <InformationContainer />
      <CryptoChart />
      <CryptoContent />
      <AboutJJChagerben />
      <LivesContent />
      <WorkWithMeContent />
      <SocialMediaContent />
    </div>
  );
};

export default App;
