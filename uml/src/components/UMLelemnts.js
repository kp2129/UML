import React from 'react';
import '../App.css';

function UMLelements() {
  return (
    <div className='slide'>

      <div className='inside-slide'>
        <h1 className='slide-title'>Komponentu diagramma UML</h1>
        <div className='slide-text'>
          <p>
            Komponenšu diagrammā tiek izmantoti dažādi UML elementi, lai attēlotu sistēmas komponentes un to attiecības. Visbiežāk izmantotie UML elementi komponenšu diagrammā ietver:
          </p>

          <div className='about-text'>
            <ol className="component-list">
              <li>
                Komponentes (Components): Komponenšu diagrammas centrālie elementi ir pašas komponentes. Katra komponente var attēlot konkrētu programmatūras bloku, paketi, moduli vai sistēmas komponenti.
              </li>
              <li>
                Interfeisi (Interfaces): Interfeisi norāda, kā komponentes mijiedarbojas viena ar otru. Tie ietver metodes, ko citi komponenti var izsaukt, lai sazinātos ar šo komponenti.
              </li>
              <li>
                Atkarības (Dependencies): Atkarības ir līnijas, kas savieno komponentes un parāda, kāda veida saikne ir starp tām. Atkarības norāda, ka viena komponente izmanto citu komponenti vai ir atkarīga no tās.
              </li>
              <li>
                Generalizācijas (Generalizations): Ja viena komponente ir specializācija vai apakškomponente citai komponentei, tiek izmantota generalizācija. Tā attēlo hierarhiju starp komponentēm un norāda, ka viena komponente mantos vai paplašinās citas komponentes funkcionalitāti.
              </li>
            </ol>
            <img
              src='https://cdn-images.visual-paradigm.com/guide/uml/what-is-component-diagram/02-component-diagram-overview.png'
              alt='Komponentu diagramma'
              className='slide-image'
            />
          </div>

        </div>
      </div>

    </div>
  );
}

export default UMLelements;
