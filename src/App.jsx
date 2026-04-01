import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import InfoCards from './components/InfoCards';
import About from './components/About';
import Services from './components/Services';
import CoreValues from './components/CoreValues';
import AppointmentBanner from './components/AppointmentBanner';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col pt-[120px] md:pt-[136px]">
      {/* 
        The top padding accounts for the fixed header height. 
        Topbar + Main header = ~120-140px depending on screen size.
      */}
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Stats />
        <InfoCards />
        <About />
        <Services />
        <CoreValues />
        <AppointmentBanner />
        <Testimonials />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;