import React from 'react';
import Banner from '../../component/banner/Banner';
import Services from '../services/Services';
import Skills from '../../component/skills/Skills';
// import Project from '../../component/projects/Projects';
import Projects from '../Project';
import About from '../../component/about/About';
import Contact from '../../component/contact/Contact';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      
    </div>
  );
};

export default Home;