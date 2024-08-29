import React, { useRef } from 'react';
import './Contact.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/ContactMe.json';
import emailHoverSound from '../../Sounds/Email.mp3';
import telefoneHoverSound from '../../Sounds/Telefone.mp3';
import facebookHoverSound from '../../Sounds/Facebook.mp3';
import twitterHoverSound from '../../Sounds/Twitter.mp3';
import instagramHoverSound from '../../Sounds/Instagram.mp3';
import FacebookIcon from "../../img/Social/Facebook.png";
import TwitterIcon from "../../img/Social/X.png";
import InstagramIcon from "../../img/Social/Instagram.png";
import PhoneIcon from "../../img/Social/Viber.png";
import EmailIcon from "../../img/Social/Email.png";

const Contact: React.FC = () => {
  const emailRef = useRef<HTMLAnchorElement>(null);
  const telefoneRef = useRef<HTMLAnchorElement>(null);
  const facebookRef = useRef<HTMLAnchorElement>(null);
  const twitterRef = useRef<HTMLAnchorElement>(null);
  const instagramRef = useRef<HTMLAnchorElement>(null);

  const handleEmailClick = () => {
    window.location.href = 'mailto:thiagobrunomenezesdacosta@gmail.com';
  };

  const handleHoverSound = (sound: string, ref: React.RefObject<any>) => {
    if (ref.current) {
      const audio = new Audio(sound);
      audio.volume = 0.5;
      audio.play();
      ref.current.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:83981790771';
  };

  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contato</h1>
          <p>Entre em contato por whatsapp, email, telefone, facebook, twitter ou instagram.</p>
        </div>
        <div className="contact-animations">
          <Lottie animationData={animationData} loop autoplay style={{ width: '70%', height: 'auto' }} />
        </div>
        <div className="contact-icons">
          <a
            href="mailto:thiagobrunomenezesdacosta@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHoverSound(emailHoverSound, emailRef)}
            onClick={handleEmailClick}
            ref={emailRef}
          >
            <img src={EmailIcon} className="contact-icon" alt="Email" />
          </a>
          <a
            href="tel:+83981790771"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHoverSound(telefoneHoverSound, telefoneRef)}
            onClick={handlePhoneClick}
            ref={telefoneRef}
          >
            <img src={PhoneIcon} className="contact-icon" alt="Telefone" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHoverSound(facebookHoverSound, facebookRef)}
            ref={facebookRef}
          >
            <img src={FacebookIcon} className="contact-icon" alt="Facebook" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHoverSound(twitterHoverSound, twitterRef)}
            ref={twitterRef}
          >
            <img src={TwitterIcon} className="contact-icon" alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/thiagonet.com.br"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHoverSound(instagramHoverSound, instagramRef)}
            ref={instagramRef}
          >
            <img src={InstagramIcon} className="contact-icon" alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
