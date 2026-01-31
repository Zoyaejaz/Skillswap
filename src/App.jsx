import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BrowsePage from './pages/BrowsePage.jsx';
import CommunityHub from './pages/Community.jsx';
import SignIn from './components/Signin.jsx';

// Import your other pages here as you create them
// import Browse from './pages/Browse.jsx';
// import SignIn from './pages/SignIn.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Home />} />

          {/* Define paths for your navigation links */}
          <Route path="/browse" element={<BrowsePage/>} />
          <Route path="/how-it-works" element={<div>How It Works Page (Coming Soon)</div>} />
          <Route path="/community" element={<CommunityHub/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<div>Sign Up Page (Coming Soon)</div>} />
          
          

          {/* 404 Page (Optional) */}
          <Route path="*" element={<div className="p-20 text-center">404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;