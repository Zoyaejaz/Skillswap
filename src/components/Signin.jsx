import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { motion } from 'framer-motion';
// Added Chrome (for Google) or you can keep Github
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, Github } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for MERN stack authentication will go here
    console.log("Logging in with:", formData);
    navigate('/browse'); 
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">

      <main className="flex-grow flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-200">
              <Zap className="text-white" size={32} fill="currentColor" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Continue your skill-sharing journey</p>
          </div>

          {/* Social Login - Fixed: Changed undefined 'Google' to 'Github' */}
          {/* Social Login - Google */}
<button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-4 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all mb-8 shadow-sm">
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
      fill="#4285F4" 
    />
    <path 
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
      fill="#34A853" 
    />
    <path 
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" 
      fill="#FBBC05" 
    />
    <path 
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" 
      fill="#EA4335" 
    />
  </svg>
  Sign in with Google
</button>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <span className="relative px-4 bg-white text-slate-400 text-xs font-bold uppercase tracking-widest">
              or use email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="email"
                className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  id="email"
                  type="email" 
                  required
                  value={formData.email}
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label 
                  htmlFor="password"
                  className="block text-xs font-black uppercase tracking-widest text-slate-400"
                >
                  Password
                </label>
                {/* Fixed: Removed 'size' prop from Link */}
                <Link to="/forgot" className="text-xs font-bold text-blue-600 hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-12 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 shadow-xl shadow-slate-200 hover:shadow-blue-100 transition-all flex items-center justify-center gap-3 group"
            >
              Sign In <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center mt-10 text-slate-500 font-medium text-sm">
            New to SkillSwap? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Create an account</Link>
          </p>
        </motion.div>
      </main>
      
      
    </div>
  );
}