import React from 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';


const Projects = () => {
  return (
    <section className="md:max-w-7xl px-10 md:mx-auto " id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                projects.map((project,id) => {
                    return(
                        <ProjectCard key={id} project={project}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Projects
