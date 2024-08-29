// ButtonPadrao.tsx

import React from 'react';
import './ButtonPadrao.css';

interface ButtonPadraoProps {
  onClick: () => void;
  soundSrc?: string; // Propriedade opcional para o som
  children: React.ReactNode; // Permitindo qualquer conteúdo como children
}

const ButtonPadrao: React.FC<ButtonPadraoProps> = ({ onClick, children, soundSrc }) => {
  const handleClick = () => {
    onClick();
    if (soundSrc) {
      new Audio(soundSrc).play(); // Reproduz o som ao clicar no botão, se a propriedade soundSrc estiver definida
    }
  };

  return (
    <button className="btn-padrao" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ButtonPadrao;
