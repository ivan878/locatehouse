import React from 'react';
import { Header } from '../components/header';
import { Barner } from '../components/imagelists';
import { Input } from 'antd';

import '../styles/contact.css';
import { Buttonl } from '../components/button';
const { TextArea } = Input;
export const Contact = () => {
  return (
    <div className='body-contact'>
        <div> <Header/></div>
        <div> <Barner text={'CONTACT US'} /></div>
        <div className='content-contact'>
             <div className='form-contact'> <h5>Contactez nous</h5> </div>
             <div className='form-contact'> <span>Email</span>  <Input className="inp-contact" placeholder="Adresse Amail" /></div>
             <div className='form-contact'> <span>Message</span> <TextArea rows={4} placeholder="Entrez votre message" maxLength={6}/></div>
             <div className='form-contact'> <Buttonl/> </div>
        </div>
        <div className='logo-contact'>
            <div className='row'>
                <div className='icon-con'></div>  <div><h5 className='text-con mgl'>Facebook</h5></div> 
            </div>
            <div className='row'>
                <div className='icon-con'></div>  <div><h5 className='text-con mgl'>twitter</h5></div> 
            </div>
            <div className='row'>
                <div className='icon-con'></div>  <div><h5 className='text-con mgl'>whatsapp</h5></div> 
            </div>
        </div>
    </div>
  )
}
