import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { LuBookMinus } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";

import './Navbar.css'
function Navbar() {
  const[activeNav,setActiveNav]=useState('#');
  return (
    <>
    <nav className='navigation'>
      <a href="#" onClick={()=>setActiveNav("#")}className={activeNav === "#" ? "active" :""}><IoHomeOutline /></a>
      <a href="#about" onClick={()=>setActiveNav("#about") }className={activeNav === "#about" ? "active" :""}><CiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav === "#experience" ? "active" :""}><LuBookMinus /></a>
      <a href="#services" onClick={()=>setActiveNav("#services")}className={activeNav === "#services" ? "active" :""}><RiServiceLine /></a>
      <a href="#projects"  onClick={()=>setActiveNav("#projects")}className={activeNav === "#projects" ? "active" :""}><GoProjectSymlink /></a>
      <a href="#contact"  onClick={()=>setActiveNav("#contact")}className={activeNav === "#contact" ? "active" :""}><SlEnvolopeLetter />
</a>
      </nav>
      </>
  )
}

export default Navbar
