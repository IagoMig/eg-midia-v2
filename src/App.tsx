import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesCarousel } from './components/ServicesCarousel';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { ROICalculator } from './components/ROICalculator';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { ClientsCarousel } from './components/ClientsCarousel';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
export function App() {
  return <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <ServicesCarousel />
      <Services />
     
      <Stats />
     
      <Portfolio />
      <Process />
      <ROICalculator />
        <ClientsCarousel />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <WhatsAppButton />
    </div>;
}