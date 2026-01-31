import React from 'react';
import { Award } from 'lucide-react';

export default function SkillCard({ skill }) {
  return (
    <div className="bg-white border-2 border-[#119DA4]/30 rounded-xl p-6 hover:shadow-xl hover:border-[#119DA4] transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{skill.image}</div>
        <div className="bg-[#FDE789] text-[#4B0C37] px-3 py-1 rounded-full text-sm font-semibold border border-[#119DA4]/20">
          {skill.credits} credit
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-[#4B0C37] mb-2">{skill.skill}</h3>
      <p className="text-gray-600 mb-1 text-lg">with {skill.teacher}, {skill.age}</p>
      <p className="text-[#119DA4] font-semibold mb-4">{skill.category}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Award className="w-4 h-4 text-[#119DA4]" />
          <span>{skill.rating} ★</span>
        </div>
        <div>{skill.sessions} sessions completed</div>
      </div>
      
      <button className="w-full bg-[#119DA4] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#0d7d84] transition-all shadow-md">
        Book Session
      </button>
    </div>
  );
}