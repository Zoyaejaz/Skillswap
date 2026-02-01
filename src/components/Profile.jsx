import React, { useState } from 'react';
import { Camera, Save, Plus, X, Globe, Lock, Bell, User } from 'lucide-react';

const ProfileSettings = () => {
  const [teachingSkills, setTeachingSkills] = useState(['React.js', 'Next.js', 'Java']);
  const [learningSkills, setLearningSkills] = useState(['UI/UX Design', 'Figma']);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* LEFT COLUMN: NAVIGATION & QUICK ACTIONS */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="w-full h-full bg-indigo-100 rounded-full flex items-center justify-center text-4xl font-bold text-indigo-600 border-4 border-white shadow-sm">
                A
              </div>
              <button className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full text-white border-2 border-white hover:bg-indigo-700 transition">
                <Camera size={16} />
              </button>
            </div>
            <h2 className="text-xl font-bold text-slate-800">Aman Gupta</h2>
            <p className="text-sm text-slate-500">Student at VIT Bhopal</p>
          </div>

          <nav className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {[
              { icon: User, label: 'Public Profile', active: true },
              { icon: Globe, label: 'Preferences' },
              { icon: Bell, label: 'Notifications' },
              { icon: Lock, label: 'Security' },
            ].map((item, idx) => (
              <button key={idx} className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-medium transition ${item.active ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}>
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT COLUMN: EDITING FORM */}
        <div className="flex-1 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-slate-800">Edit Public Profile</h3>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                <Save size={18} /> Save Changes
              </button>
            </div>

            <div className="space-y-6">
              {/* Bio Section */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">About Me</label>
                <textarea 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition min-h-[120px]"
                  placeholder="Tell people what you are working on... (e.g. Preparing for GATE 2026, working on SkillSwap project)"
                />
              </div>

              {/* Teaching Skills */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">I can Teach (Skills Offered)</label>
                <div className="flex flex-wrap gap-2 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  {teachingSkills.map(skill => (
                    <span key={skill} className="bg-white border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm">
                      {skill}
                      <button className="text-slate-300 hover:text-red-500"><X size={14} /></button>
                    </span>
                  ))}
                  <button className="flex items-center gap-1 text-indigo-600 text-sm font-bold px-3 py-1.5 hover:bg-indigo-100 rounded-lg transition">
                    <Plus size={16} /> Add Skill
                  </button>
                </div>
              </div>

              {/* Learning Skills */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">I want to Learn (Skills Needed)</label>
                <div className="flex flex-wrap gap-2 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  {learningSkills.map(skill => (
                    <span key={skill} className="bg-white border border-emerald-100 text-emerald-600 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm">
                      {skill}
                      <button className="text-slate-300 hover:text-red-500"><X size={14} /></button>
                    </span>
                  ))}
                  <button className="flex items-center gap-1 text-emerald-600 text-sm font-bold px-3 py-1.5 hover:bg-emerald-100 rounded-lg transition">
                    <Plus size={16} /> Add Skill
                  </button>
                </div>
              </div>

              {/* Social/External Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">GitHub URL</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="github.com/username" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn URL</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="linkedin.com/in/username" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;