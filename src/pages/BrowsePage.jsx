import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { Search, ArrowRight, Users, Zap, Star, Globe, Filter } from 'lucide-react';
import Footer from '../components/Footer'; // Ensure the path is correct
 import Navbar from '../components/Navbar';

export default function Browse() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tech", "Design", "Business", "Languages"];

  // Mock data for skills
  const allSkills = [
    { id: 1, name: 'Web Development', learners: '12.5k', tag: 'Tech', rating: 4.8, level: 'Intermediate' },
    { id: 2, name: 'UI/UX Design', learners: '8.3k', tag: 'Design', rating: 4.9, level: 'Beginner' },
    { id: 3, name: 'Spanish Language', learners: '15.8k', tag: 'Languages', rating: 4.5, level: 'All Levels' },
    { id: 4, name: 'Digital Marketing', learners: '9.2k', tag: 'Business', rating: 4.6, level: 'Advanced' },
    { id: 5, name: 'Python Basics', learners: '10.1k', tag: 'Tech', rating: 4.8, level: 'Beginner' },
    { id: 6, name: 'Financial Modeling', learners: '3.2k', tag: 'Business', rating: 4.7, level: 'Advanced' },
  ];

  // Filtering Logic
  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || skill.tag === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      {/* 1. Navigation for Browse Page */}
      

      {/* 2. Main Content Wrapper */}
      <main className="flex-grow">
        
        {/* Search Header */}
        <header className="bg-slate-900 pt-20 pb-16 px-6 text-center relative overflow-hidden">
           <div className="max-w-4xl mx-auto relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-8"
            >
              Master New <span className="text-blue-500">Skills.</span>
            </motion.h1>
            
            <div className="max-w-2xl mx-auto relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={22} />
              <input 
                type="text" 
                placeholder="Search for your next passion..."
                className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Filters & Results */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
              {filteredSkills.length} Skills Available
            </p>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map(skill => (
              <motion.div 
                layout
                key={skill.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {skill.tag}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                    <Star size={14} fill="currentColor"/> {skill.rating}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight">
                  {skill.name}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-8">
                  <Globe size={14} /> <span>{skill.level}</span>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                    <Users size={16} className="text-blue-600"/> {skill.learners} Active
                  </div>
                  <div className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. Footer Component */}
      <Footer />
    </div>
  );
}