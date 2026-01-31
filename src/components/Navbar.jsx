import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';


const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Browse Skills', path: '/browse' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <Zap className="text-white" size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">SkillSwap</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-200"></div>
            <button 
              onClick={() => navigate('/signin')} 
              className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/signup')} 
              className="bg-blue-600 text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
              {[...navLinks, { name: 'Sign In', path: '/signin' }].map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => { navigate(item.link); setMobileMenuOpen(false); }}
                  className="w-full text-left block px-3 py-4 text-base font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }} 
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
    </nav>
  );
};

export default Navbar;