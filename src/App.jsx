import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Component/Navigation';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Resume from './Pages/Resume';
import LoadingScreen from './Component/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <BrowserRouter>
        <Navigation />
        <main className="flex-grow pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/Resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
        </main>
      </BrowserRouter>
    </div>
  );
}