import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS, SITE_TITLE } from '../constants';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F5F3]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-serif text-xl tracking-tight text-stone-800 hover:text-stone-600 transition-colors">
          {SITE_TITLE}
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-stone-900 border-b border-stone-800 pb-0.5' : 'text-stone-500 hover:text-stone-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-stone-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#F7F5F3] border-b border-stone-200 px-6 py-4 space-y-4 shadow-lg absolute w-full">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium ${
                  isActive ? 'text-stone-900' : 'text-stone-500'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
