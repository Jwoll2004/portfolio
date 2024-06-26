import React, { useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';

function App() {
  const projectsRef = useRef(null);
  return (
    <div className="App">
      <Hero projectsRef={projectsRef} />
      <TechnicalSkills />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;
