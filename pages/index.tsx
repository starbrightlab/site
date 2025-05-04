import React from 'react';
import Head from 'next/head';
import MainLayout from '../components/templates/MainLayout';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import Services from '../components/organisms/Services';
import Portfolio from '../components/organisms/Portfolio';
import Contact from '../components/organisms/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Starbright Lab | Retro-Futurist Innovation</title>
        <meta name="description" content="Starbright Lab - Where retro-futurist vision meets modern innovation" />
      </Head>
      
      <MainLayout>
        {/* Section ordering is critically important for divider transitions to work properly */}
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </MainLayout>
    </>
  );
}
