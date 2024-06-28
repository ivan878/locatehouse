import React from 'react';
import  '../styles/component.css';
import logoImage from '../assets/logoh.png';
import { Link } from 'react-router-dom';
import { Button, Button2 } from './button';


export const Header = () => {
    const icon =5;
  return (
    <div className='navsyst'>
        <div className='head1'>
        <div className='head'>
            <div className='content-head'>
                <div className='logo-ico soc-media row'>
                <Link to="/"> <img src={logoImage} alt="Logo Black-Comics" className="image-style" /></Link> 
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
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/about">About</Link></li>
                        <li> <Link to="/service">Services</Link></li>
                        <li> <Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className='btn-content row mgl'>
                  
                   <Link to="/login"> <div><Button/></div> </Link>
                    
                </div>  
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
