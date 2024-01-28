import React from 'react'
import CallToAction from '../CallToAction/CallToAction'
import './Header.css'
import cv from '../../assets/CV_kenza_Filali.pdf'
import Me from '../../assets/kenza Filali 2024.png'
import HeaderSocials from './HeaderSocials'
function Header({FullName}) {
  return (
   <>

   <section> 
    <header>
    <div className="container header__container">
      <div className="header__infos"><h5>Bonjour je suis </h5>
      <h1>{FullName}</h1>
      <h5 className='text-light'>Développeuse Frontend</h5></div>
      
   
    <div className='call__to__action'>
      <CallToAction text="Mon CV " url={cv} />
      <CallToAction text="Contactez moi" url="#contact"/>
    </div>
    <HeaderSocials/>
    <a href="#contact" className='scroll__down'>Scrollez</a>
    <div className='me'>
    <img className='img' src={Me} alt=" Kenza Filali"/> 
    </div>

    
    </div>
    </header>
   </section>
 </>
  )
}

export default Header
