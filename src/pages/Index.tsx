
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BusinessAssociates from '@/components/BusinessAssociates';
import Advantages from '@/components/Advantages';
import Achievements from '@/components/Achievements';
import Services from '@/components/Services';
import TrustedCompanies from '@/components/TrustedCompanies';
import PartnershipSection from '@/components/PartnershipSection';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BusinessAssociates />
        <Advantages />
        <Achievements />
        <Services />
        <TrustedCompanies />
        <PartnershipSection />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
