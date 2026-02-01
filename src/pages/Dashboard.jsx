import React, { useState } from 'react';
import { 
  Users, BookOpen, MessageSquare, TrendingUp, 
  Clock, CheckCircle, Search, Settings, Menu, X, LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const SkillSwapDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sidebar Links Configuration
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'matches', label: 'My Matches', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'profile', label: 'Profile Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden bg-white border-b px-4 py-3 flex justify-between items-center sticky top-0 z-50">
        <h2 className="text-xl font-black text-indigo-600 tracking-tight">SkillSwap</h2>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* --- SIDEBAR --- */}
      <aside className={`
  fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
  md:relative md:translate-x-0
  ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
`}>
  <div className="flex flex-col h-full p-6">
    {/* Logo Link - Goes back to Landing Page */}
    <h2 
      onClick={() => navigate('/')} 
      className="text-2xl font-black text-indigo-600 mb-10 hidden md:block tracking-tight cursor-pointer hover:opacity-80 transition"
    >
      SkillSwap
    </h2>
    
    <nav className="space-y-2 flex-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setActiveTab(item.id);         // Switches the content in the dashboard
            setIsMobileMenuOpen(false);    // Closes mobile menu
            navigate(`/${item.id}`); // Updates the URL path
          }}
          className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
            activeTab === item.id 
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
              : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
          }`}
        >
          <item.icon size={20} className={activeTab === item.id ? 'animate-pulse' : ''} />
          <span className="font-semibold">{item.label}</span>
        </button>
      ))}
    </nav>

    <div className="pt-6 border-t">
      {/* Logout Link - Redirects to Login/Home */}
      <button 
        onClick={() => {
          // Add your logout logic here (e.g., clearing tokens)
          navigate('/login');
        }}
        className="flex items-center gap-3 w-full p-3 text-slate-400 hover:text-red-500 transition-colors font-medium"
      >
        <LogOut size={20} /> Logout
      </button>
    </div>
  </div>
</aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-4 md:p-8 w-full">
        {activeTab === 'dashboard' && <DashboardOverview />}
        {activeTab === 'matches' && <div className="p-8 text-center text-slate-400">Matches Page Content Here</div>}
        {activeTab === 'messages' && <div className="p-8 text-center text-slate-400">Messages Page Content Here</div>}
        {activeTab === 'settings' && <div className="p-8 text-center text-slate-400">Settings Page Content Here</div>}
      </main>
    </div>
  );
};

const DashboardOverview = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-slate-800">Welcome, Developer! 👋</h1>
        <p className="text-slate-500 font-medium">You have 2 swap sessions scheduled for today.</p>
      </div>
      <div className="relative w-full sm:w-auto">
        <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search skills..." 
          className="w-full sm:w-64 pl-10 pr-4 py-2.5 border-none shadow-sm rounded-xl bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        />
      </div>
    </header>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
      {[
        { label: 'Hours Swapped', val: '24.5 hrs', color: 'bg-blue-50 text-blue-600', icon: Clock },
        { label: 'Skills Mastered', val: '4 Skills', color: 'bg-emerald-50 text-emerald-600', icon: CheckCircle },
        { label: 'Network Size', val: '12 Partners', color: 'bg-purple-50 text-purple-600', icon: Users },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className={`p-3 rounded-xl ${stat.color}`}><stat.icon size={24} /></div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <p className="text-xl font-black text-slate-800">{stat.val}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Active Swaps */}
      <div className="lg:col-span-2">
        <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
          <BookOpen size={20} className="text-indigo-600" /> Current Exchanges
        </h3>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {[
            { id: 1, user: "Priya S.", skill: "UX Design", status: "In Progress", type: "Learning" },
            { id: 2, user: "Rahul K.", skill: "React Hooks", status: "Next Session: Today", type: "Teaching" },
          ].map((swap) => (
            <div key={swap.id} className="p-5 border-b last:border-0 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center font-bold text-white shadow-inner">
                  {swap.user[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{swap.user}</p>
                  <p className="text-xs font-medium text-indigo-500">{swap.type}: {swap.skill}</p>
                </div>
              </div>
              <span className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                swap.status.includes('Today') ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'
              }`}>
                {swap.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Matches */}
      <div>
  <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2 px-1">
    <Users size={20} className="text-indigo-600" /> Perfect Matches
  </h3>
  <div className="space-y-4">
    {[
      { name: "Sarah L.", has: "Python", wants: "React", matchScore: "95%", bio: "Finishing a project, need a React pro!" },
      { name: "James W.", has: "SEO", wants: "Node.js", matchScore: "88%", bio: "Can help rank your site for Node tips." },
    ].map((match, idx) => (
      <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
        {/* Match Score Badge */}
        <div className="absolute top-0 right-0">
          <div className="bg-indigo-600 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase tracking-tighter">
            {match.matchScore} Match
          </div>
        </div>

        <div className="mb-4">
          <p className="font-black text-slate-800 text-lg leading-tight">{match.name}</p>
          <p className="text-[11px] text-slate-400 font-bold uppercase mt-1 tracking-wide">Ready to Swap</p>
        </div>

        {/* Skill Exchange Visual */}
        <div className="space-y-3 mb-5">
          <div className="flex items-center justify-between bg-emerald-50 p-2 rounded-xl border border-emerald-100">
            <span className="text-[10px] font-bold text-emerald-600 uppercase">Offers</span>
            <span className="text-sm font-bold text-emerald-700">{match.has}</span>
          </div>
          
          <div className="flex justify-center -my-2 relative z-10">
            <div className="bg-white p-1 rounded-full border shadow-sm">
              <TrendingUp size={14} className="text-slate-300 rotate-90" />
            </div>
          </div>

          <div className="flex items-center justify-between bg-indigo-50 p-2 rounded-xl border border-indigo-100">
            <span className="text-[10px] font-bold text-indigo-600 uppercase">Needs</span>
            <span className="text-sm font-bold text-indigo-700">{match.wants}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-5 italic line-clamp-1">"{match.bio}"</p>

        <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
          <MessageSquare size={16} />
          Send Swap Request
        </button>
      </div>
    ))}
  </div>
</div>
    </div>
  </div>
);

export default SkillSwapDashboard;