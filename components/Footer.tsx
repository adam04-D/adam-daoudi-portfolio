import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-btn-bg text-btn-text py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif font-medium tracking-tight">
          AD
        </div>
        
        <div className="flex space-x-8 text-sm opacity-80">
          <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-100 transition-opacity">GitHub</a>
          <a href="mailto:adamdaoudi04@gmail.com" className="hover:opacity-100 transition-opacity">Email</a>
        </div>
        
        <div className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} Adam Daoudi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
