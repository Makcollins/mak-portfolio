import { useEffect, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="grow pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Collins Makui</p>
      </footer>
      <FloatingWhatsApp 
        phoneNumber="254745083702" 
        accountName="Collins Makui" 
        allowClickAway={true}      
        notification={true}        
        statusMessage="🚀 Engineering mode: Active" 
        avatar="assets/about/aboutImage.png"
        chatMessage="Hello! Looking to engineer a high-performing app, website, or custom software? Tell me about your project, and let’s make it happen!" // Optional welcome message
      />
    </div>
  )
}

export default App
