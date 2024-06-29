import React from 'react'
import projects from '../../data/projects.json'
import styles from './Projects.module.css'
import ProjectsCard from './ProjectsCard';

const  Projects=() => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
      {projects.map((project,id)=>(
        
        <ProjectsCard key={id} project={project}/>
  ))}
      </div>
    </section>
  )
}

export default Projects
