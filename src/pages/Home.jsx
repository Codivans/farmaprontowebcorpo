import React, { useState, useEffect } from 'react'
import farmaprontoWhite from './../../src/assets/farmaprontowhite.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaWhatsapp } from "react-icons/fa";
import imgbannerflag from './../../src/assets/banner_flag.jpg'
import nadro from './../../src/assets/nadro.png'
import marzam from './../../src/assets/marzam.png'
import fanasa from './../../src/assets/fanasa.png'
import farma from './../../src/assets/jovencircle.png';
import grafica from './../../src/assets/grafica.png';
import cardgrafica from './../../src/assets/cardgrafica.png';
import money from './../../src/assets/money.png';
import coin from './../../src/assets/coin.png';
import bg from './../assets/background.png';
import nave from './../assets/nave.png'

import img_01 from './../assets/sucursales/img_01.jpg';
import img_02 from './../assets/sucursales/img_02.jpg';
import img_03 from './../assets/sucursales/img_03.jpg';
import img_04 from './../assets/sucursales/img_04.jpg';
import img_05 from './../assets/sucursales/img_05.jpg';
import img_06 from './../assets/sucursales/img_06.jpg';
import img_07 from './../assets/sucursales/img_07.jpg';
import img_08 from './../assets/sucursales/img_08.jpg';
import img_09 from './../assets/sucursales/img_09.jpg';
import img_10 from './../assets/sucursales/img_10.jpg';
import img_11 from './../assets/sucursales/img_11.jpg';
import img_12 from './../assets/sucursales/img_12.jpg';
import img_13 from './../assets/sucursales/img_13.jpg';
import img_14 from './../assets/sucursales/img_14.jpg';
import img_15 from './../assets/sucursales/img_15.jpg';
import img_16 from './../assets/sucursales/img_16.jpg';
import img_17 from './../assets/sucursales/img_17.jpg';
import img_18 from './../assets/sucursales/img_18.jpg';
import img_19 from './../assets/sucursales/img_19.jpg';
import img_20 from './../assets/sucursales/img_20.jpg';
import img_21 from './../assets/sucursales/img_21.jpg';
import img_22 from './../assets/sucursales/img_22.jpg';


import farmamayoreo from './../../src/assets/farmamayoreo.svg'
import AnimatedCounter from './../componentes/AnimatedCounter';
import AnimatedOnScroll from './../componentes/AnimatedOnScroll';
import { Footer } from './../componentes/Footer';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

export function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const words = ['Curso Capacitación Nadro 23 y 24 de Septiembre 2024', 'Junta General de Agremiados 31 de Octubre 2024', 'Feria comercial ESQUIFARMA 28 Noviembre 2024'];
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  //   }, 5000); // Cambia la palabra cada 2 segundos

  //   return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  // }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },1000);
};

var classname = document.getElementsByClassName("confetti-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}



  return (
    <>
     <header className={`${scrolled ? 'solid' : 'transparent'}`}>
        <div className='wrap_marge wrap_header'>
          <img src={farmaprontoWhite} className='brand' />
          <nav>
            <ul>
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/' onClick={() => handleScroll('about')}>Nosotros</Link></li>
              <li><Link to='/'>Plan de lealtad</Link></li>
              <li><Link to='/'>Catalogo</Link></li>
              <li><Link to='/'>Sucursales</Link></li>
              <li><Link to='/'>Contacto</Link></li>
            </ul>
          </nav>
        </div>
     </header>
     <section className='wrap_banner section_hero'>
        <div className='column_text'>
          <h2>Invierte en el futuro de la salud con <sapn className='txt_yellow'>farmapronto</sapn></h2>
          <p>"Un modelo de negocio probado para quienes desean invertir en una farmacia de confianza, con el respaldo de más de 50 años en la industria y con socios comerciales que nos brindan un surtido y precio favorable."</p>

          <div className="middle">
            <button className="confetti-button">Contáctanos vía WhatsApp</button> 
          </div>
          
        </div>       
        <div className='column_img'>
          
          <img className='img_joven' src={farma}/>
          <img className='img_card_grafica floating' src={cardgrafica} />
          <img className='img_grafica floating' src={grafica} />
          <img className='img_money floating' src={money} />
          <img className='img_coin floating' src={coin} />
          
          
        </div>
     </section>
     <section id='about'>
          <div className='columns_about'>
              <div className='about_text'>
                <h2>¿Quienes somos?</h2>
                <p>Farmapronto® es una asociación de empresarios farmacéuticos independientes que operan bajo una identidad corporativa unificada y un nombre comercial común. El modelo de negocio se basa en un contrato de uso de marca. La finalidad de este esquema es posicionarnos como la cadena con el mayor número de farmacias independientes afiliadas, permitiéndonos competir eficazmente con grandes cadenas comerciales regionales.</p>
              </div>

              <div className='carrusel_img'>
                <>
                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide><img src={img_01} /></SwiperSlide>
                    <SwiperSlide><img src={img_02} /></SwiperSlide>
                    <SwiperSlide><img src={img_03} /></SwiperSlide>
                    <SwiperSlide><img src={img_04} /></SwiperSlide>
                    <SwiperSlide><img src={img_05} /></SwiperSlide>
                    <SwiperSlide><img src={img_06} /></SwiperSlide>
                    <SwiperSlide><img src={img_07} /></SwiperSlide>
                    <SwiperSlide><img src={img_08} /></SwiperSlide>
                    <SwiperSlide><img src={img_09} /></SwiperSlide>
                    <SwiperSlide><img src={img_10} /></SwiperSlide>
                    <SwiperSlide><img src={img_11} /></SwiperSlide>
                    <SwiperSlide><img src={img_12} /></SwiperSlide>
                    <SwiperSlide><img src={img_13} /></SwiperSlide>
                    <SwiperSlide><img src={img_14} /></SwiperSlide>
                    <SwiperSlide><img src={img_15} /></SwiperSlide>
                    <SwiperSlide><img src={img_16} /></SwiperSlide>
                    <SwiperSlide><img src={img_17} /></SwiperSlide>
                    <SwiperSlide><img src={img_18} /></SwiperSlide>
                    <SwiperSlide><img src={img_19} /></SwiperSlide>
                    <SwiperSlide><img src={img_20} /></SwiperSlide>
                    <SwiperSlide><img src={img_21} /></SwiperSlide>
                    <SwiperSlide><img src={img_22} /></SwiperSlide>
                  </Swiper>
              </>
                
              </div>
          </div>

        

     </section>
      <div className='about_us bg-banner '
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '700px',
        }}>

        <div className='content_about_nave'>
          <div className='card_about card_vision'>
            <div className='header_about'>
              <span>NUESTRA VISION</span>
            </div>
            <div className='body_about '>
              <p>Es apoyar a nuestros agremiados, ofreciendo alianzas comerciales con proveedores y laboratorios del mercado. Asimismo, nos comprometemos a brindar a la población productos de salud de manera accesible, pronta y eficaz.</p>
            </div>
          </div>

          <div className='card_about card_mision'>
            <div className='header_about'>
              <span>NUESTRA MISION</span>
            </div>
            <div className='body_about'>
              <p>Es apoyar a nuestros agremiados, ofreciendo alianzas comerciales con proveedores y laboratorios del mercado. Asimismo, nos comprometemos a brindar a la población productos de salud de manera accesible, pronta y eficaz.</p>
            </div>
          </div>

          <div className='card_about card_values'>
            <div className='header_about'>
              <span>NUESTROS VALORES</span>
            </div>
            <div className='body_about'>
              <p>Es apoyar a nuestros agremiados, ofreciendo alianzas comerciales con proveedores y laboratorios del mercado. Asimismo, nos comprometemos a brindar a la población productos de salud de manera accesible, pronta y eficaz.</p>
            </div>
          </div>
          <img src={nave} />
        </div>

        

      </div>

     <section className='container_banner_lealtad'>
        <img src={imgbannerflag} />
     </section>

     <section className='wrap_marge socios_comerciales'>
        <h2>Nuestros Socios Comerciales</h2>
        <div className='logos_socios'>
          <AnimatedOnScroll animationClass='content_logo animate__fadeInUp'>
            <img src={nadro} />
          </AnimatedOnScroll>
          <AnimatedOnScroll animationClass='content_logo animate__fadeInUp'>
            <img src={farmamayoreo} />
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animationClass='content_logo animate__fadeInUp'>
            <img src={fanasa} />
          </AnimatedOnScroll>
          <AnimatedOnScroll animationClass='content_logo animate__fadeInUp'>
            <img src={marzam} />
          </AnimatedOnScroll>
        </div>
     </section>

     <section className='flag_emprende'>
        <div className='wrap_marge'>
          <h2>QUIERO EMPRENDER CON UNA FARMACIA</h2>
          <p>¿Estas interesado? Contáctanos y nosotros te ayudamos</p>
          <button>
            <FaWhatsapp />
            <span>Contactar</span>
          </button>

          <div className='wrap_counter'>

            <div className='txt_counter'>
              <h3>
                +<AnimatedCounter endValue={200} duration={2000}  step={5} />
              </h3>
              <span>Sucursales afiliadas</span>
            </div>

            <div className='txt_counter'>
              <h3>
                +<AnimatedCounter endValue={50} duration={2000}  step={5}/> Años
              </h3>
              <span>En el mercado Farmacéutico</span>
            </div>

          </div>

          
        </div>
     </section>

     <Footer />
    </>
  )
}

