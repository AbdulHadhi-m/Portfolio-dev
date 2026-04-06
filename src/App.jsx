import React from 'react';
import MainLayout from './components/layout/MainLayout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      {/* <Testimonials /> */}
      <Contact />
    </MainLayout>
  );
}

export default App;
