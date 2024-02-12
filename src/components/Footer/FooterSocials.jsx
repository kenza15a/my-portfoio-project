import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
function FooterSocials() {
    return (
        <>
        <div className="footer__socials">
         <a href="https://www.linkedin.com/in/kenza-fil/" target='_blank' rel="noreferrer"><FaLinkedin className='footer__icon' />
     
     </a>
         <a href="https://github.com/kenza15a" target='_blank' rel="noreferrer"><FaSquareGithub className='footer__icon' />
     </a>
         <a href="https://www.behance.net/kenzafilali?log_shim_removal=1" target='_blank' rel="noreferrer"><FaBehanceSquare  className='footer__icon'/>
     </a>
        </div>
        </>
       )
}

export default FooterSocials
