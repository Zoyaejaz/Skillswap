import React from 'react';
import { UserPlus, Search, MessageSquare, Repeat, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <UserPlus className="text-indigo-600" size={32} />,
      title: "Create Your Identity",
      description: "List the skills you've mastered (like React or Java) and the ones you're dying to learn.",
      color: "bg-indigo-50"
    },
    {
      icon: <Search className="text-emerald-600" size={32} />,
      title: "Discover Matches",
      description: "Our algorithm finds people who want exactly what you teach and have exactly what you need.",
      color: "bg-emerald-50"
    },
    {
      icon: <MessageSquare className="text-orange-600" size={32} />,
      title: "Chat & Connect",
      description: "Like a dating app, start a conversation to discuss your goals and schedule a swap session.",
      color: "bg-orange-50"
    },
    {
      icon: <Repeat className="text-blue-600" size={32} />,
      title: "Swap & Level Up",
      description: "Meet up (online or in-person) and exchange knowledge. No money, just pure skill growth.",
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 bg-slate-50 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <Zap size={400} className="text-indigo-600 rotate-12" />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Knowledge is the <span className="text-indigo-600">New Currency.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-10">
            SkillSwap is a community-driven platform where you trade your expertise for someone else's. No tuition, no fees—just peer-to-peer learning.
          </p>
          <button 
            onClick={() => navigate('/signup')}
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
          >
            Join the Community <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group p-8 rounded-[2.5rem] border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Matching Explainer */}
      <section className="py-20 px-6 bg-indigo-600 text-white rounded-[3rem] mx-4 md:mx-10 mb-20 overflow-hidden relative">
         <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                The "Perfect Match" <br/> Algorithm.
              </h2>
              <ul className="space-y-4">
                {[
                  "Automated matching based on teaching/learning tags.",
                  "Location-based filtering for local meetups.",
                  "Trust-based ratings from previous swap partners."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-indigo-100">
                    <Zap size={18} className="text-yellow-400 fill-current" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Card Representation */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 scale-105 shadow-2xl">
               <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest opacity-60">Mutual Match Found</span>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">Your React.js</span>
                    <ArrowRight size={16} className="text-indigo-300" />
                    <span className="font-bold text-sm text-indigo-200">Their Python</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-400 w-[95%]" />
                  </div>
                  <p className="text-center text-xs font-bold text-indigo-200">95% Compatibility Score</p>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24 text-center px-6">
        <h2 className="text-3xl font-black text-slate-800 mb-8">Ready to Swap?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <button 
             onClick={() => navigate('/matches')}
             className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-indigo-600 transition-colors"
           >
             Browse Matches
           </button>
           <button 
             onClick={() => navigate('/contact')}
             className="px-10 py-4 border-2 border-slate-200 text-slate-600 rounded-2xl font-black hover:bg-slate-50 transition-colors"
           >
             Contact Support
           </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HowItWorks;