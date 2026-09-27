import React from 'react';
import { getImageUrl, hand, heroImage } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Building Scalable Solutions with Clean Code & Intuitive Design.</h1>
        <p className="">
          <img src={hand()} alt="" />
          Hi, my name is <strong>Collins Makui</strong>
          --a Full-Stack Software Engineer dedicated to crafting high-performance web applications,
          robust backend architectures, and seamless user experiences
        </p>
        <a href="#projects" className="">View my work</a>
        <a href="#contact" className="">Contact Me</a>
      </div>
      <img src={heroImage()} alt="My Image" className={styles.heroImg} />
      {/* <div className={styles.topBlur}></div> */}
      {/* <div className={styles.bottomBlur}></div> */}
    </section>
  )
}

export default Hero
