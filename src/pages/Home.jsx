import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Users, BookOpen, Award, 
  Search, CheckCircle, Globe, Zap, MessageSquare, Star, Github, Twitter, Linkedin, Youtube
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CountUp = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  // Extract number and suffix (e.g., "50K+" -> number: 50, suffix: "K+")
  const number = parseInt(endValue.replace(/\D/g, ''));
  const suffix = endValue.replace(/[0-9]/g, '');

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * number));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [number, duration]);

  return <span>{count}{suffix}</span>;
};

export default function SkillSwapHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSwapClick = () => {
    if (isLoggedIn) {
      navigate('/browse');
    } else {
      navigate('/signin');
    }
  };

  const stats = [
    { label: 'Active Swappers', value: '50K+', icon: <Users className="text-blue-600" /> },
    { label: 'Skills Available', value: '1.2K+', icon: <BookOpen className="text-blue-600" /> },
    { label: 'Success Stories', value: '15K+', icon: <Award className="text-blue-600" /> },
  ];

  const skills = [
    { name: 'Web Development', learners: '12.5k', tag: 'Tech' },
    { name: 'UI/UX Design', learners: '8.3k', tag: 'Design' },
    { name: 'Public Speaking', learners: '6.7k', tag: 'Soft Skills' },
    { name: 'Digital Marketing', learners: '9.2k', tag: 'Business' },
    { name: 'Data Science', learners: '5.4k', tag: 'Data' },
    { name: 'Spanish Language', learners: '15.8k', tag: 'Languages' },
  ];

  const testimonials = [
    { name: "Sarah J.", role: "Developer", content: "I taught React and learned Professional Photography in exchange. Amazing!", rating: 5 },
    { name: "Marc K.", role: "Marketer", content: "The best way to network and grow your skill set without expensive bootcamps.", rating: 5 }
  ];

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 overflow-x-hidden">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Globe size={16} /> Community of 50,000+ Learners
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Learn Anything <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Pay with Skills
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                The world's largest skill-sharing economy. Exchange your knowledge for lessons in tech, art, business, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
            <button 
            onClick={handleSwapClick}
            className="group bg-slate-900 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            Start Your First Swap 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
                <div className="flex items-center">
  <div className="flex -space-x-3 overflow-hidden">
    {/* Local images array - extensions check kar lena (.png, .jpg, etc.) */}
    {['i1.jpg', 'i2.png', 'i4.jpg', 'i5.png'].map((imgName, i) => (
      <img
        key={i}
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover bg-slate-100"
        src={`/${imgName}`} // Agar images 'public' folder mein hain
        alt={`User ${i + 1}`}
      />
    ))}
  </div>
  <p className="pl-6 text-sm font-semibold text-slate-600 tracking-tight">
    Join <span className="text-blue-600">12k+</span> today
  </p>
</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-xl">Top Trending Skills</h3>
                  <button onClick={() => navigate('/browse')} className="text-blue-600 font-bold text-sm hover:text-blue-700 hover:underline transition">View all</button>
                </div>
                <div className="space-y-4">
                  {['React.js', 'UI Design', 'Italian'].map((skill, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <CheckCircle className="text-green-500" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold">{skill}</p>
                        <p className="text-xs text-slate-500">2.4k Swappers</p>
                      </div>
                      <button className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-lg">Join</button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white py-16 border-y border-slate-100">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
    {stats.map((stat, i) => (
      <motion.div 
        key={i} 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="flex justify-center mb-4 text-blue-600 scale-125">
          {stat.icon}
        </div>
        <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
          {/* Animated Counter here */}
          <CountUp endValue={stat.value} />
        </h4>
        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
</div>

      {/* Popular Skills Grid */}
      <section className="py-12 md:py-24 max-w-7xl mx-auto px-6 overflow-hidden md:overflow-visible">
  {/* Header Section */}
  <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-8">
    <div className="max-w-xl text-center lg:text-left">
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
        Trending Skills
      </h2>
      <p className="text-slate-500 text-sm md:text-lg leading-relaxed">
        The most in-demand expertise being swapped right now. Join a session today.
      </p>
    </div>

    {/* Filter Buttons - Mobile pe scroll, Desktop pe static */}
    <div className="flex overflow-x-auto pb-4 lg:pb-0 gap-3 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
      {['All', 'Design', 'Development', 'Business', 'Marketing'].map((cat) => (
        <button 
          key={cat} 
          className="flex-shrink-0 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold border border-slate-200 bg-white hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
        >
          {cat}
        </button>
      ))}
    </div>
  </div>

  {/* GRID LOGIC: 
      Mobile: 'flex overflow-x-auto' for horizontal scroll
      Desktop: 'md:grid md:grid-cols-2 lg:grid-cols-3' for static grid
  */}
  <motion.div 
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="flex md:grid overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 -mx-6 px-6 md:mx-0 md:px-0"
  >
    {skills.map((skill, index) => (
      <motion.div 
        key={index} 
        variants={fadeInUp}
        whileHover={{ y: -5 }}
        className="snap-center flex-shrink-0 w-[calc(100vw-60px)] sm:w-[300px] md:w-full group bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-600/10 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[180px]"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[4rem] -z-0 translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
              {skill.tag}
            </span>
            <div className="bg-slate-50 p-2 rounded-full text-slate-400 group-hover:text-blue-600 transition-colors">
              <ArrowRight onClick={() => navigate('/browse')} size={18} />
            </div>
          </div>
          
          <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
            {skill.name}
          </h4>
        </div>

        <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-slate-50 mt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
            <Users size={14} className="text-blue-600" />
            <span>{skill.learners} Active Swappers</span>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* Mobile View All Button */}
  <div className="mt-12 text-center lg:hidden">
    <button className="text-blue-600 font-bold flex items-center gap-2 mx-auto">
      Explore all skills <ArrowRight size={18} />
    </button>
  </div>
</section>

      {/* Testimonials */}
     <section className="bg-slate-900 py-12 md:py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center md:text-left">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-4xl font-black text-white mb-2"
    >
      What our swappers say
    </motion.h2>
    <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-semibold">Real growth, real stories.</p>
  </div>

  <div className="relative flex items-center">
    <motion.div 
      /* STRICT MOBILE STOP: 
         - On desktop (>768px): Infinite X-axis translation.
         - On mobile: 'none' or { x: 0 } strictly prevents motion.
      */
      animate={typeof window !== 'undefined' && window.innerWidth > 768 ? { x: ["0%", "-50%"] } : { x: 0 }} 
      transition={{ 
        ease: "linear", 
        duration: 35, 
        repeat: Infinity 
      }}
      /* MOBILE SCROLL BEHAVIOR:
         - md:overflow-visible allows the desktop animation to work.
         - overflow-x-auto allows manual swiping on mobile. 
         - If you want to DISALLOW manual swiping too, change to overflow-x-hidden.
      */
      className="flex gap-4 md:gap-6 px-6 md:px-0 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory"
    >
      {/* On mobile, we only map the list once to prevent a huge hidden scroll area.
          On desktop, we spread it to allow for the infinite loop.
      */}
      {(typeof window !== 'undefined' && window.innerWidth > 768 
        ? [...testimonials, ...testimonials, ...testimonials, ...testimonials] 
        : testimonials
      ).map((t, i) => (
        <div 
          key={i} 
          className="snap-center flex-shrink-0 
                     w-[calc(100vw-48px)] sm:w-[300px] md:w-[350px] 
                     bg-slate-800/30 p-6 rounded-3xl border border-slate-700/50 
                     backdrop-blur-sm transition-all hover:border-blue-500/30 group"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(t.rating)].map((_, starIdx) => (
              <Star key={starIdx} className="fill-blue-500 text-blue-500" size={14} />
            ))}
          </div>
          
          <p className="text-sm md:text-base text-slate-200 mb-6 leading-relaxed h-[100px] md:h-auto overflow-hidden">
            "{t.content}"
          </p>
          
          <div className="flex items-center gap-3 border-t border-slate-700/30 pt-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
              {t.name[0]}
            </div>
            <div>
              <p className="text-white font-bold text-sm">{t.name}</p>
              <p className="text-blue-400 text-[10px] md:text-xs font-medium uppercase tracking-tighter">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>

    {/* Gradient Fades for Desktop */}
    <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10" />
    <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 via-slate-900/60 to-transparent z-10" />
  </div>
</section>

      {/* Final CTA */}
      <section className="py-12 px-4"> {/* Reduced section padding from py-24 */}
  <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
    {/* Decorative Background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="grid grid-cols-8 gap-4 rotate-12 scale-125">
        {[...Array(24)].map((_, i) => (
          <Zap key={i} size={20} className="text-white fill-current" />
        ))}
      </div>
    </div>

    {/* Compact Content */}
    <div className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
        Need Help? Get in Touch.
      </h2>
      <p className="text-blue-100 mb-8 text-base max-w-xl mx-auto opacity-90">
        Have questions about your swaps or a feature idea? Our team is here to help you level up.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button 
          onClick={() => window.location.href = 'mailto:support@skillswap.com'} 
          className="bg-white text-blue-700 px-8 py-3.5 rounded-xl text-lg font-bold shadow-lg hover:bg-slate-50 transition-all"
        >
          Email Us
        </button>
        <button 
          onClick={() => navigate('/chat-support')} 
          className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl text-lg font-bold backdrop-blur-sm hover:bg-white/20 transition-all"
        >
          Live Chat
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}