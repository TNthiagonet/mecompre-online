import React from 'react';
import './MainContent.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Services from '../../pages/Services/Services';
import Contact from '../../pages/Contact/Contact';
import CircleAnimation from '../CircleAnimation/CircleAnimation';
import EstrelaAnimation from '../EstrelaAnimation/EstrelaAnimation';
import Cometas from '../Cometas/Cometas';
import Fireflies from '../Fireflies/Fireflies';

const MainContent: React.FC = () => {
  return (
    <div className="main-container">
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <CircleAnimation />
      <EstrelaAnimation />
      <Cometas />
      <Fireflies />
    </div>
  );
};

export default MainContent;
