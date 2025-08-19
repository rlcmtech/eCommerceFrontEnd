// App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Nav/Header';
import Footer from './Nav/Footer';
import Homepage from './component/Homepage';
import UserEntry from './component/UserEntry';
import CustomerPage from './component/CustomerPage';
import AdminPage from './component/AdminPage';

const App = () => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  // Called after login succeeds
  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
  };

  // Log out
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} />

      <Routes>
        {/* Public routes */}
        {!user && <Route path="/" element={<Homepage />} />}
        {!user && <Route path="/login" element={<UserEntry onloginSuccess={handleLoginSuccess} />} />}

        {/* Protected routes */}
        {user && user.isAdmin && <Route path="/adminpage" element={<AdminPage />} />}
        {user && !user.isAdmin && <Route path="/userpage" element={<CustomerPage />} />}

        {/* Fallback redirect */}
        <Route
          path="*"
          element={
            <Navigate
              to={user ? (user.isAdmin ? "/adminpage" : "/userpage") : "/"}
              replace
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
