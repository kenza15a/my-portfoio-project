import React, { useState } from 'react'
import './ProjectCard.css'
function ProjectCard({projectTitle,projectImage,projectURL,projectTechs}) {
    const technologiesParagraph = projectTechs.join(', ');
  

    return (
    <>
<article className='project__card'>
    <div>
    <img className="project__item__image" src={projectImage} alt={projectTitle}/>
    </div>
     <h3>{projectTitle}</h3>
     <div className="project__card__cta"> <a className='btn btn-primary' href={projectURL}>See on github</a></div>
    
     <div className='project__technologies'>
      <h5 className="card__section__title">Used technolgies</h5>
     <p id="techs"  > {technologiesParagraph}</p>
</div>
    </article>
    
    
    </>
  )
}

export default ProjectCard
