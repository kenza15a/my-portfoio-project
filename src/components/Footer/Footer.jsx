import React from 'react'
import './Footer.css'

import FooterSocials from './FooterSocials'
function Footer() {
  return (
    <>
    <section className='container footer__container'>
      <div className="footer__infos">
        <FooterSocials/>
      </div>
      <div className="footer__rights">
       <p>Kenza Filali - © Tous droits réservés 2024</p>
      </div>

    </section>
    </>
  )
}

export default Footer
