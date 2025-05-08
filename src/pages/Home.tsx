// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection'; 
//import Statebanner from '../components/StateBanner';
import TrustedBy from '../components/TrustedBy';
import MainSection from '../components/MainSection';
// import MainSection2 from '../components/MainSection2';
import PromotionSection from '../components/PromotionSection';
import Subscription from '../components/Subscription';
// import Innovation from '../components/Innovation';


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MainSection />
      {/* <MainSection2 /> */}
      <PromotionSection/>
      <Subscription/>
      {/* <Innovation/> */}
    </div>
  );
}
