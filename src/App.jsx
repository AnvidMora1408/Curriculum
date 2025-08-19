import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ASCIIText from './assets/blocks/ASCIIText/ASCIIText.jsx';
import ScrollFloat from './assets/blocks/ScrollFloat/ScrollFloat.jsx';
import ScrambledText from './assets/blocks/ScrambledText/ScrambledText.jsx';
import RotatingText from "./assets/blocks/RotatingText/RotatingText.jsx";

const App = () => {
    return (
        <div className="container">

            <Parallax pages={4}>
                <ParallaxLayer speed={1}>
                        <div>
                        <ASCIIText
                            text='Andrés'
                            enableWaves={true}
                            asciiFontSize={8}
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.4}>
                    <div className="presentación">
                        <h1>Hola, mucho gusto!</h1>
                        <p>Mi nombre es Andrés David Gómez Morales, vengo de Barrancabermeja, tengo 18 años y soy estudiante de ingeniería de software de 4to semestre.</p>
                        <img src="src/assets/images/TqmIng.png" alt="yoimage" width="350"/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.2}>
                    <div className="presentación2">
                        <h1>Skills</h1>
                        <p>Mi nombre es Andrés David Gómez Morales, vengo de Barrancabermeja, tengo 18 años y soy estudiante de ingeniería de software de 4to semestre.</p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default App
