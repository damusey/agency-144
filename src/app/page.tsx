import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientsBar from '@/components/ClientsBar';
import PainSection from '@/components/PainSection';
import ServicesSection from '@/components/ServicesSection';
import ROISection from '@/components/ROISection';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import UrgencySection from '@/components/UrgencySection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientsBar />
        <PainSection />
        <ServicesSection />
        <ROISection />
        <ProcessSection />
        <Testimonials />
        <UrgencySection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
