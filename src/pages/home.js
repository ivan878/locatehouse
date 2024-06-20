import React from 'react';
import { Header } from '../components/header';
import '../styles/home.css';
import background from '../assets/barne.png'
import { Button3 } from '../components/button';
import {Gallerie} from '../components/gallerie';
import { Tabs ,Carousel,Input,Button,Space } from 'antd';
import { Bottombar } from '../components/bottombar';
import cardimage from '../assets/images3.png';


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
       
          <div className='apropos mgt'>
       
        <Carousel
        autoplay={true}
        dots={false}
        className='car' afterChange={onChange}>
        <div className='car-content'>
        <div class="cart">
              <div></div><img src={cardimage} alt="Card Image" class="card-image" />
              <div class="card-content">
                  <h2 class="card-title">Card Title</h2>
                  <p class="card-description">This is a description of the card. It can be a brief summary of the content.</p>
                  <button class="card-button">Read More</button>
              </div>
          </div>

         
        </div>
        
        
      </Carousel>
          {/* <h3 className='text-ap'>A PROPOS</h3>
            <span className='text-ap'>lorems dans l'arborescence DOM. Dans le même temps, le rendu du canevas interdit le style CSS, vous devrez donc utiliser les options intégrées pour cela, ou créer un plugin ou un type de graphique personnalisé pour tout restituer à votre guise.
Performance</span> */}
             
          </div>  
       
        <div className=''>

        </div>
        <div className='newsletter'>
        <h5 className='text-ap padding'>NEWSLETTER</h5>
          <div className='inp'>
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