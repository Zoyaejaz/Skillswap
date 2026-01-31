import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Send, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-6 py-20 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl p-10 md:p-12 text-center"
        >
          {!submitted ? (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-8">
                <Zap size={32} fill="currentColor" />
              </div>
              <h1 className="text-3xl font-black text-slate-900 mb-4">Forgot Password?</h1>
              <p className="text-slate-500 font-medium mb-8">
                Enter your email and we'll send you a link to reset your password.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input 
                    type="email" required placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
                >
                  Send Reset Link <Send size={18} />
                </button>
              </form>
            </>
          ) : (
            <div className="py-8">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Check your email</h2>
              <p className="text-slate-500 font-medium mb-8">
                We've sent a password reset link to your email address.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-blue-600 font-bold hover:underline"
              >
                Didn't receive it? Try again
              </button>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-slate-50">
            <Link to="/signin" className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-slate-900 transition-colors">
              <ArrowLeft size={18} /> Back to Sign In
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}