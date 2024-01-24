import React from 'react'
import './CalToAction.css'
function CallToAction({text,url}) {
  return (
    <>
        <a className='btn' href={url} target='_blank'  rel="noopener noreferrer" >{text}</a>
    </>
  )
}

export default CallToAction
