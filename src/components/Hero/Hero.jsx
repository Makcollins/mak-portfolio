import React from 'react';
import { getImageUrl, heroImage } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey There! I'm Collins</h1>
            <p className={styles.description}>I enjoy creating beautiful web applications.
              If you're interested in learning more, feel free to reach out--I'd love to connect!
            </p>
            <a href="mailto:makcollins16@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage()} alt="My Image" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
