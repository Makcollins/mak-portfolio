import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project: { imageSrc, title, description, skills, demo, source } }) => {
    return (
        <div className={styles.container}>
            <a href={demo}><img src={imageSrc} alt={`${title} image`}
                className={styles.img} /></a>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return (
                        <li key={id} className={styles.skill}>{skill}</li>
                    )
                    })
                }
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Live</a>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    )
}

export default ProjectCard
