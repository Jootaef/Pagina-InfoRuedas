import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video  id='hero-video' autoplay loop muted> 
      <source src='/videos/video-2.mp4' type='video/mp4'></source>
      </video>
      <img id='hero-image' src='../images/pantalla-1.jpg' alt='Hero '></img>
      <h1>Bienvenido a InfoRuedas</h1>
      <p>Encuentra toda la información técnica que necesitas sobre autos</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Analizar Vehículos
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Video Introductorio <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
