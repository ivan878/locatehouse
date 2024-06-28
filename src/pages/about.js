import React from 'react';
import '../styles/about.css';
import { Header } from '../components/header';
import { Barner } from '../components/imagelists';
import photo from '../assets/images3.png';
import { useSpring, animated } from 'react-spring';

export const About = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <div className='body-about'>
        <div> <Header/> </div>
        <div> <Barner text={'About Us'}/> </div>
        <div className='bt-body'>
                <div className='row al-betw'>
                    <div className='prt-text'>
                        <h4>A PROPOS DE NOUS</h4>
                        <text>Une fonction de la page « À propos de nous » qui prend de plus en plus d’importance :
                             la présentation de la philosophie de l’entreprise. Les clients sont de plus en plus 
                             attentifs à la fabrication durable des produits et à la responsabilité sociale des entreprises. 
                             Utilisez les textes « À propos de nous » pour offrir des possibilités d’identification.
                        </text>
                    </div>
                    <div className='prt-image'>
                         <div className='ct'>  <img className='responsive-image' src={photo} alt="Image"></img> </div>
                    </div>

                </div>
                
        </div>
          
        <animated.div style={fade} className="about-container">
      <h1>À propos de nous</h1>
      <div className="about-section">
        <img src={photo} alt="Notre équipe" className="about-image" />
        <div className="about-text">
          <p>
            Bienvenue sur notre page À propos. Nous sommes une entreprise dédiée à fournir les meilleurs services à nos clients.
            Notre mission est de créer des solutions innovantes et de haute qualité qui répondent aux besoins et aux attentes de notre clientèle.
          </p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-text">
          <p>
            Notre équipe est composée de professionnels passionnés et expérimentés qui travaillent ensemble pour atteindre l'excellence.
            Nous croyons en l'importance de l'innovation, de la collaboration et de l'engagement envers nos valeurs fondamentales.
          </p>
        </div>
        <img src={photo} alt="Notre mission" className="about-image" />
      </div>
      <div className="about-section">
        <div className="about-text">
          <p>
            Merci de visiter notre page. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter.
          </p>
        </div>
      </div>
    </animated.div>

    </div>
  )
}
