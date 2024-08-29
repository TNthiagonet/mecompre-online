import React from 'react';
import './SideMenu.css';

interface SideMenuProps {
  position: 'left' | 'right';
}

const SideMenu: React.FC<SideMenuProps> = ({ position }) => {
  return (
    <aside className={`side-menu ${position}-menu`}>
      
      {/* 
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      */}
      
    </aside>
  );
};

export default SideMenu;
