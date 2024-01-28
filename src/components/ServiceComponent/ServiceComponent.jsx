import React from 'react'
import './ServiceComponent.css'
import { FaCheck } from "react-icons/fa6";

function ServiceComponent({serviceName,servicesList}) {
  return (
   <>
   <article className='service' id="integration_web">
<div className='service__header'>
<h3>
{serviceName}
</h3>
</div>

    <ul className='service__list' >
        {
            servicesList.map((service)=>{
                return(
                    <li key={service}>
 <FaCheck  className='service__list__icon'/>
    <p>{service}</p>
                    </li>
                )
            })
        }
    </ul>


</article>
   </>
  )
}

export default ServiceComponent
