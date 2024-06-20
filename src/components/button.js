import React from 'react';
import '../styles/component.css';
import google from '../assets/google.png'
export const Button = () => {
  return (
    <button className='btn-prymari mgl'>
        register
    </button>
  )
}
export const Button2 = () => {
    return (
      <button className='btn-prymari2 '>
          log in
      </button>
    )
  }
  export const Button3 = () => {
    return (
      <button className='btn-prymari3'>
          Reservation
      </button>
    )
  }
  export const Buttonl = () => {
    return (
      <button className='btn-prymaril'>
          connexion
      </button>
    )
  }
  export const ButtonGo = () => {
    return (<div className='btn-google'>
          <img className='image-style1' src={google} alt="Image"></img>
          <span className='text-btn-go'>continuer avec Google</span>
    </div>
     
    )
  }


