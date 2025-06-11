
import React from 'react';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
