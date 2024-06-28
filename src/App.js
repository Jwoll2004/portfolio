import React, { useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import CodingStats from './components/CodingStats';
import Footer from './components/Footer';

function App() {
  const projectsRef = useRef(null);
  const codingRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="App">
      <Hero projectsRef={projectsRef} codingRef={codingRef} contactRef={contactRef}/>
      <TechnicalSkills />
      <Projects ref={projectsRef} />
      <CodingStats ref={codingRef} />
      <Footer ref={contactRef} />
    </div>
  );
}

export default App;
