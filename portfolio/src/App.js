import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors min-h-screen">
      <Navbar isDark={isDark} toggleDark={toggleDark}  />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
