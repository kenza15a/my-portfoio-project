import React from 'react'
import HTML from '../../assets/Html.png'
import CSS from '../../assets/css.png'
import JS from '../../assets/Js.png'
import REACTicon from '../../assets/REACT.png'
import './Services.css'
import services from '../../data/infoTables'
import ServiceComponent from '../ServiceComponent/ServiceComponent'
function Services() {
  console.log(services)
  return (
   <>
  <section id='services'>
  <h5>Qu'est ce que je maitrise </h5>
   <h2> Mes compétences </h2>

   <div className="container services__container">
   <article className='services_anim'>
    <img src={HTML} id="html" alt="html"/>
     <img src={CSS} id="css" alt="CSS"/>
     <img src={JS} id="js" alt="JS"/>
     <img src={REACTicon} id="REACTicon" alt="REACTicon"/>
     
    </article>
    {services.map((service)=>{
                return(
                   <ServiceComponent serviceName={service.serviceName} servicesList={service.serviceList} key={service.serviceName}/>
                )
            })}


   </div>
 
    
    
    
  
  </section>
   </>
  )
}

export default Services
