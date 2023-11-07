import './App.css';
import React, { useState, useEffect } from 'react';


import Slide1 from './components/UMLelemnts'; // Corrected import path
import Slide2 from './components/whatisUML';


const slides = [Slide1, Slide2] ; // Add more slide components as needed

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = (event) => {
    // Handle scrolling logic here to navigate between slides
    if (event.deltaY > 0 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (event.deltaY < 0 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSlide]);

  return (
    <div className="app-container">
      {slides.map((Slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <Slide />
        </div>
      ))}
    </div>
  );
}

export default App;