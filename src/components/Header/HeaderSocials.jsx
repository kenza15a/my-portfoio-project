import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

function HeaderSocials() {
  return (
   <>
   <div className="header__socials">
    <a href="https://www.linkedin.com/in/kenza-fil/" target='_blank' rel="noreferrer"><FaLinkedin />

</a>
    <a href="https://github.com/kenza15a" target='_blank' rel="noreferrer"><FaSquareGithub />
</a>
    <a href="https://www.behance.net/kenzafilali?log_shim_removal=1" target='_blank' rel="noreferrer"><FaBehanceSquare />
</a>
   </div>
   </>
  )
}

export default HeaderSocials
