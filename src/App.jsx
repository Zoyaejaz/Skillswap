import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BrowsePage from './pages/BrowsePage.jsx';
import CommunityHub from './pages/Community.jsx';
import SignIn from './components/Signin.jsx';
import SignUp from './components/Signup.jsx';
import Forgot from './components/Forgot.jsx';
import SkillSwapDashboard from './pages/Dashboard.jsx';
import Messages from './components/Messages.jsx';
import MatchesPage from './components/Matches.jsx';
import ProfileSettings from './components/Profile.jsx';
import SessionsPage from './pages/SessionsPage.jsx';
import ContactSupport from './components/Contact.jsx';
import ScrollToTop from './components/Scrolltotop.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        {/* 1. ScrollToTop placed here so it's always active but outside Routes logic */}
        <ScrollToTop />
        
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Navigation Links */}
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/how-it-works" element={<SessionsPage />} />
          <Route path="/community" element={<CommunityHub />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/dashboard" element={<SkillSwapDashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/contact" element={<ContactSupport />} />

          {/* 404 Page */}
          <Route path="*" element={<div className="p-20 text-center">404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;