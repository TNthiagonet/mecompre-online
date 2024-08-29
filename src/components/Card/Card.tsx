import React, { useRef, useEffect } from 'react';
import './Card.css';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  soundSrc: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// Extendendo HTMLDivElement para incluir transitionId
interface HTMLDivElementWithTransitionId extends HTMLDivElement {
  transitionId?: number;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  buttonLabel,
  buttonUrl,
  soundSrc,
  className,
  id,
  style,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElementWithTransitionId>(null);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Previna o comportamento padrão do link
    const audio = new Audio(soundSrc);
    audio.play();
    window.open(buttonUrl, '_blank');
  };

  const cardEffect = (event: MouseEvent) => {
    const card = cardRef.current;
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;
      const positionX = event.clientX - centerX;
      const positionY = event.clientY - centerY;
      
      const rotateX = ((+1) * 15 * positionY / (cardRect.height / 2)).toFixed(2);
      const rotateY = ((-1) * 15 * positionX / (cardRect.width / 2)).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const cardBack = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      cardTransition();
    }
  };

  const cardTransition = () => {
    const card = cardRef.current;
    if (card) {
      clearTimeout(card.transitionId);
      card.style.transition = 'transform 300ms ease';
      card.transitionId = window.setTimeout(() => {
        card.style.transition = '';
      }, 300);
    }
  };

  const cardEnter = () => {
    cardTransition();
  };

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', cardEffect);
      card.addEventListener('mouseleave', cardBack);
      card.addEventListener('mouseenter', cardEnter);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', cardEffect);
        card.removeEventListener('mouseleave', cardBack);
        card.removeEventListener('mouseenter', cardEnter);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card ${className}`}
      style={style}
      id={id}
      onClick={onClick}
    >
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={buttonUrl} target="_blank" className="card-button" onClick={handleButtonClick}>
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;
