import React from 'react';
import '../styles/bottom.css';
import logoImage from '../assets/logoh.png';
import appstore from '../assets/app.png';
import google from '../assets/gg.png';

export function Bottombar ()  {
  return (
    <div className='bottom'>
        <div className='content-bottom'>
          <div className='social'>
            <div> <img src={logoImage} alt="Logo Black-Comics" className="image-style" /></div>
            <text className='text-btm'>HOMELOCATE</text>
            <div className='row-social'>
                  <div className='media-social'></div>
                  <div className='media-social'></div>
                  <div className='media-social'></div>
                  <div className='media-social'></div>
              </div>
            </div>
            <div className='contact-form'>
                <h4 className='text-btm'>CONTACT INFOS</h4>
                <div className='row-info'>
                   <div className='icon-inf'></div>
                   <div className=''><span className='text-btm2 mgl'>AdresseEmail@gmail.com</span></div>
                </div>
                <div className='row-info'>
                   <div className='icon-inf'></div>
                   <div className=''><span className='text-btm2 mgl'>Douala, Akwa, Cameroon</span></div>
                </div>
                <div className='row-info'>
                   <div className='icon-inf'></div>
                   <div className=''><span className='text-btm2 mgl'> 
                   +(237)620 742 204</span></div>
                </div>
            </div>
            <div className='download-btn'>
              <h4 className='text-btm'>OBTENIR L APPLICATION</h4>
              <div className='btn-download row-info mgt'>
                  <div>  <img src={appstore} alt="Logo Black-Comics" className="image-style" /></div> <span className='btn-text-size'>Télécharger</span>
              </div>
                {/* <button>Télécharger</button> */}
                <div className='btn-download row-info mgt'>
                  <div>  <img src={google} alt="Logo Black-Comics" className="image-style" /></div> <span className='btn-text-size'>Télécharger</span>
              </div>
            </div>
        </div>
        <div className='inf-bottom'>
            <span className='text-copy'>Copyright@ 2024</span>
        </div>
    </div>
  )
}
