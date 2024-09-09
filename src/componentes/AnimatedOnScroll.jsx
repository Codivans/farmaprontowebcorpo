import React, { useEffect, useRef, useState } from 'react';
import 'animate.css'; // Si instalaste animate.css, importa la hoja de estilos

const AnimatedOnScroll = ({ animationClass, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Detenemos el observer una vez que se activa
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Cleanup
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`animate__animated ${isVisible ? animationClass : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
