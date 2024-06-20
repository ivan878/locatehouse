import React from 'react';
import '../styles/galleri.css';
import barne from '../assets/barne.png';
import images1 from '../assets/images1.png';
import images2 from '../assets/images2.png';
import images3 from '../assets/images3.png';
import images4 from '../assets/images4.png';
import images5 from '../assets/images5.png';
import images6 from '../assets/images6.png';
import images7 from '../assets/images7.png';
import images8 from '../assets/images8.png';

export const Gallerie = () => {

    const tab  = [images1,images2,images3,images4,images5,images6,images7,images8];
  return (
    <div className='body-gal'>
    
            {/* {
                Array.from({length: img}).map((tab,index)=> ( */}
                 {tab.map((imag, index) => (
                      <div className='cart-bloc1'>
                      <div className='ct'>  <img className='responsive-image' src={imag} alt="Image"></img> </div>
                      <div className='inf-ch row'>
                         <div><h4 className='text-bloc1'>capacité</h4></div>
                         <div><span>🔶🔶🔶🔶 {index} </span></div>
                      </div>
                      <div className='mgt'>
                         <span className='text-2'>Simple</span>
                         <div className='row'>
                             <span className='text-price'>135 000Fcfa</span>
                             <span className='mgl text-month'>/Mois</span>
                         </div>
                      </div>
                 </div>
    ))}
                  
                {/* ))
            } */}
       
    </div>
  )
}
