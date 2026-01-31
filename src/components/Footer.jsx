import React from 'react';
import { useNavigate } from "react-router-dom";
import { Zap, Twitter, Github, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">SkillSwap</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connect, teach, and master new crafts without traditional barriers.
            </p>
            <div className="flex gap-4">
              {[<Twitter size={18}/>, <Github size={18}/>, <Linkedin size={18}/>, <Youtube size={18}/>].map((icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {['Platform', 'Resources'].map((title, idx) => (
            <div key={idx} className="text-left">
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">{title}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={() => navigate('/browse')} className="hover:text-blue-400 transition">Browse Skills</button></li>
                <li><button onClick={() => navigate('/how-it-works')} className="hover:text-blue-400 transition">How it Works</button></li>
                <li><button onClick={() => navigate('/community')} className="hover:text-blue-400 transition">Community Hub</button></li>
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="text-left space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Stay Updated</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-sm outline-none focus:border-blue-500" 
              />
              <button className="absolute right-2 top-1.5 bg-blue-600 p-1.5 rounded-lg">
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div>&copy; 2026 SkillSwap. Developed for lifelong learners.</div>
          <div className="flex gap-6 text-xs font-bold uppercase">
            <button className="hover:text-white transition">Privacy Policy</button>
            <button className="hover:text-white transition">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;