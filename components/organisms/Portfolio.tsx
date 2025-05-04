import React from 'react';
import { motion } from 'framer-motion';
import RetroCard from '../atoms/RetroCard';
import RetroButton from '../atoms/RetroButton';
import CurveDivider from '../atoms/CurveDivider';
import Image from 'next/image';

// Define project types
// "All" category removed since we display all projects by default
type ProjectCategory = 'Web Development' | 'Mobile App' | 'UI/UX Design' | 'Digital Transformation';
type TiltType = 'left' | 'right' | 'none';

interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  color: 'aqua' | 'mustard' | 'coral' | 'teal';
  link?: string;
  featured?: boolean;
}

const Portfolio: React.FC = () => {
  // Project data
  const projects: Project[] = [
    {
      id: 'encorelando',
      title: 'encorelando',
      description: 'A mobile-first application enhancing theme park experiences in Orlando by providing comprehensive information about concerts, performances, and festivals.',
      category: 'Mobile App',
      image: '/images/portfolio/encorelando.png',
      color: 'coral',
      link: 'https://encorelando.com',
      featured: true,
    },
    {
      id: 'lake-wilson',
      title: 'Lake Wilson Preserve',
      description: 'A complete digital transformation for an HOA, balancing residential comfort with environmental stewardship through intuitive design and functionality.',
      category: 'Digital Transformation',
      image: '/images/portfolio/lwp.png',
      color: 'aqua',
      link: 'https://lakewilsonpreserve.com',
      featured: true,
    },
//    {
//      id: 'atomic-cafe',
//      title: 'Atomic Café',
//      description: 'A brand identity and website for a 1950s-inspired coffee shop, featuring custom illustrations and a distinctive retro-futurist design system.',
//      category: 'UI/UX Design',
//      image: '/images/portfolio/atomic-cafe.jpg',
//      color: 'teal',
//      featured: false,
//    },
//    {
//      id: 'orbit-dashboard',
//      title: 'Orbit Dashboard',
//      description: 'A data visualization interface for monitoring system analytics, inspired by mission control screens with intuitive retro-futuristic controls.',
//      category: 'Web Development',
//      image: '/images/portfolio/orbit-dashboard.jpg',
//      color: 'coral',
//      featured: false,
//   },
  ];

  // Function to determine tilt based on project ID
  const getTilt = (id: string): TiltType => {
    const charCode = id.charCodeAt(0);
    return charCode % 2 === 0 ? 'left' : 'right';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      <section id="portfolio" className="py-20 relative overflow-hidden bg-teal">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-aqua opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-coral opacity-10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-retroScript text-4xl text-cream mb-6">Our Stellar Projects</h2>
            <p className="max-w-2xl mx-auto text-lg text-cream">
              Explore our universe of work, where retro-futurist aesthetics meet modern functionality
              in projects that push boundaries and deliver exceptional experiences.
            </p>
          </motion.div>
          
          {/* Featured projects (larger) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="h-full"
              >
                <RetroCard color={project.color} tilt="none" className="h-full overflow-hidden">
                  <div className="relative h-60 mb-4 rounded-lg overflow-hidden bg-charcoal/10">
                    <div className="absolute inset-0 flex items-center justify-center text-charcoal">
                      <div className="w-16 h-16 border-4 border-current rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-coral/20 via-aqua/20 to-mustard/20"></div>
                    
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-retroScript text-2xl text-teal">{project.title}</h3>
                    <p className="text-charcoal">{project.description}</p>
                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 text-xs bg-mustard/20 text-charcoal rounded-full">
                        {project.category}
                      </span>
                    </div>
                    {project.link && (
                      <div className="pt-2">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <RetroButton
                            variant="primary"
                            size="sm"
                            label="View Project"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </RetroCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.filter(p => !p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="h-full"
              >
                <RetroCard 
                  color={project.color} 
                  tilt={getTilt(project.id)} 
                  className="h-full"
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-charcoal/10">
                    <div className="absolute inset-0 flex items-center justify-center text-charcoal">
                      <div className="w-12 h-12 border-4 border-current rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-coral/20 via-aqua/20 to-mustard/20"></div>
                    {/*
                      In production, replace with real image:
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    */}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-retroScript text-xl text-teal">{project.title}</h3>
                    <p className="text-charcoal text-sm">{project.description}</p>
                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 text-xs bg-mustard/20 text-charcoal rounded-full">
                        {project.category}
                      </span>
                    </div>
                    {project.link && (
                      <div className="pt-2">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <RetroButton
                            variant="primary"
                            size="sm"
                            label="View Project"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </RetroCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Curved divider to contact section */}
      <CurveDivider fromColor="#007C88" toColor="#FFF7E6" height="lg" inverted/>
    </>
  );
};

export default Portfolio;
