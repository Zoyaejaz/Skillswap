import React from 'react';
import { Calendar, Award } from 'lucide-react';

export default function SessionsPage() {
  const upcomingSessions = [
    { teacher: 'Margaret Chen', skill: 'Traditional Cooking', date: 'Jan 15, 2026', time: '2:00 PM' },
    { teacher: 'Linda Martinez', skill: 'English Literature', date: 'Jan 18, 2026', time: '10:00 AM' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#4B0C37] mb-8">Upcoming Learning Sessions</h2>
      
      <div className="space-y-4">
        {upcomingSessions.map((session, idx) => (
          <div key={idx} className="bg-white border-2 border-[#119DA4]/30 rounded-xl p-6 flex items-center justify-between hover:shadow-xl transition-all">
            <div className="flex items-center gap-6">
              <div className="bg-[#FDE789] rounded-full p-4 border-2 border-[#119DA4]">
                <Calendar className="w-8 h-8 text-[#119DA4]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#4B0C37] mb-1">{session.skill}</h3>
                <p className="text-gray-600 text-lg mb-1">with {session.teacher}</p>
                <p className="text-[#119DA4] font-semibold text-lg">{session.date} at {session.time}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#119DA4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d7d84] transition-all shadow-md">
                Join Video Call
              </button>
              <button className="border-2 border-[#119DA4] text-[#119DA4] px-6 py-3 rounded-lg font-semibold hover:bg-[#119DA4]/10 transition-all">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#FDE789] to-[#FDE789]/70 border-2 border-[#119DA4] rounded-xl p-6 mt-8 shadow-md">
        <div className="flex items-start gap-4">
          <Award className="w-8 h-8 text-[#119DA4] flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-[#4B0C37] mb-2">Earn Credits by Attending</h3>
            <p className="text-[#4B0C37] text-lg leading-relaxed">
              Complete your scheduled sessions to spend your credits. After each session, you can 
              rate your experience and help other learners find great teachers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}