// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection'; 
import Statebanner from '../components/StateBanner';
import TrustedBy from '../components/TrustedBy';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
    {/* <Statebanner/> */}
   < TrustedBy/>
    </div>
  );
}
