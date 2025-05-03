import React from 'react';
import { navItems, socialLinks } from '../data';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Gagandeep</h2>
            <p className="text-slate-400 mb-4">
              Full Stack Web and App Developer specializing in creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => {
                const IconComponent = React.lazy(() => import('lucide-react').then(module => {
                  const icon = module[link.icon as keyof typeof module];
                  return { default: icon || module.ExternalLink };
                }));
                
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                  >
                    <React.Suspense fallback={<div></div>}>
                      <IconComponent size={20} />
                    </React.Suspense>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center">
            &copy; {currentYear} Gagandeep. All rights reserved. Made with 
            <Heart size={16} className="mx-1 text-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;