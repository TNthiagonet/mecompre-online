// Arquivo: src/components/Footer/Footer.tsx
import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear(); // Obtém o ano atual

  useEffect(() => {
    function handleScroll() {
      // Verifica se o usuário está no final da página
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(isBottom);
    }

    // Adiciona um event listener para o scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <p>&copy; {currentYear} <a className="ThiagoNET">Copyright | </a>Developer <a href="https://thiagonet.com" className="thiagonet">ThiagoNET</a></p>
      </div>
    </footer>
  );
};

export default Footer;
