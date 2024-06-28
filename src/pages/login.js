import React from 'react';
import { Input } from 'antd';
import '../styles/login.css'
import {  ButtonGo, Buttonl } from '../components/button';
import logo from '../assets/logoh.png';

export const Login = () => {
  return (
    <div className='b-login'>
      
        <div className='log'>
            <div> <img className='image-style' src={logo} alt="Image"></img> </div>
             <h2 className='text-lo1'>Hotel</h2>
             <span className='text-lo2'>Remplir pour continuer</span>
             
            <div className='form-g'><Input className="inp" placeholder="Basic usage" /></div>
            <div className='form-g'><Input.Password className="inp" placeholder="Basic usage" /></div>
            <div className='form-g'> <Buttonl/> </div>
            <h6 className='text-lo'>or</h6>
            <ButtonGo/>
            <div className='row mgt center'>
                <span className='text-register'>pas de compte?</span>
                <span className='register-bt'>s'inscrire</span>
            </div>
        </div>
       
    </div>
  )
}
