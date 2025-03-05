import React, { useState, useEffect } from 'react'
import farmapronto from './../../src/assets/farmapronto.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaWhatsapp } from "react-icons/fa";
import imgbannerflag from './../../src/assets/banner_flag.jpg'
import nadro from './../../src/assets/nadro.png'
import marzam from './../../src/assets/marzam.png'
import fanasa from './../../src/assets/fanasa.png'
import farma from './../../src/assets/joven.png';
import grafica from './../../src/assets/grafica.png';
import cardgrafica from './../../src/assets/cardgrafica.png';
import bgWaves from './../assets/bg_waves.png';

import photo_history_01 from './../assets/photo_history_01.png';
import photo_history_02 from './../assets/photo_history_02.png';
import photo_history_03 from './../assets/photo_history_03.png';
import photo_history_04 from './../assets/photo_history_04.png';
import photo_history_05 from './../assets/photo_history_05.png';
import photo_history_06 from './../assets/photo_history_06.png';
import photo_history_07 from './../assets/photo_history_07.png';
import photo_history_08 from './../assets/photo_history_08.png';
import photo_history_09 from './../assets/photo_history_09.png';

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
     <header>
        <div className='wrap_marge wrap_header'>
          <img src={farmapronto} className='brand' />
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
     <section className='wrap_banner section_hero'
            style={{
              backgroundImage: `url(${bgWaves})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '490px',
            }} 
    >
        <div className='column_text'>
          <h2>Invierte en el Futuro de la Salud con Farmapronto</h2>
          <h4>Un modelo de negocio probado para quienes desean invertir en una farmacia de confianza</h4>
          <div className="middle">
            <button className="confetti-button">Contáctanos vía WhatsApp</button> 
          </div>
          {/* <Link to='' className='link_whatsApp'>Contáctanos vía WhatsApp</Link> */}
        </div>       
        <div className='column_img'>
          
          <img className='img_joven animate__animated animate__bounceIn' src={farma}/>
          <img className='img_card_grafica animate__animated animate__bounceInDown' src={cardgrafica} />
          <img className='img_grafica animate__animated animate__bounceInUp' src={grafica} />
          
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
                    <SwiperSlide><img src={photo_history_01} /></SwiperSlide>
                    <SwiperSlide><img src={photo_history_02} /></SwiperSlide>
                    <SwiperSlide><img src={photo_history_03} /></SwiperSlide>
                    <SwiperSlide><img src={photo_history_04} /></SwiperSlide>
                    <SwiperSlide><img src={photo_history_05} /></SwiperSlide>
                    <SwiperSlide><img src={photo_history_06} /></SwiperSlide>
                    <SwiperSlide><img src={photo_history_07} /></SwiperSlide>
                    <SwiperSlide><img src={photo_history_08} /></SwiperSlide>
                    <SwiperSlide><img src={photo_history_09} /></SwiperSlide> 
                  </Swiper>
              </>
                
              </div>
          </div>

        

     </section>
      <div className='about_us'>
        <div className='content_about_us'>
          <div className='content_mision_vision'>
            <div className='content_mision'>
              <h3>Misión</h3>
              <p>Es apoyar a nuestros agremiados, ofreciendo alianzas comerciales con proveedores y laboratorios del mercado. Asimismo, nos comprometemos a brindar a la población productos de salud de manera accesible, pronta y eficaz.</p>
            </div>
            <div className='content_vision'>
              <h3>Visión</h3>
              <p>Es apoyar a nuestros agremiados, ofreciendo alianzas comerciales con proveedores y laboratorios del mercado. Asimismo, nos comprometemos a brindar a la población productos de salud de manera accesible, pronta y eficaz.</p>
            </div>
          </div>
          <div className='content_valores'>
            <h3>Valores</h3>
            <ul>
              <li>Valor 1</li>
              <li>Valor 2</li>
              <li>Valor 3</li>
              <li>Valor 4</li>
              <li>Valor 5</li>

            </ul>

          </div>
        </div>

      </div>

     {/* <section  id='about'>
      <AnimatedOnScroll animationClass="animate__fadeInUp about_text">
        <h2>¿Quienes somos?</h2>
        <p>Farmapronto® es una asociación de empresarios farmacéuticos independientes que operan bajo una identidad corporativa unificada y un nombre comercial común. El modelo de negocio se basa en un contrato de uso de marca. La finalidad de este esquema es posicionarnos como la cadena con el mayor número de farmacias independientes afiliadas, permitiéndonos competir eficazmente con grandes cadenas comerciales regionales.</p>
      </AnimatedOnScroll>
      

      <div className='grid_card_information'>
        <AnimatedOnScroll animationClass='card_information animate__fadeInUp'>
          <div className='circle_svg'>
            <GiSupersonicArrow />
          </div>
          <h3>Misión</h3>
          <p>Es apoyar a nuestros agremiados, ofreciendo alianzas comerciales con proveedores y laboratorios del mercado. Asimismo, nos comprometemos a brindar a la población productos de salud de manera accesible, pronta y eficaz.</p>
        </AnimatedOnScroll>

        <AnimatedOnScroll animationClass='card_information animate__fadeInUp'>
          <div className='circle_svg'>
            <FaRegLightbulb />
          </div>
          <h3>Visión</h3>
          <p>Es apoyar a nuestros agremiados, ofreciendo alianzas comerciales con proveedores y laboratorios del mercado. Asimismo, nos comprometemos a brindar a la población productos de salud de manera accesible, pronta y eficaz.</p>
        </AnimatedOnScroll>

        <AnimatedOnScroll animationClass='card_information animate__fadeInUp'>
          <div className='circle_svg'>
            <IoDiamondOutline />
          </div>
          <h3>Valores</h3>
          <p>Es apoyar a nuestros agremiados, ofreciendo alianzas comerciales con proveedores y laboratorios del mercado. Asimismo, nos comprometemos a brindar a la población productos de salud de manera accesible, pronta y eficaz.</p>
        </AnimatedOnScroll>

      </div>

     </section> */}

     {/* <svg className='wave_about' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#094894" fill-opacity="1" d="M0,160L1440,128L1440,0L0,0Z"></path></svg> */}

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

