import React, { useState } from 'react';
import { Send, Phone, Video, Info, Search, CheckCheck, ChevronLeft } from 'lucide-react';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [showChatMobile, setShowChatMobile] = useState(false); // Controls mobile view toggle

  const chats = [
    { id: 0, name: "Priya Sharma", skill: "UX Design", lastMsg: "Does 6 PM work?", time: "10:25 AM", online: true, unread: 2, avatar: "P" },
    { id: 1, name: "Rahul Kumar", skill: "Python", lastMsg: "Sent the link!", time: "Yesterday", online: false, unread: 0, avatar: "R" },
    { id: 2, name: "Sneha Patel", skill: "Public Speaking", lastMsg: "Thanks for the tips!", time: "Feb 1", online: true, unread: 0, avatar: "S" }
  ];

  return (
    <div className="flex h-screen md:h-[calc(100vh-64px)] bg-white md:rounded-2xl md:shadow-sm md:border border-slate-100 overflow-hidden relative">
      
      {/* 1. CHAT LIST */}
      <div className={`
        ${showChatMobile ? 'hidden' : 'flex'} 
        md:flex w-full md:w-1/3 border-r flex-col bg-white
      `}>
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search swaps..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => {
                setSelectedChat(chat.id);
                setShowChatMobile(true); // Switch to chat view on mobile
              }}
              className={`flex items-center gap-4 p-4 cursor-pointer transition-colors ${
                selectedChat === chat.id ? 'bg-indigo-50' : 'hover:bg-slate-50'
              }`}
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                  {chat.avatar}
                </div>
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-slate-800 truncate">{chat.name}</h4>
                  <span className="text-xs text-slate-400">{chat.time}</span>
                </div>
                <p className="text-xs font-semibold text-indigo-500 mb-1">{chat.skill} Swap</p>
                <p className="text-sm text-slate-500 truncate">{chat.lastMsg}</p>
              </div>

              {chat.unread > 0 && (
                <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. CHAT WINDOW */}
      <div className={`
        ${showChatMobile ? 'flex' : 'hidden'} 
        md:flex flex-1 flex-col bg-slate-50
      `}>
        {/* Chat Header */}
        <div className="p-3 md:p-4 bg-white border-b flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-2 md:gap-3">
            {/* Back Button for Mobile */}
            <button 
              onClick={() => setShowChatMobile(false)}
              className="md:hidden p-1 mr-1 text-slate-600 hover:bg-slate-100 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              {chats[selectedChat].avatar}
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-slate-800 truncate text-sm md:text-base">{chats[selectedChat].name}</h3>
              <p className="text-[10px] md:text-xs text-green-500 font-medium tracking-tight">Active now</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-slate-400">
            <Phone size={18} className="md:w-5 md:h-5 hover:text-indigo-600 cursor-pointer" />
            <Video size={18} className="md:w-5 md:h-5 hover:text-indigo-600 cursor-pointer" />
            <Info size={18} className="md:w-5 md:h-5 hover:text-indigo-600 cursor-pointer" />
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
          <div className="flex justify-center">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium">
              You both agreed to swap React.js for UX Design
            </span>
          </div>

          <div className="flex items-end gap-2 max-w-[85%] md:max-w-[70%]">
            <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm text-sm text-slate-700">
              Hey! I can help with UX Design if you teach me React Hooks.
            </div>
          </div>

          <div className="flex items-end gap-2 max-w-[85%] md:max-w-[70%] ml-auto flex-row-reverse">
            <div className="flex flex-col items-end">
              <div className="bg-indigo-600 p-3 rounded-2xl rounded-br-none shadow-sm text-sm text-white">
                That sounds perfect. When are you free?
              </div>
              <span className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
                10:25 AM <CheckCheck size={12} className="text-indigo-500" />
              </span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-3 md:p-4 bg-white border-t sticky bottom-0">
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-2">
            <button className="p-2 text-slate-400 hover:text-indigo-600 font-bold">+</button>
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-transparent border-none focus:outline-none text-sm p-1"
            />
            <button className="bg-indigo-600 p-2 md:p-2.5 rounded-lg text-white hover:bg-indigo-700 transition">
              <Send size={16} md:size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;