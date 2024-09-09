import React, { useState, useEffect } from 'react'
import farmapronto from './../src/assets/farmapronto.png'
import { GiSupersonicArrow } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import imgbannerflag from './../src/assets/banner_flag.JPG'
import nadro from './../src/assets/nadro.png'
import marzam from './../src/assets/marzam.png'
import fanasa from './../src/assets/fanasa.png'
import farmamayoreo from './../src/assets/farmamayoreo.svg'
import AnimatedCounter from './componentes/AnimatedCounter';
import AnimatedOnScroll from './componentes/AnimatedOnScroll';
import { Footer } from './componentes/Footer';

function App() {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Curso Capacitación Nadro 23 y 24 de Septiembre 2024', 'Junta General de Agremiados 31 de Octubre 2024', 'Feria comercial ESQUIFARMA 28 Noviembre 2024'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Cambia la palabra cada 2 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <>
     <header>
        <div className='flag_events'>
          <span>{words[currentWordIndex]}.</span>
        </div>
        <div className='wrap_marge wrap_header'>
          <img src={farmapronto} className='brand' />
          <nav>
            <ul>
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Plan de lealtad</li>
              <li>Catalogo</li>
              <li>Sucursales</li>
              <li>Contacto</li>
            </ul>
          </nav>
        </div>
     </header>
     <section className='wrap_banner'>
        <img src='https://farmaprontosonora.com/wp-content/uploads/2022/10/Farmapronto-Sonora-1536x864.webp'/>
       
     </section>

     <section  id='about'>
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

     </section>
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

export default App
