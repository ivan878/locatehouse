import React from 'react';
import { Header } from '../components/header';
import '../styles/home.css';
import background from '../assets/barne.png'
import { Button3 } from '../components/button';
import {Gallerie} from '../components/gallerie';
import { Tabs ,Carousel,Input,Button,Space } from 'antd';
import { Bottombar } from '../components/bottombar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cardimage from '../assets/images3.png';
import images2 from '../assets/images2.png';
import images3 from '../assets/images3.png';
import images4 from '../assets/images4.png';
import images5 from '../assets/images5.png';
import images6 from '../assets/images6.png';
import images7 from '../assets/images7.png';
import images8 from '../assets/images8.png';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Home () {
  
    const onChange = (key) => {
        console.log(key);
      };
    const items = [
        {
          key: '1',
          label: 'Tout',
          children: <Gallerie/>,
        },
        {
          key: '2',
          label: 'Appartement',
          children: <Gallerie/>,
        },
        {
          key: '3',
          label: 'Chambre',
          children: <Gallerie/>,
        },
      ];
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Ajoute l'autoplay
        autoplaySpeed: 3000,
      };
      const images   = [images2,images3,images4,images5,images6,images7,images8];
    return (<div className='home'>
        <Header/>
    
 
        <div className='barner'
         style={{ backgroundImage: `url(${background})` }}>
            <div className='alt-c'>
                <div className='center-alt'>
                    <h1>Welcom Back </h1>
                    <h3>cliqué sur le bouton pour une reservation</h3>
                    <Button3/>
                </div>
            </div>
        </div>
        <div className='tab '>
          <div className='bloc1'>
              <div className='deco'></div>
              <h3 className='deco-text'>NOS APPARTEMENTS</h3>
          </div>
         <Tabs  tabBarGutter={8} 
                tabBarStyle={{fontWeight:'w300', color: 'grey', borderRadius: '5px' }} 
                centered={true}
                defaultActiveKey="1"
                 type="card" items={items} 
                 onChange={onChange} />
        </div>
        <div className='block-2-av '>

        </div>
       
          <div className='apropos'>
          <Slider {...settings} className='car'  >
        {images.map((image, index) => (
          // <div key={index}>
          //   <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          // </div>
          <div className='pding'>
          <div className="cart" key={index}>
          <div></div><img src={image} alt={`Slide ${index}`} className="card-image" />
          {/* <div className="card-content">
              <h2 className="card-title">Card Title</h2>
              <p className="card-description">This is a description of the card. It can be a brief summary of the content.</p>
              <button className="card-button">Read More</button>
          </div> */}
      </div>
      </div>
        ))}
      </Slider>
{/*        
        <Carousel
        autoplay={true}
        dots={false}
        autoplaySpeed={2000}
        className='car' afterChange={onChange}>

    
          <div>
          <div className='car-content'>
        <div class="cart">
              <div></div><img src={cardimage} alt="Card-Image" class="card-image" />
              <div class="card-content">
                  <h2 class="card-title">Card Title</h2>
                  <p class="card-description">This is a description of the card. It can be a brief summary of the content.</p>
                  <button class="card-button">Read More</button>
              </div>
          </div>
          

         
        </div>
        </div>
      <div>
        <h3 >2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
        
        
      </Carousel> */}
          {/* <h3 className='text-ap'>A PROPOS</h3>
            <span className='text-ap'>lorems dans l'arborescence DOM. Dans le même temps, le rendu du canevas interdit le style CSS, vous devrez donc utiliser les options intégrées pour cela, ou créer un plugin ou un type de graphique personnalisé pour tout restituer à votre guise.
Performance</span> */}
             
          </div>  
       
        <div className=''>

        </div>
        <div className='newsletter'>
        <h5 className='text-ap padding'>NEWSLETTER</h5>
          <div className='inpt'>
                <Space.Compact
            style={{
              width: '100%',
            }}
          >
            <Input placeholder='Email'/>
            <Button size='large' type="primary">Submit</Button>
          </Space.Compact>
          </div>
        </div>
        <div>
             <Bottombar/>
        </div>
     
    </div>
    )
  
}

export default Home;