import React from 'react'
import './Contact.css'
function ContactCard({contactOption,contactInfo,contactUrl,contactText} ) {
  return (
    <>
    <article className='contact_card'>

    <h4 className='contact__card__icon'>
    {contactOption}
  </h4>
  <h5>{contactInfo}
  </h5>
  <a href={contactUrl} target="_blank" rel="noreferrer">{contactText}</a>
    </article>
    </>
  )
}

export default ContactCard
