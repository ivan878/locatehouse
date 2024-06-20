import React from 'react';
import  '../styles/component.css';
import logoImage from '../assets/logoh.png';
import { Button, Button2 } from './button';


export const Header = () => {
    const icon =5;
  return (
    <div className='body'>
        <div className='head1'>
        <div className='head'>
            <div className='content-head'>
                <div className='logo-ico soc-media row'>
                    <img src={logoImage} alt="Logo Black-Comics" className="image-style" />
                    <h3 className=''>HOTEL</h3>
                    {/* {
                        Array.from({length: icon}).map((_, index)=> (
                            <div className='mgl-10'><span >✨</span> </div>
                        ) )
                    } */}
                </div>
                <div className='menu bt row'>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className='btn-content row mgl'>
                    <Button2/>
                    <Button/>
                </div>  
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
