'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-blue-950 backdrop-blur-sm border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img src="/rinspack.png" alt="Rinspark Hub" className="h-14 w-auto" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/solutions" className="text-slate-200 hover:text-white transition font-medium">
              Solutions
            </Link>
            <Link href="/academy" className="text-slate-200 hover:text-indigo-300 transition font-medium">
              Academy
            </Link>
            <Link href="/success-stories" className="text-slate-200 hover:text-white transition font-medium">
              Success Stories
            </Link>
            <Link href="/contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg transition font-medium">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800">
          <div className="px-4 py-4 space-y-3">
            <Link href="/solutions" className="block text-slate-200 hover:text-white font-medium" onClick={() => setMobileMenuOpen(false)}>
              Solutions
            </Link>
            <Link href="/academy" className="block text-slate-200 hover:text-indigo-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Academy
            </Link>
            <Link href="/success-stories" className="block text-slate-200 hover:text-white font-medium" onClick={() => setMobileMenuOpen(false)}>
              Success Stories
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
