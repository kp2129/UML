import React from 'react';
import '../App.css'; 

function ExampleExplanation() {
  return (
    <article className='slide'>
     <h1 className='slide-title'>Komponentu diagramma UML</h1>
    <p>Klases UML diagramma ir visizplatītākais diagrammas veids programmatūras dokumentēšanai. 
      Tā kā lielākā daļa programmatūras, kas tiek radīta mūsdienās, joprojām ir balstīta uz objektorientētās programmēšanas paradigmu, 
      klašu diagrammu izmantošana programmatūras dokumentēšanai ir vispareizākais risinājums. Tas notiek tāpēc, ka OOP pamatā ir klases 
      un attiecības starp tām.</p>
    <img
      src='https://tallyfy.com/wp-content/uploads/2018/02/Communciation-Diagram-1024x683.png'
      alt='Komponentu diagramma'
      className='slide-image'
    />
    <p>
    Īsāk sakot, klašu diagrammās ir ietvertas klases, kā arī to atribūti (saukti arī par datu laukiem) un uzvedība (saukta 
    arī par dalībfunkcijām). Konkrētāk, katrai klasei ir 3 lauki: klases nosaukums augšpusē, klases atribūti tieši zem nosa
    ukuma, klases darbības/rīcības apakšā. Attiecības starp dažādām 
    klasēm (attēlotas ar savienojošo līniju) veido klašu diagrammu.
    </p>
  </article >
  );
}

export default ExampleExplanation;
