import React from 'react'
import './Contact.css'
function ContactCard({contactOption,contactInfo,contactUrl,contactText} ) {
    //mailto:kenza.filali.rahal@gmail.com
  return (
    <>
    <article className='contact_card'>

    <h4>
    {contactOption}
  </h4>
  <h5>{contactInfo}
  </h5>
  <a href={contactUrl}>{contactText}</a>
    </article>
    </>
  )
}

export default ContactCard
