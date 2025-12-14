import React from 'react';
import { STEWARDSHIP_TEXT } from '../constants';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-16 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6 text-stone-400">
          <Leaf size={24} strokeWidth={1} />
        </div>
        <p className="font-serif text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {STEWARDSHIP_TEXT}
        </p>
        <div className="flex justify-center space-x-6 text-sm text-stone-500">
          <span>© {new Date().getFullYear()} Clean Incense</span>
          <span className="text-stone-300">•</span>
          <a href="#" className="hover:text-stone-800 transition-colors">Privacy</a>
          <span className="text-stone-300">•</span>
          <a href="#" className="hover:text-stone-800 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
