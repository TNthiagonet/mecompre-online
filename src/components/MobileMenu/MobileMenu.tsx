import React from 'react';
import './MobileMenu.css';
import menuOpenSound from '../../Sounds/Click.mp3';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void; // Função para fechar o menu
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const handleClick = () => {
    onClose(); // Chamada para fechar o menu ao clicar em um item
    playMenuSound(menuOpenSound, 0.5); // Reproduz o som de abertura com volume de 0.5 (50%)
  };

  // Função para reproduzir o som com volume configurável
  const playMenuSound = (src: string, volume: number) => {
    const audio = new Audio(src);
    audio.volume = volume; // Configura o volume do áudio
    audio.play();
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
      <ul>
        <li><a href="#home" onClick={handleClick}>Início</a></li>
        <li><a href="#about" onClick={handleClick}>Sobre</a></li>
        <li><a href="#services" onClick={handleClick}>Serviços</a></li>
        <li><a href="#contact" onClick={handleClick}>Contato</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
