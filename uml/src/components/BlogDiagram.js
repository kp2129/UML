import React from 'react';
import img from '../img/uml.png';
import '../App.css'; 

function BlogDiagram() {
  return (
    <article  className='slide'>
       <h1 className='slide-title'>kā šī diagramma izskatās Bloga gadījumā?</h1>

      <img src={img}
      />
      <p>
   
      </p>
    </article >
  );
}

export default BlogDiagram;
