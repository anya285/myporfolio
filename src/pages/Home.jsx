import React from 'react';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Services from '../components/Services';
import SelectedProjects from '../components/SelectedProjects';
import ValueResults from '../components/ValueResults';
import About from '../components/About';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Services />
      <SelectedProjects />
      <ValueResults />
      <About />
      <ContactCTA />
    </>
  );
};

export default Home;
