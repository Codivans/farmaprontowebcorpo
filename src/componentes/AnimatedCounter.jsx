import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ endValue, duration, step = 1 }) => {
  const [currentValue, setCurrentValue] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      let startValue = 0;
      const increment = step;

      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          setCurrentValue(endValue);
          clearInterval(interval);
        } else {
          setCurrentValue(Math.floor(startValue));
        }
      }, duration / (endValue / step));

      return () => clearInterval(interval);
    }
  }, [isVisible, endValue, duration, step]);

  return <b ref={elementRef}>{currentValue}</b>;
};

export default AnimatedCounter;
