import React from 'react'
import './Card.css'
function Card({icon,title,subTitle}) {
  return (
   <>
   <article className='card__component'>
    <div className='card__icon'>{icon}</div>
    <h5 className='card__title'>{title}</h5>
    <small className='card__subtitle'>{subTitle}</small>

    </article>
    </>
  )
}

export default Card
