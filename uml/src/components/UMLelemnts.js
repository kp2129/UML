import React from 'react';
import '../App.css'; 

function UMLelemnts() {
  return (
    <div className='slide'>
      <h1 className='slide-title'>Komponentu diagramma UML</h1>
      <p className='slide-text'>
        Komponentu diagramma UML (Vienotais modelēšanas valodas) attēlo
        programmatūras sistēmas struktūru. Tā ilustrē sistēmas augsta līmeņa
        arhitektūru un tās komponentes.
      </p>
      <img
        src='https://cdn-images.visual-paradigm.com/guide/uml/what-is-component-diagram/02-component-diagram-overview.png'
        alt='Komponentu diagramma'
        className='slide-image'
      />
      <p className='slide-text'>
        Komponentu diagrammā varat attēlot dažādus UML elementus, piemēram,
        komponentes, interfeisus, atkarības un citus, lai ilustrētu, kā dažādas
        sistēmas daļas mijiedarbojas un sazinās starp sevi.
      </p>
    </div>
  );
}

export default UMLelemnts;
