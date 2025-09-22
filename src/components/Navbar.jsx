import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Projects', path: '/projects' },
  { label: 'Publications', path: '/publications' },
  { label: 'Awards', path: '/awards' },
  { label: 'People', path: '/people' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/assets/logo.png" alt="Lab Logo" className="h-10 w-10 object-contain" />
        <span className="text-xl font-bold text-blue-600">KSU Aero Lab</span>
      </div>
        <div className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
