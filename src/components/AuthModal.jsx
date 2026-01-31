import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, MapPin } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('login'); // 'login', 'signup', 'forgot'

  if (!isOpen) return null;

  const InputField = ({ icon: Icon, type, placeholder, label }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon size={18} className="text-[#66BB6A]" />
        </div>
        <input
          type={type}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#66BB6A] focus:border-[#66BB6A] text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
        
        {/* Header Gradient */}
        <div className="bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723] p-8 text-center text-white">
          <button onClick={onClose} className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <h2 className="text-3xl font-bold mb-2">
            {view === 'login' && 'Welcome Back'}
            {view === 'signup' && 'Create Account'}
            {view === 'forgot' && 'Reset Password'}
          </h2>
          <p className="text-white/80 text-sm">
            {view === 'login' && 'Please enter your details to login'}
            {view === 'signup' && 'Join the green revolution with us'}
            {view === 'forgot' && 'Enter your email to receive a reset link'}
          </p>
        </div>

        {/* Form Content */}
        <div className="p-8 max-h-[70vh] overflow-y-auto">
          {view === 'login' && (
            <form onSubmit={(e) => e.preventDefault()}>
              <InputField icon={Mail} type="email" label="Email Address" placeholder="alex@example.com" />
              <InputField icon={Lock} type="password" label="Password" placeholder="••••••••" />
              
              <div className="flex justify-end mb-6">
                <button 
                  type="button"
                  onClick={() => setView('forgot')}
                  className="text-sm font-semibold text-[#66BB6A] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button className="w-full py-3 bg-[#66BB6A] hover:bg-[#4CAF50] text-white font-bold rounded-xl transition-all shadow-lg mb-4">
                Login
              </button>
            </form>
          )}

          {view === 'signup' && (
            <form onSubmit={(e) => e.preventDefault()}>
              <InputField icon={User} type="text" label="Full Name" placeholder="John Doe" />
              <InputField icon={Mail} type="email" label="Email Address" placeholder="john@example.com" />
              <InputField icon={Phone} type="tel" label="Phone Number" placeholder="+91 0000000000" />
              <InputField icon={MapPin} type="text" label="Address" placeholder="Your City, Area" />
              <InputField icon={Lock} type="password" label="Password" placeholder="••••••••" />
              <InputField icon={Lock} type="password" label="Confirm Password" placeholder="••••••••" />
              
              <button className="w-full py-3 bg-[#66BB6A] hover:bg-[#4CAF50] text-white font-bold rounded-xl transition-all shadow-lg mb-4">
                Sign Up
              </button>
            </form>
          )}

          {view === 'forgot' && (
            <form onSubmit={(e) => e.preventDefault()}>
              <InputField icon={Mail} type="email" label="Email Address" placeholder="registered-email@example.com" />
              <button className="w-full py-3 bg-[#66BB6A] hover:bg-[#4CAF50] text-white font-bold rounded-xl transition-all shadow-lg mb-4">
                Send Reset Link
              </button>
            </form>
          )}

          {/* Footer Navigation */}
          <div className="text-center text-sm text-gray-600">
            {view === 'login' ? (
              <p>Don't have an account? <button onClick={() => setView('signup')} className="text-[#66BB6A] font-bold hover:underline">Sign Up</button></p>
            ) : (
              <p>Already have an account? <button onClick={() => setView('login')} className="text-[#66BB6A] font-bold hover:underline">Login</button></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;