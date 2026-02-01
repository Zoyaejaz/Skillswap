import React from 'react';
import { Shield, Eye, Lock, Database, Trash2, ArrowRight } from 'lucide-react';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 antialiased">
      {/* --- Simple Navigation --- */}
      <nav className="border-b border-slate-100 py-4 px-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900 tracking-tight">SkillSwap </span>
        </div>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">v2.0 Update</span>
      </nav>

      {/* --- Header --- */}
      <header className="py-12 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-slate-900 mb-3">Privacy <span className="text-blue-600">Protocol</span></h1>
          <p className="text-slate-500 leading-relaxed max-w-2xl">
            We prioritize your data sovereignty. This protocol explains how we handle your digital footprint within our decentralized skill economy.
          </p>
        </div>
      </header>

      {/* --- Content Grid --- */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600">
              <Eye size={20} />
              <h2 className="font-bold uppercase text-xs tracking-[0.2em]">Visibility</h2>
            </div>
            <h3 className="text-lg font-bold text-slate-900">What we see</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We collect your email, username, and public skill tags. We do not track private communications or off-platform browsing history.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600">
              <Database size={20} />
              <h2 className="font-bold uppercase text-xs tracking-[0.2em]">Storage</h2>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Decentralized Records</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your skill endorsements are stored on-chain for transparency, while personal identifiers are encrypted in secure, isolated silos.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600">
              <Lock size={20} />
              <h2 className="font-bold uppercase text-xs tracking-[0.2em]">Security</h2>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Encryption Standards</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We use AES-256 bit encryption for all user data. SkillSwap employees cannot access your private keys or personal wallet passwords.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600">
              <Trash2 size={20} />
              <h2 className="font-bold uppercase text-xs tracking-[0.2em]">Ownership</h2>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Right to Erasure</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You own your data. At any time, you can trigger a "Full Wipe" which removes all off-chain personal data from our systems permanently.
            </p>
          </div>

        </div>

        {/* --- Highlight Card --- */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-100">
          <div>
            <h4 className="font-bold text-lg mb-1">Have a privacy concern?</h4>
            <p className="text-slate-400 text-sm">Our dedicated security team responds within 24 hours.</p>
          </div>
          <a href="mailto:security@skillswap.io" className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap">
            Contact Support <ArrowRight size={16} />
          </a>
        </div>

        {/* --- Mini Footer --- */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>&copy; 2026 SkillSwap</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">Compliance</a>
            <a href="#" className="hover:text-blue-600">Legal</a>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;