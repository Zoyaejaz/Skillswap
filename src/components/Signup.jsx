import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, User, ArrowRight, Github, BookOpen, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account created for:", formData);
    navigate('/browse');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-slate-900 mb-2">Join SkillSwap</h1>
            <p className="text-slate-500 font-medium">Start exchanging knowledge today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input 
                    type="text" required placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input 
                    type="email" required placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="password" required placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 shadow-xl transition-all flex items-center justify-center gap-3 group"
              >
                Create Account <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <p className="text-center mt-10 text-slate-500 font-medium text-sm">
            Already a swapper? <Link to="/signin" className="text-blue-600 font-bold hover:underline">Sign in instead</Link>
          </p>
        </motion.div>
      </main>

    </div>
  );
}