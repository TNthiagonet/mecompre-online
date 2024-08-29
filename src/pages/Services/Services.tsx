import React from 'react';
import './Services.css';
import Lottie from 'lottie-react';
import Card from '../../components/Card/Card'; // Atualizei o nome do componente
import Registro from '../../components/Card/img/web-register.png';
import Criacao from '../../components/Card/img/web-design.png';
import Hospedagem from '../../components/Card/img/web-host.png';
import Manutencao from '../../components/Card/img/web-manut.png';
import animationData from '../../Animations/AnimationServicos.json';
import cardClickSound from '../../Sounds/Click.mp3'; // Adicione o som de clique do cartão

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="services-header">
        <h1>Serviços</h1>
      </div>
      <div className="services-animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="services-header-p">
        <p>Alguns de nossos serviços.</p>
      </div>
      <div className="services-card-container">
        <Card
          imageUrl={Registro}
          title="Registro"
          description="Ex: www.SuaMarca.com"
          buttonLabel="Contratar"
          buttonUrl="https://wa.me/5583981790771"
          soundSrc={cardClickSound}
        />

        <Card
          imageUrl={Criacao}
          title="Criação"
          description="Desenvolvimento Web"
          buttonLabel="Contratar"
          buttonUrl="https://wa.me/5583981790771"
          soundSrc={cardClickSound}
        />

        <Card
          imageUrl={Hospedagem}
          title="Hospedagem"
          description="Servidores especiais."
          buttonLabel="Contratar"
          buttonUrl="https://wa.me/5583981790771"
          soundSrc={cardClickSound}
        />

        <Card
          imageUrl={Manutencao}
          title="Manutenção"
          description="Seu serviço funcionando."
          buttonLabel="Contratar"
          buttonUrl="https://wa.me/5583981790771"
          soundSrc={cardClickSound}
        />
      </div>
    </section>
  );
};

export default Services;
