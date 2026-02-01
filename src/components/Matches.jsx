import React, { useState } from 'react';
import { Filter, Star, Zap, Search, MapPin, BookOpen, Award } from 'lucide-react';

const MatchesPage = () => {
  const [filter, setFilter] = useState('all');

  const matches = [
    {
      id: 1,
      name: "Ishaan Mehta",
      teaching: "Python for DSA",
      learning: "React.js",
      matchScore: 98,
      location: "Bhopal, MP",
      bio: "Preparing for GATE 2026. Can help with complex algorithms in exchange for frontend help.",
      isOnline: true
    },
    {
      id: 2,
      name: "Anjali Rao",
      teaching: "UI/UX Design",
      learning: "Next.js",
      matchScore: 85,
      location: "Indore, MP",
      bio: "Designer looking to understand the technical side of web development.",
      isOnline: false
    },
    {
      id: 3,
      name: "Karan Singh",
      teaching: "Machine Learning",
      learning: "Java",
      matchScore: 72,
      location: "Remote",
      bio: "Working on a glaucoma detection project, need Java expertise.",
      isOnline: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Your Matches</h1>
          <p className="text-slate-500">Based on your "SkillSwap" preferences.</p>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Filter by skill..." 
              className="pl-10 pr-4 py-2 bg-white border rounded-lg w-full outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="p-2 border rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Tabs / Filters */}
      <div className="flex gap-4 border-b border-slate-200">
        {['All Matches', 'Perfect Match', 'Recently Active'].map((tab) => (
          <button 
            key={tab}
            className={`pb-3 text-sm font-semibold transition-all ${
              tab.toLowerCase().includes(filter) 
              ? 'border-b-2 border-indigo-600 text-indigo-600' 
              : 'text-slate-400 hover:text-slate-600'
            }`}
            onClick={() => setFilter(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid of Match Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div key={match.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl font-bold text-indigo-600">
                    {match.name[0]}
                  </div>
                  {match.isOnline && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex items-center gap-1 bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md text-xs font-bold">
                  <Zap size={14} fill="currentColor" /> {match.matchScore}% Match
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-1">{match.name}</h3>
              <div className="flex items-center gap-1 text-slate-400 text-xs mb-4">
                <MapPin size={12} /> {match.location}
              </div>

              <p className="text-sm text-slate-600 line-clamp-2 mb-6">
                {match.bio}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-green-500" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Can Teach:</span>
                  <span className="text-sm font-semibold text-slate-700">{match.teaching}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-blue-500" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Wants to Learn:</span>
                  <span className="text-sm font-semibold text-slate-700">{match.learning}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t rounded-b-2xl flex gap-2">
              <button className="flex-1 bg-indigo-600 text-white py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition">
                Swap Request
              </button>
              <button className="px-4 py-2 border rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-white transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;