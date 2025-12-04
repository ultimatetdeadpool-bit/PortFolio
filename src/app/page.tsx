"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Portfolio />
        <Footer />
      </div>
    </LanguageProvider>
  );
}