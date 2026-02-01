import React, { useState } from 'react';
import { 
  Send, Mail, MessageSquare, Phone, 
  ChevronDown, HelpCircle, LifeBuoy, Zap, 
  ArrowRight, Globe
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactSupport = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "How do I ensure a safe skill swap?",
      a: "Always meet in public places like libraries or cafes. Check the partner's rating and linked social profiles before meeting."
    },
    {
      q: "Is SkillSwap really free?",
      a: "Yes! The core philosophy is peer-to-peer exchange. You 'pay' with your time and knowledge, not money."
    },
    {
      q: "What if my match doesn't show up?",
      a: "You can report a no-show through the 'Messages' tab. This affects their reliability rating to keep the community trustworthy."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 ">
         <Navbar/>
      <div className="max-w-6xl mx-auto pt-10 pb-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-black mb-6 uppercase tracking-widest">
            <LifeBuoy size={18} /> Support Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            We're here to help <br className="hidden md:block" /> you <span className="text-indigo-600">level up.</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            Stuck on a match? Having technical trouble? Our team of developers (mostly from VIT Bhopal!) is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Quick Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase">Email Us</p>
                    <p className="font-bold text-slate-700">support@skillswap.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase">Bhopal Office</p>
                    <p className="font-bold text-slate-700">Lalghati, Bhopal, MP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours Card */}
            <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
               <Zap size={120} className="absolute -bottom-4 -right-4 opacity-10 rotate-12" />
               <h4 className="font-black text-lg mb-2">Live Chat Hours</h4>
               <p className="text-indigo-100 text-sm font-medium mb-4">Our team is active during these times for instant support:</p>
               <p className="text-2xl font-black italic">10:00 AM - 10:00 PM</p>
               <p className="text-xs font-bold text-indigo-300 mt-1 uppercase tracking-widest">IST (Monday - Saturday)</p>
            </div>
          </div>

          {/* Right Column: The "Chat-Style" Support Form */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Direct Message Form */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-2">
                <MessageSquare className="text-indigo-600" /> Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-1">Full Name</label>
                    <input type="text" placeholder="Aman Gupta" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-1">Email Address</label>
                    <input type="email" placeholder="aman@vitbhopal.ac.in" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase ml-1">What's the issue?</label>
                  <select className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>Account & Profile</option>
                    <option>Matching Problems</option>
                    <option>Safety Concern</option>
                    <option>Feature Request</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase ml-1">Describe your problem</label>
                  <textarea rows="4" placeholder="How can we help you swap better today?" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-indigo-100 hover:scale-[1.02] active:scale-95 transition-all">
                  <Send size={20} /> Submit Ticket
                </button>
              </form>
            </div>

            {/* FAQ Accordion Section */}
            <div className="px-4">
              <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-2">
                <HelpCircle className="text-indigo-600" /> Quick Answers
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full p-6 text-left flex justify-between items-center group"
                    >
                      <span className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">{faq.q}</span>
                      <ChevronDown size={20} className={`text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {activeFaq === i && (
                      <div className="px-6 pb-6 text-slate-500 text-sm font-medium animate-in slide-in-from-top-2 duration-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactSupport;