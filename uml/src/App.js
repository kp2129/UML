import './App.css';
import React, { useState, useEffect } from 'react';

import Slide1 from './components/whatisUML'; // Corrected import path
// import Slide2 from './components/Slide2';

const slides = [Slide1]; // Add more slide components as needed

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = (event) => { // Added 'event' as a parameter to the event handler
    // Handle scrolling logic here to navigate between slides
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSlide]);

  const SlideComponent = slides[currentSlide];

  return (
    <div>
      <SlideComponent />
    </div>
  );
}

export default App; // Changed the export name to 'App'
