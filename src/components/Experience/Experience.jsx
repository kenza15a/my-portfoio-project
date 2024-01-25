import React from 'react'
import './Experience.css'
import HTML from '../../assets/Html.png'
import CSS from '../../assets/css.png'
import JS from '../../assets/Js.png'
function Experience() {
  return (
   <section id="experience">
    Experience
    <div className='experience__anim'>
    <img src={HTML} id="html" alt="html"/>
     <img src={CSS} id="css" alt="html"/>
     <img src={JS} id="js" alt="html"/>

    </div>
   </section>
  )
}

export default Experience
