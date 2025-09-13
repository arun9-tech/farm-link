import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FarmerDetailPage } from './pages/FarmerDetailPage';
// --- Import our new pages ---
import { ProcessPage } from './pages/ProcessPage';
import { CommunityPage } from './pages/CommunityPage';
import { QualityPage } from './pages/QualityPage';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/farmer/:id" element={<FarmerDetailPage />} />
          
          {/* --- Add routes for the new pages --- */}
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/quality" element={<QualityPage />} />
        </Routes>
      </main>
    </>
  );
}