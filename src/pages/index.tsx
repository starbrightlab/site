import React from 'react';
import Head from 'next/head';
//import { motion } from 'framer-motion';
import PageContainer from '@/components/layout/PageContainer';
import Section from '@/components/layout/Section';
import SectionDivider from '@/components/layout/SectionDivider';
import Button from '@/components/core/Button';
import Card from '@/components/core/Card';
import Heading from '@/components/core/Heading';
import Text from '@/components/core/Text';
import CometTrail from '@/components/interactive/CometTrail';
import StarBurst from '@/components/interactive/StarBurst';

/**
 * Home page showcasing the retro-futurist design system
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Starbright Lab - Designing Tomorrow, Today</title>
        <meta
          name="description"
          content="Building tools with vintage vision and cosmic curiosity"
        />
      </Head>

      <PageContainer fullWidth transparentHeader>
        {/* HERO SECTION */}
        <Section
          variant="highlight"
          spacing="wide"
          className="relative overflow-hidden"
        >
          {/* Animated comets */}
          <CometTrail size="lg" position="top-right" />
          <CometTrail size="md" position="bottom-left" delay={2000} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Heading level={1} script className="mb-4 drop-shadow-lg">
              Starbright Lab
            </Heading>

            <Heading
              level={2}
              className="font-retroSans text-xl uppercase tracking-widest"
            >
              Designing Tomorrow, Today
            </Heading>

            <Text size="lg" className="mt-6 mb-8 max-w-xl mx-auto font-light">
              Building tools with vintage vision and cosmic curiosity.
            </Text>

            <Button
              size="lg"
              className="mt-6 mb-8 max-w-xl mx-auto"
              onClick={() =>
                (window.location.href = 'mailto:hello@starbrightlab.com')
              }
            >
              Launch the Future
            </Button>
          </div>
        </Section>

        {/* DIVIDER */}
        <SectionDivider variant="wave" />

        {/* ABOUT SECTION */}
        <Section id="mission" spacing="normal" className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <StarBurst size="sm" color="text-retro-teal" className="mb-3" />
              <Heading level={2} className="mb-4">
                Our Cosmic Mission
              </Heading>
              <Text className="mb-6">
                At Starbright Lab, we blend nostalgic charm with future-forward
                technology. Our mission is to create digital experiences that
                inspire the same wonder and optimism as the atomic age&apos;s
                vision of tomorrow.
              </Text>
              <Text className="mb-6">
                We believe the idealistic spirit of mid-century futurism can
                inform how we build technology today—with a sense of
                possibility, elegance, and human-centered design.
              </Text>
              <Button variant="secondary">Explore Our Vision</Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-radial-burst rounded-xl overflow-hidden flex items-center justify-center relative shadow-retro-pop">
                {/* This would be an image in production */}
                <div className="absolute inset-0 opacity-20 halftone-overlay"></div>
                <StarBurst size="lg" color="text-white" animate />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-retro-aqua rounded-xl p-4 shadow-retro-pop rotate-tilt">
                <Text size="sm" weight="semibold" color="text-retro-teal">
                  Launched 2025
                </Text>
              </div>
            </div>
          </div>
        </Section>

        {/* DIVIDER */}
        <SectionDivider variant="orbital" color="text-retro-aqua" />

        {/* SERVICES SECTION */}
        <Section
          id="services"
          variant="default"
          spacing="normal"
          className="max-w-6xl mx-auto"
        >
          <Heading level={2} className="text-center mb-4">
            Our Services
          </Heading>
          <Text className="text-center max-w-2xl mx-auto mb-12">
            Propelling your brand into the stratosphere with our rocket-powered
            design and development process.
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="feature" tilted="right">
              <div className="flex items-center gap-2 mb-4">
                <StarBurst size="sm" color="text-retro-orange" />
                <Heading level={3} script color="text-retro-orange">
                  Futurist Design
                </Heading>
              </div>
              <Text>
                We blend nostalgic charm with future-forward UX for immersive
                experiences. Our interfaces capture the optimism of mid-century
                design while delivering modern usability.
              </Text>
            </Card>

            <Card variant="feature" tilted="left">
              <div className="flex items-center gap-2 mb-4">
                <StarBurst size="sm" color="text-retro-teal" />
                <Heading level={3} script color="text-retro-teal">
                  Rocket-Speed Dev
                </Heading>
              </div>
              <Text>
                Our workflows are efficient, modular, and built to scale with
                your mission. We use cutting-edge technology with the
                reliability of time-tested engineering.
              </Text>
            </Card>

            <Card variant="feature" tilted="right">
              <div className="flex items-center gap-2 mb-4">
                <StarBurst size="sm" color="text-retro-gold" />
                <Heading level={3} script color="text-retro-gold">
                  Cosmic Vision
                </Heading>
              </div>
              <Text>
                We&apos;re not just building apps—we&apos;re creating
                experiences experiences that dream big. Every project begins
                with a bold vision of what&apos;s possible at the outer limits
                of imagination.
              </Text>
            </Card>
          </div>
        </Section>

        {/* DIVIDER */}
        <SectionDivider variant="atomic" color="text-retro-mustard" />

        {/* CTA SECTION */}
        <Section
          variant="dark"
          spacing="normal"
          className="max-w-6xl mx-auto text-center"
        >
          <Heading level={2} script color="text-retro-coral" className="mb-6">
            Ready to Blast Off?
          </Heading>
          <Text size="lg" className="mb-8 max-w-2xl mx-auto">
            Let&apos;s chart a course to your project&apos;s success. Our
            mission control is standing by to hear about your vision for the
            future.
          </Text>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
              Start Your Journey
            </Button>
            <Button variant="secondary" size="lg">
              View Our Orbit
            </Button>
          </div>
        </Section>
      </PageContainer>
    </>
  );
}
