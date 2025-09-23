import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); 
    } else {
      document.documentElement.classList.remove('dark'); 
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
