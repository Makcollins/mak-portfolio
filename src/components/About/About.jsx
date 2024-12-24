import React from 'react';
import { aboutImage } from '../../utils';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.imageContainer}>
            <h1 className={styles.about}>ABOUT</h1>
            <img src={aboutImage()} alt="" />
        </div>
        <div className={styles.content}>
            <div className={styles.developer}>
                <h2 className={styles.devTitle}>
                    Front-end developer
                </h2>
                <p className={styles.description}>
                    I am a front-end developer specializing in 
                    creating visually appealing and responsive websites.
                </p>
            </div>
            <div className={styles.developer}>
                <h2 className={styles.devTitle}>
                    Back-end developer
                </h2>
                <p className={styles.description}>
                    I develop back-end Systems and APIs.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About
