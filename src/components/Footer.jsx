import React from 'react';
import { Zap, Twitter, Github, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Zap className="text-white fill-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">SkillSwap</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The world's first decentralized skill-sharing economy. Connect, teach, and master new crafts without traditional barriers.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                { icon: <Github size={18} />, href: "#", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-slate-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/browse" className="hover:text-blue-400 transition">Browse Skills</a></li>
              <li><a href="/how-it-works" className="hover:text-blue-400 transition">How it Works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Pricing (Free)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">SkillSwap Pro</a></li>
            </ul>
          </div>

          {/* Navigation - Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition">Community Hub</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">API Docs</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-sm text-slate-400">Get the latest skill matches and news delivered to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-blue-500 transition"
              />
              <button className="absolute right-2 top-1.5 bg-blue-600 p-1.5 rounded-lg hover:bg-blue-500 transition">
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} SkillSwap. Developed with ❤️ for lifelong learners.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-tighter text-slate-500">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/cookie" className="hover:text-white transition">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;