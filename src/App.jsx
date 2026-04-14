import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import SelectedProjects from './components/SelectedProjects';
import Services from './components/Services';
import ValueResults from './components/ValueResults';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <SelectedProjects />
        <ValueResults />
        <About />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;
