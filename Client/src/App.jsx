import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';

// A simple placeholder for the dashboard screen until you build the layout
const TemporaryDashboard = () => (
  <div style={{ padding: '40px' }}>
    <h2>Customer Registry Dashboard</h2>
    <p>Welcome! You have successfully authenticated through the backend API framework.</p>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main Auth Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Route Placeholder */}
          <Route path="/dashboard" element={<TemporaryDashboard />} />
          
          {/* Default fallback redirects straight to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;