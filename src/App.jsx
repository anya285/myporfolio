import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import SelectedProjects from './components/SelectedProjects';
import Services from './components/Services';
import ValueResults from './components/ValueResults';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

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
        <Footer />
      </main>
    </div>
  );
}

export default App;
