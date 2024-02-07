import React from 'react'
import './Projects.css'

import {works} from '../../data/infoTables';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {
  console.table(works)
  return (
   <>
   <section id="projects" className='Project__section'>
<h5>Mes Réalisations</h5>
<h2>Potfolio</h2>

<div className="container projects__container">
{works.map((work)=>{
  console.log(work.cover)
                return(
                  <ProjectCard key={work.title} projectTitle={work.title} projectURL={work.URL} projectImage={work.cover} projectTechs={work.technologies}/>
                )
            })}
</div>
   </section>
   </>
  )
}

export default Projects
