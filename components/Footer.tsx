import React from 'react';
import { BRAND_NAME, SOCIAL_LINKS, EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-btn-bg text-btn-text py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif font-medium tracking-tight">
          AD
        </div>
        
        <div className="flex space-x-8 text-sm opacity-80">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
          <a href={SOCIAL_LINKS.sardia} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Literature</a>
          <a href={`mailto:${EMAIL}`} className="hover:opacity-100 transition-opacity">Email</a>
        </div>
        
        <div className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
