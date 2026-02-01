import React, { useState } from 'react';
import { Cookie, CheckCircle2, Info } from 'lucide-react';
import Footer from './Footer';

const CookieSettings = () => {
  const [enabled, setEnabled] = useState({ analytics: true, marketing: false });

  const toggle = (key) => setEnabled(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="bg-slate-50 min-h-screen pt-12  ">
      <div className="max-w-2xl mx-auto pb-15">
        <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl">
          
          {/* Top Branding Area */}
          <div className="bg-slate-900 p-10 text-center ">
            <div className="inline-block p-4 bg-blue-500/10 rounded-2xl mb-4">
              <Cookie className="text-blue-400" size={40} />
            </div>
            <h1 className="text-3xl font-bold text-white">Cookie Preferences</h1>
            <p className="text-slate-400 mt-2">Control how we use data to improve your SkillSwap journey.</p>
          </div>

          {/* Interactive Toggle Area */}
          <div className="p-8 space-y-6">
            
            {/* Essential (Static) */}
            <div className="flex items-start justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex gap-4">
                <CheckCircle2 className="text-green-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-slate-900">Strictly Necessary</h3>
                  <p className="text-sm text-slate-500 mt-1">Required for secure login and decentralized wallet connection.</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded uppercase tracking-wider">Required</span>
            </div>

            {/* Analytics (Toggle) */}
            <div className="flex items-start justify-between p-5 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Info size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Analytics & Performance</h3>
                  <p className="text-sm text-slate-500 mt-1">Helps us understand which skill categories are most popular.</p>
                </div>
              </div>
              <button 
                onClick={() => toggle('analytics')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${enabled.analytics ? 'bg-blue-600' : 'bg-slate-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled.analytics ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="pt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
                Save My Preferences
              </button>
              <p className="text-center text-xs text-slate-400 mt-6">
                Changes will take effect after you refresh your browser.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CookieSettings;