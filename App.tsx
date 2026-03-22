/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';
import { PROJECTS, PROFESSIONAL_EXPERIENCES, EXTRACURRICULAR_ACTIVITIES } from './constants';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);

  // Asset Preloading for "Instant" Feel
  useEffect(() => {
    const assetsToPreload = [
      ...PROJECTS.map(p => p.image || p.video),
      ...PROFESSIONAL_EXPERIENCES.map(e => e.image),
      ...EXTRACURRICULAR_ACTIVITIES.map(e => e.image),
      '/adam.webp'
    ].filter(Boolean);

    assetsToPreload.forEach((src) => {
      if (src?.endsWith('.mp4')) {
        const video = document.createElement('link');
        video.rel = 'preload';
        video.as = 'video';
        video.href = src;
        document.head.appendChild(video);
      } else if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Cmd+K or Ctrl+K Listener for Spotlight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSpotlightOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isSpotlightOpen) {
        setIsSpotlightOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSpotlightOpen]);

  // Lock body scroll when Spotlight is open
  useEffect(() => {
    if (isSpotlightOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSpotlightOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId || targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 60; // Adjusted offset for a cleaner landing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch {
        // Ignore
      }
    }
  };

  return (
    <div className="min-h-screen bg-primary font-sans text-text-main selection:bg-secondary selection:text-text-main transition-colors duration-300">
      <Navbar onNavClick={handleNavClick} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main Content with Depth-of-Field Blur when Spotlight is open */}
      <motion.main 
        animate={{ 
          scale: isSpotlightOpen ? 0.97 : 1, 
          filter: isSpotlightOpen ? 'blur(4px)' : 'blur(0px)',
          opacity: isSpotlightOpen ? 0.6 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="origin-top flex flex-col gap-32 md:gap-48"
      >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </motion.main>
      
      <Footer />
      
      {/* macOS Components */}
      <Spotlight isOpen={isSpotlightOpen} onClose={() => setIsSpotlightOpen(false)} onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
