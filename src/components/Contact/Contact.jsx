import React from 'react'
import './Contact.css'
import ContactCard from './ContactCard'
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
   <>
   <section id="contact">
    <h5></h5>
    <h2></h2>
    <div className='container contact__container'>
<div className="contact__options">
  <ContactCard contactOption={<CiMail />} contactInfo="kenza.filali.rahal@gmail.com" contactUrl="mailto:kenza.filali.rahal@gmail.com
  return (" contactText="envoyez-moi un mail" />
</div>

    </div>

   </section>
   </>
  )
}

export default Contact
