import React from 'react';
import './Cometas.css';

const Cometas: React.FC = () => {
  return (
    <div className="cometas">
      <div className="stars">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
    </div>
  );
};

export default Cometas;
