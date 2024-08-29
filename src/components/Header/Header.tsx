import React, { useState, useRef } from 'react';
import './Header.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import Lottie from 'lottie-react';
import animationMenuOpen from '../../Animations/MenuOpen.json';
import animationMenuClose from '../../Animations/MenuClose.json';
import menuOpenSound from '../../Sounds/Click.mp3';
import logoHoverSound from '../../Sounds/ThiagoNET.mp3'; // Importe o som ItensHover aqui
import tnLogoAnimation from '../../Animations/tnLogoAnimation.json'; // Importe o arquivo MenuOpen.json para tnLogo

type AnimationData = any;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [logoSoundPlayable, setLogoSoundPlayable] = useState(true); // Estado para controlar o som de hover
  const [animationData, setAnimationData] = useState<AnimationData>(animationMenuOpen);
  const logoHoverAudio = useRef(new Audio(logoHoverSound)); // Usar useRef para armazenar o objeto de áudio

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!soundPlayed) {
      playMenuSound(menuOpenSound, 0.5);
      setSoundPlayed(true);
    }
    setAnimationData(mobileMenuOpen ? animationMenuOpen : animationMenuClose);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setAnimationData(animationMenuOpen);
  };

  const playMenuSound = (src: string, volume: number) => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
    setTimeout(() => {
      setSoundPlayed(false);
    }, 500);
  };

  const handleAnimationComplete = () => {
    setSoundPlayed(false);
  };

  // Função para reproduzir som ao fazer hover apenas nas logos
  const playLogoHoverSound = () => {
    if (logoSoundPlayable) {
      if (!logoHoverAudio.current.paused) {
        logoHoverAudio.current.pause();
        logoHoverAudio.current.currentTime = 0;
      }
      logoHoverAudio.current.volume = 0.5; // Volume ajustável conforme necessário
      logoHoverAudio.current.play();

      setLogoSoundPlayable(false);
      setTimeout(() => {
        setLogoSoundPlayable(true);
      }, 5000); // 5 segundos antes de permitir que o som toque novamente
    }
  };

  return (
    <header>
      <div className="header-content">
        <nav className="top-nav">
          <div className="left">
            {/* Renderiza a animação Lottie ao invés da imagem */}
            <Lottie
              animationData={tnLogoAnimation}
              style={{ width: '50px', height: '50px' }} // Ajuste o tamanho conforme necessário
            />
            <a href="#" className="logo-text" onMouseEnter={playLogoHoverSound}>
              ThiagoNET
            </a>
          </div>
          <div className="center">
            {/* Conteúdo centralizado, se necessário */}
          </div>
          <div className="right">
            <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <a href="#home" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Início</a>
              </li>
              <li>
                <a href="#about" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Sobre</a>
              </li>
              <li>
                <a href="#services" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Serviços</a>
              </li>
              <li>
                <a href="#contact" onClick={() => { closeMenu(); playMenuSound(menuOpenSound, 0.5); }}>Contato</a>
              </li>
            </ul>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <Lottie
                animationData={animationData}
                style={{ width: '40px', height: '40px' }}
                onComplete={handleAnimationComplete}
              />
            </div>
          </div>
        </nav>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
