// Home.tsx

import React from 'react';
import './Home.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationHome.json'; // Ajuste o caminho conforme necessário
import ButtonPadrao from '../../components/Button/ButtonPadrao/ButtonPadrao'; // Importando o componente ButtonPadrao
import menuOpenSound from '../../Sounds/Click.mp3'; // Importando o som

const Home: React.FC = () => {
  const handleNavigateToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">Olá!</h1>
        <p className="home-description">
        Bem-vindo à ThiagoNET! <br />
        Somos uma agência de desenvolvimento web <br /> 
        dedicada a transformar suas ideias em realidade. <br />
        Com um time especializado em design e desenvolvimento, criamos soluções digitais que destacam sua presença online.
        </p>
        <ButtonPadrao onClick={handleNavigateToAbout} soundSrc={menuOpenSound}>Sobre nós</ButtonPadrao> {/* Passando o som para o botão */}
      </div>
      <div className="animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 'auto' }} />
      </div>
    </section>
  );
};

export default Home;
