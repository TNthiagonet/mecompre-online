import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;
