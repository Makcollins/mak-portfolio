import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  
  return (
      <div className="bg-slate-50 text-slate-900 :bg-slate-900 :text-slate-100 antialiased min-h-screen selection:bg-cyan-500 selection:text-white">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
  )
}

export default App
