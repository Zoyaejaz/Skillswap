import React from 'react';
import { Gavel, Users, ShieldAlert, Globe, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
            <Scale size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Terms of <span className="text-blue-600">Service</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using the SkillSwap decentralized platform.
          </p>
        </div>
      </div>

      {/* Content Cards */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        
        {/* Section 1 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-6">
            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-bold">1</span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Globe size={20} className="text-blue-500" /> Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing SkillSwap, you agree to be bound by these Terms of Service and all applicable laws and regulations. Our platform operates as a decentralized network; by using it, you acknowledge the unique nature of peer-to-peer skill sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-6">
            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-bold">2</span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users size={20} className="text-blue-500" /> User Eligibility & Conduct
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You must be at least 18 years old to create an account. You agree not to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600">
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <ShieldAlert size={16} className="text-red-500" /> No Harassment
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <ShieldAlert size={16} className="text-red-500" /> No Fraudulent Skills
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3 - Highlighted Box */}
        <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-lg shadow-blue-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Gavel size={24} /> Decentralized Governance
          </h2>
          <p className="opacity-90 leading-relaxed">
            SkillSwap uses a community-driven reputation system. Disputes between users are handled through our decentralized arbitration protocol. SkillSwap Inc. does not act as an employer or intermediary in these transactions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;