import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Share2, Star, Zap, Calendar, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CommunityHub() {
  const stories = [
    {
      id: 1,
      user: "Arjun Mehta",
      role: "Full Stack Dev",
      content: "Swapped my React knowledge for Professional Photography lessons with Sarah. Now I handle my own project shoots!",
      tags: ["Success Story", "Tech-to-Art"],
      likes: 124,
      comments: 18,
      image: "/i1.jpg"
    },
    {
      id: 2,
      user: "Priya Rai",
      role: "UX Designer",
      content: "Spent 4 weeks teaching UI principles and learned Spanish in return. ¡Increíble! The community here is so supportive.",
      tags: ["Languages", "Design"],
      likes: 89,
      comments: 12,
      image: "/i2.png"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-slate-900 pt-20 pb-16 px-6 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-6xl font-black text-white mb-6"
            >
              The <span className="text-blue-500">Heart</span> of SkillSwap
            </motion.h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              Where knowledge meets connection. Share your journey, join events, and grow with 50,000+ swappers.
            </p>
          </div>
        </section>

        {/* Community Stats */}
        <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Daily Swaps", value: "450+", icon: <Zap className="text-yellow-500" /> },
              { label: "Active Mentors", value: "12k", icon: <Award className="text-blue-500" /> },
              { label: "Countries", value: "85", icon: <Users className="text-green-500" /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-5">
                <div className="p-4 bg-slate-50 rounded-2xl">{stat.icon}</div>
                <div>
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              Success Stories <Star className="text-blue-600" fill="currentColor" size={24} />
            </h2>
            
            {stories.map((story) => (
              <motion.div 
                key={story.id}
                {...fadeInUp}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={story.image} alt={story.user} className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50" />
                  <div>
                    <h4 className="font-bold text-slate-900">{story.user}</h4>
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-tighter">{story.role}</p>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6 italic">"{story.content}"</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {story.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-100">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                  <button className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors">
                    <Heart size={18} /> <span className="text-sm font-bold">{story.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
                    <MessageSquare size={18} /> <span className="text-sm font-bold">{story.comments}</span>
                  </button>
                  <button className="ml-auto text-slate-300 hover:text-slate-600 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-200">
              <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-6">
                {[
                  { title: "Weekly Dev Meet", time: "Sat, 8 PM", icon: <Calendar size={16} /> },
                  { title: "Design Feedback Loop", time: "Mon, 6 PM", icon: <MessageSquare size={16} /> }
                ].map((event, i) => (
                  <div key={i} className="flex gap-4 items-start border-l-2 border-white/20 pl-4">
                    <div className="mt-1">{event.icon}</div>
                    <div>
                      <p className="font-bold text-sm">{event.title}</p>
                      <p className="text-blue-100 text-xs mt-1">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl mt-8 hover:bg-slate-50 transition-colors">
                View Calendar
              </button>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-6">Top Contributors</h3>
              <div className="space-y-4">
                {['i4.jpg', 'i5.png', 'i1.jpg'].map((img, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={`/${img}`} alt="top" className="w-10 h-10 rounded-full object-cover" />
                      <p className="text-sm font-bold text-slate-700">Top Swapper {i+1}</p>
                    </div>
                    <Star className="text-yellow-400" size={14} fill="currentColor" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}