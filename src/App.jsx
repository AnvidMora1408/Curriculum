import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ASCIIText from './assets/blocks/ASCIIText/ASCIIText.jsx';
import LightRays from './assets/Bgs/LightRays/LightRays.jsx';
import Carousel from "./Components/Carousel/Carousel.jsx";
import GradientText from "./assets/blocks/GradientText/GradientText.jsx";
import TiltedCard from "./Components/TiltedCard/TiltedCard.jsx";
import CircularGallery from "./Components/CircularGallery/CircularGallery.jsx";
import ScrollFloat from "./assets/blocks/ScrollFloat/ScrollFloat.jsx";

const App = () => {
    // Código de ejemplo para los bloques
    const codeExample1 = `function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}`;

    const codeExample2 = `#include <bits/stdc++.h>
    using namespace std;
    
    int main() {
    \tfloat a=5;
    \tfloat b=6;
    \tint resta=0;
    \tint suma=0;
    \tint multi=0;
    \tfloat división=0;
    
    resta = a-b;
    suma = a+b;
    multi = a*b;
    división = a/b;
    
    std::cout << "El valor de la resta de "<< a << " - " << b << " = " <<resta<< std::endl;
    std::cout << "El valor de la suma de "<< a << " + " << b << " = " <<suma<< std::endl;
    std::cout << "El valor de la multiplicación de "<< a << " * " << b << " = " <<multi<< std::endl;
    std::cout << "El valor de la división de "<< a << " / " << b << " = " <<división<< std::endl;

}`;

    const codeExample3 = `class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = { value, left: null, right: null };
    
    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    this.insertNode(this.root, newNode);
  }
  
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}`;

    return (
        <div className="container">
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                    backgroundColor: "black",
                }}
            >
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.05}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>
            <Parallax pages={6}>
                <ParallaxLayer speed={1}>
                    <ASCIIText
                        text='¿Quién?'
                        enableWaves={true}
                        asciiFontSize={8}
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.4}>
                    <div className="presentación">
                        <div className="texto-container">
                            <h1>Me presento:</h1>
                            <p>
                                Mi nombre es Andrés David Gómez Morales, vengo de Barrancabermeja,
                                tengo 18 años y soy estudiante de ingeniería de software de 4to semestre.
                            </p>
                        </div>
                        <div className="imagen-container">
                            <img src="src/assets/images/TqmIng.png" alt="yoimage" width="350" />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.2}>
                    <div className="presentación2">
                        <div className="imagen-container">
                            <div style={{
                                height: '600px',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Carousel
                                    baseWidth={300}
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    pauseOnHover={true}
                                    loop={true}
                                    round={false}
                                />
                            </div>
                        </div>
                        <div className="texto-container">
                            <GradientText
                                colors={["#545454", " #f2f2f2", "#545454", " #f2f2f2", "#7d7d7d"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="custom-class"
                            >
                                Skills
                            </GradientText>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.2}>
                    <div className="hobbies-section">
                        <h1>Hobbies</h1>
                        <div className="cards-grid">
                            <TiltedCard
                                imageSrc="src/assets/images/Dibujo.jpeg"
                                altText="Dibujo"
                                captionText=""
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <p className="tilted-card-demo-text">
                                    </p>
                                }
                            />
                            <TiltedCard
                                imageSrc="src/assets/images/Volley.jpeg"
                                altText="Volleyball"
                                captionText=""
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <p className="tilted-card-demo-text">
                                    </p>
                                }
                            />
                            <TiltedCard
                                imageSrc="src/assets/images/Gaming.jpeg"
                                altText="Gaming"
                                captionText=""
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <p className="tilted-card-demo-text">
                                    </p>
                                }
                            />
                            <TiltedCard
                                imageSrc="src/assets/images/Speedcubing.jpeg"
                                altText="Speedcube"
                                captionText=""
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <p className="tilted-card-demo-text">
                                    </p>
                                }
                            />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.2}>
                    <div className="ejercicios-section">
                        <h1>Ejercicios</h1>
                        <div className="code-blocks-container">
                            <div className="code-block">
                                <h3>Componente React</h3>
                                <SyntaxHighlighter
                                    language="jsx"
                                    style={tomorrow}
                                    customStyle={{
                                        borderRadius: '10px',
                                        fontSize: '14px',
                                        maxHeight: '400px',
                                        overflow: 'auto'
                                    }}
                                >
                                    {codeExample1}
                                </SyntaxHighlighter>
                            </div>

                            <div className="code-block">
                                <h3>Operaciones básicas</h3>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={tomorrow}
                                    customStyle={{
                                        borderRadius: '10px',
                                        fontSize: '14px',
                                        maxHeight: '400px',
                                        overflow: 'auto'
                                    }}
                                >
                                    {codeExample2}
                                </SyntaxHighlighter>
                            </div>

                            <div className="code-block">
                                <h3>Hola mundo</h3>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={tomorrow}
                                    customStyle={{
                                        borderRadius: '10px',
                                        fontSize: '14px',
                                        maxHeight: '400px',
                                        overflow: 'auto'
                                    }}
                                >
                                    {codeExample3}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={0.2}>
                    <div style={{ height: '600px', position: 'relative' }}>
                        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={6} speed={0.2}>

                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default App