// Loading.tsx
import React from 'react';
import Lottie from 'lottie-react';
import tnLogoAnimation from '../../Animations/tnLogoAnimation.json';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className='loader_container'>
      <Lottie 
        animationData={tnLogoAnimation}
        className='loader'
        style={{ width: '150px', height: '150px' }} // Ajuste o tamanho conforme necessário
      />
    </div>
  );
};

export default Loading;
