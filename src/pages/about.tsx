import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import PageContainer from '@/components/layout/PageContainer';
import Section from '@/components/layout/Section';
import SectionDivider from '@/components/layout/SectionDivider';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Heading';
import Text from '@/components/core/Text';
import StarBurst from '@/components/interactive/StarBurst';
import CometTrail from '@/components/interactive/CometTrail';
import ParallaxBackground from '@/components/interactive/ParallaxBackground';
import OrbitAnimation from '@/components/interactive/OrbitAnimation';
import Timeline from '@/components/about/Timeline';
import TeamMember from '@/components/about/TeamMember';
import OrbitIcon from '@/components/about/OrbitIcon';
import type { TimelineEvent } from '@/components/about/Timeline';

/**
 * About page showcasing company history, mission, and team
 */
export default function About() {
  // Company timeline events
  const timelineEvents: TimelineEvent[] = [
    {
      year: '2025',
      title: 'The Launch of Starbright Lab',
      description:
        'Founded with a mission to blend nostalgic design with cutting-edge technology, creating digital experiences that inspire wonder and optimism.',
      color: 'orange',
    },
    {
      year: '2026',
      title: 'First Major Client Success',
      description:
        'Partnered with Universal Widgets to reimagine their digital presence, resulting in a 250% increase in user engagement and industry recognition.',
      color: 'teal',
    },
    {
      year: '2027',
      title: 'The Atomic Design System',
      description:
        'Developed our proprietary retro-futurist design system, now powering dozens of forward-thinking brands across the digital cosmos.',
      color: 'aqua',
    },
    {
      year: '2028',
      title: 'Expansion to New Frontiers',
      description:
        "Opened our second office in the Lunar District, doubling our capacity to engineer tomorrow's digital experiences.",
      color: 'coral',
    },
    {
      year: '2029',
      title: 'Launch of Orbit Platform',
      description:
        'Released our flagship product, empowering creative teams to build and deploy retro-futurist interfaces with atomic precision.',
      color: 'mustard',
    },
  ];

  // Team member data
  const teamMembers = [
    {
      name: 'Stella Nova',
      title: 'Chief Vision Officer',
      bio: 'With an eye for the stars and feet firmly planted in technological innovation, Stella charts the course for our creative journeys into digital frontiers.',
      photoUrl: '/images/team/stella.jpg',
      orbitElements: [
        {
          icon: <OrbitIcon type="rocket" color="text-retro-coral" />,
          color: 'bg-white rounded-full shadow-retro-pop',
          distance: 70,
          duration: 15,
        },
        {
          icon: <OrbitIcon type="star" color="text-retro-gold" />,
          color: 'bg-white rounded-full shadow-retro-pop',
          distance: 90,
          duration: 25,
          delay: 2,
        },
      ],
    },
    {
      name: 'Max Atomica',
      title: 'Engineering Commander',
      bio: 'Max transforms ethereal concepts into functional realities with atomic precision, leading our squadron of developers through technical challenges.',
      photoUrl: '/images/team/max.jpg',
      orbitElements: [
        {
          icon: <OrbitIcon type="atom" color="text-retro-teal" />,
          color: 'bg-white rounded-full shadow-retro-pop',
          distance: 70,
          duration: 20,
        },
        {
          icon: <OrbitIcon type="satellite" color="text-retro-aqua" />,
          color: 'bg-white rounded-full shadow-retro-pop',
          distance: 90,
          duration: 30,
          delay: 1,
        },
      ],
    },
    {
      name: 'Luna Stardust',
      title: 'Design Astronaut',
      bio: 'Luna crafts visuals that transport users to new dimensions, blending mid-century aesthetics with intuitive, forward-thinking user experiences.',
      photoUrl: '/images/team/luna.jpg',
      orbitElements: [
        {
          icon: <OrbitIcon type="planet" color="text-retro-mustard" />,
          color: 'bg-white rounded-full shadow-retro-pop',
          distance: 70,
          duration: 18,
        },
        {
          icon: <OrbitIcon type="star" color="text-retro-orange" />,
          color: 'bg-white rounded-full shadow-retro-pop',
          distance: 90,
          duration: 28,
          delay: 3,
        },
      ],
    },
  ];

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Head>
        <title>About Starbright Lab - Our Cosmic Journey</title>
        <meta
          name="description"
          content="Discover the team of stargazers and problem-solvers behind Starbright Lab, orbiting around a shared mission of vintage vision and cosmic curiosity."
        />
      </Head>

      <PageContainer fullWidth transparentHeader>
        {/* HERO SECTION */}
        <Section
          variant="dark"
          spacing="wide"
          className="relative overflow-hidden"
        >
          {/* Parallax star background */}
          <ParallaxBackground starCount={75} parallaxFactor={0.5} />

          {/* Animated comets */}
          <CometTrail size="lg" position="top-right" />
          <CometTrail size="md" position="bottom-left" delay={2000} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Heading
              level={1}
              script
              className="mb-4 text-retro-aqua drop-shadow-lg"
            >
              Our Cosmic Journey
            </Heading>

            <Text size="lg" className="mt-6 mb-8 max-w-xl mx-auto font-light">
              We&apos;re a team of stargazers and problem-solvers, orbiting
              around a shared mission of crafting digital experiences that
              inspire wonder and optimism, just like the futurists of the atomic
              age.
            </Text>

            <div className="mt-12">
              <OrbitAnimation
                centerElement={
                  <div className="w-full h-full rounded-full bg-radial-burst shadow-retro-pop flex items-center justify-center">
                    <StarBurst size="md" color="text-white" animate />
                  </div>
                }
                elements={[
                  {
                    id: 1,
                    element: (
                      <div className="w-full h-full rounded-full bg-retro-aqua shadow-retro-pop flex items-center justify-center">
                        <OrbitIcon type="rocket" color="text-white" size="md" />
                      </div>
                    ),
                    distance: 120,
                    speed: 0.8,
                    size: 40,
                    initialAngle: 0,
                  },
                  {
                    id: 2,
                    element: (
                      <div className="w-full h-full rounded-full bg-retro-coral shadow-retro-pop flex items-center justify-center">
                        <OrbitIcon type="planet" color="text-white" size="md" />
                      </div>
                    ),
                    distance: 180,
                    speed: 0.5,
                    size: 50,
                    initialAngle: 120,
                    clockwise: false,
                  },
                  {
                    id: 3,
                    element: (
                      <div className="w-full h-full rounded-full bg-retro-gold shadow-retro-pop flex items-center justify-center">
                        <OrbitIcon type="star" color="text-white" size="sm" />
                      </div>
                    ),
                    distance: 220,
                    speed: 1.2,
                    size: 30,
                    initialAngle: 240,
                  },
                ]}
                className="mx-auto"
              />
            </div>
          </div>
        </Section>

        {/* Space to Sky Transition */}
        <SectionDivider
          variant="wave"
          color="text-retro-aqua"
          className="space-to-sky-transition"
        />

        {/* MISSION SECTION */}
        <Section id="mission" spacing="normal" className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <StarBurst size="sm" color="text-retro-teal" className="mb-3" />
              <Heading level={2} className="mb-4">
                Our Cosmic Mission
              </Heading>
              <Text className="mb-6">
                At Starbright Lab, we engineer digital experiences that capture
                the optimism and wonder of the 1950s vision of tomorrow. We
                believe the future doesn&apos;t have to be dystopian—it can be
                filled with elegance, delight, and human-centered design.
              </Text>
              <Text className="mb-6">
                Just like the atomic age visionaries who imagined flying cars
                and space colonies, we approach each project with unbridled
                imagination tempered by practical innovation. Our mission is to
                make the digital world more humane, more beautiful, and more
                optimistic.
              </Text>
              <Text className="mb-8">
                We&apos;re not just building websites and apps—we&apos;re
                crafting portals to a future where technology enhances human
                potential and brings joy through thoughtful, intuitive design.
              </Text>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square bg-retro-cream rounded-xl overflow-hidden flex items-center justify-center relative shadow-retro-pop border-4 border-retro-aqua">
                <div className="w-full h-full p-6 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <StarBurst size="lg" color="text-retro-teal" animate />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <Heading
                        level={3}
                        script
                        color="text-retro-teal"
                        className="mb-4"
                      >
                        Our Values
                      </Heading>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center">
                          <StarBurst
                            size="sm"
                            color="text-retro-orange"
                            className="mb-2"
                          />
                          <Text weight="semibold" size="sm">
                            Optimism
                          </Text>
                        </div>
                        <div className="flex flex-col items-center">
                          <StarBurst
                            size="sm"
                            color="text-retro-mustard"
                            className="mb-2"
                          />
                          <Text weight="semibold" size="sm">
                            Innovation
                          </Text>
                        </div>
                        <div className="flex flex-col items-center">
                          <StarBurst
                            size="sm"
                            color="text-retro-coral"
                            className="mb-2"
                          />
                          <Text weight="semibold" size="sm">
                            Elegance
                          </Text>
                        </div>
                        <div className="flex flex-col items-center">
                          <StarBurst
                            size="sm"
                            color="text-retro-teal"
                            className="mb-2"
                          />
                          <Text weight="semibold" size="sm">
                            Humanity
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-retro-orange rounded-xl p-4 shadow-retro-pop -rotate-tilt">
                <Text size="sm" weight="semibold" color="text-white">
                  Since 2025
                </Text>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* DIVIDER */}
        <SectionDivider variant="orbital" color="text-retro-mustard" />

        {/* TIMELINE SECTION */}
        <Section
          id="history"
          variant="highlight"
          spacing="wide"
          className="max-w-6xl mx-auto relative"
        >
          <div className="text-center mb-12">
            <StarBurst
              size="sm"
              color="text-white"
              className="inline-block mb-3"
            />
            <Heading level={2} className="mb-4 text-white">
              Our Trajectory Through Time
            </Heading>
            <Text size="lg" className="max-w-2xl mx-auto text-white opacity-90">
              Charting our course from launch to orbit as we navigate the cosmos
              of design and technology.
            </Text>
          </div>

          <Timeline events={timelineEvents} className="mt-16" />
        </Section>

        {/* DIVIDER */}
        <SectionDivider variant="atomic" color="text-retro-teal" />

        {/* TEAM SECTION */}
        <Section id="team" spacing="wide" className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <StarBurst
              size="sm"
              color="text-retro-teal"
              className="inline-block mb-3"
            />
            <Heading level={2} className="mb-4">
              Meet The Crew
            </Heading>
            <Text size="lg" className="max-w-2xl mx-auto">
              The visionaries, engineers, and designers who make our mission
              possible, each bringing their unique perspective to our cosmic
              endeavors.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                bio={member.bio}
                photoUrl={member.photoUrl}
                orbitElements={member.orbitElements}
              />
            ))}
          </div>
        </Section>

        {/* DIVIDER */}
        <SectionDivider variant="wave" color="text-retro-coral" flip />

        {/* CTA SECTION */}
        <Section
          variant="dark"
          spacing="normal"
          className="max-w-6xl mx-auto text-center"
        >
          <Heading level={2} script color="text-retro-coral" className="mb-6">
            Ready to Join Our Orbit?
          </Heading>
          <Text size="lg" className="mb-8 max-w-2xl mx-auto">
            Let&apos;s chart a course to your project&apos;s success. Our
            mission control is standing by to hear about your vision for the
            future.
          </Text>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
              Launch Communication
            </Button>
            <Button variant="secondary" size="lg">
              View Our Projects
            </Button>
          </div>
        </Section>
      </PageContainer>
    </>
  );
}
