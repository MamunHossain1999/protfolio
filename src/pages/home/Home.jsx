import React from 'react';
import Banner from '../../component/banner/Banner';
import Services from '../services/Services';
import Skills from '../../component/skills/Skills';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Skills/>
      
    </div>
  );
};

export default Home;