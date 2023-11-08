import './App.css';
import React, { useState, useEffect } from 'react';

import Slide from './components/intro';
import Slide1 from './components/UMLelemnts'; // Corrected import path
import Slide2 from './components/whatisUML';
import Slide3 from './components/whenUsed';
import Slide4 from './components/ExampleExplanation';
import Slide5 from './components/BlogDiagram';


const slides = [Slide , Slide2, Slide3, Slide1, Slide4 , Slide5] ; // Add more slide components as needed


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
    <main className="app-container">
      {slides.map((Slide, index) => (
        <article
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <Slide />
        </article>
      ))}
    </main>
  );
}

export default App;