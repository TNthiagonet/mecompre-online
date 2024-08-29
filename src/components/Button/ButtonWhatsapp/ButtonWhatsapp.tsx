import React, { useState } from 'react';
import Lottie from 'lottie-react';
import whatsappAnimation from '../../../Animations/Whatsapp.json';
import whatsappTnAnimation from '../../../Animations/WhatsappTN.json';
import './ButtonWhatsapp.css'; // Importe o arquivo CSS
import WhatsappSound from '../../../Sounds/Whatsapp.mp3'; // Importe o som de apito aqui

interface AnimationData {
  // Defina a estrutura conforme necessário com base no conteúdo do arquivo JSON
}

const ButtonWhatsapp: React.FC = () => {
  const [animationData, setAnimationData] = useState<AnimationData>(whatsappAnimation);
  const [isSecondAnimation, setIsSecondAnimation] = useState<boolean>(false);

  const handleWhatsappClick = () => {
    setAnimationData(whatsappTnAnimation);
    setIsSecondAnimation(true);

    // Reproduzir o som de apito ao clicar
    playApitoSound();

    setTimeout(() => {
      setAnimationData(whatsappAnimation);
      setIsSecondAnimation(false);
    }, 2000);

    setTimeout(() => {
      window.open('https://wa.me/5583981790771', '_blank');
    }, 2000);
  };

  const containerClassName = isSecondAnimation ? 'button-whatsapp-container second-animation' : 'button-whatsapp-container';
  const animationClassName = 'button-whatsapp-animation';

  // Função para reproduzir o som de apito
  const playApitoSound = () => {
    const audio = new Audio(WhatsappSound);
    audio.volume = 0.5; // Volume ajustável conforme necessário
    audio.play();
  };

  return (
    <div
      className={containerClassName}
      onClick={handleWhatsappClick}
    >
      <Lottie
        animationData={animationData}
        className={animationClassName}
      />
    </div>
  );
};

export default ButtonWhatsapp;
