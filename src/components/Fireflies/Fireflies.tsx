import React from 'react';
import './Fireflies.css';

const Fireflies: React.FC = () => {
  const quantity = 15; // Quantidade de fireflies

  // Função para gerar números aleatórios dentro de um intervalo
  const randomInRange = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Gera os fireflies dinamicamente com classes únicas
  const renderFireflies = () => {
    const fireflies = [];
    for (let i = 1; i <= quantity; i++) {
      const rotationSpeed = `${randomInRange(8, 18)}s`;
      const flashDelay = `${randomInRange(500, 8500)}ms`;
      fireflies.push(
        <div
          key={i}
          className={`firefly move${i}`}
          style={{
            animationDuration: rotationSpeed,
            animationDelay: flashDelay,
            left: `${randomInRange(0, 100)}vw`,
            top: `${randomInRange(0, 100)}vh`,
          }}
        ></div>
      );
    }
    return fireflies;
  };

  return <div className="fireflies-container">{renderFireflies()}</div>;
};

export default Fireflies;
