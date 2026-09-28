import React from 'react';
import { getImageUrl, hand, heroImage } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 py-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="md:text-6xl font-bold font-sans">Building <span className="text-cyan-700">scalable</span> <span className="text-sky-500">solutions</span> with
            clean code & intuitive design.</h1>
          <p className="text-gray-500 text-xl">
            {/* <img src={hand()} alt="" className="w-6 h-6" />  */}
            Hi, my name is <strong className="text-black">Collins Makui</strong>
            --a Full-Stack Software Engineer dedicated to crafting high-performance web applications,
            robust backend architectures, and seamless user experiences
          </p>
          <div className="flex gap-2">
            <button className="border border-gray-400 rounded-xs" href="#projects">View my work</button>
            <button className="border border-gray-400 rounded-xs" href="#github">Git hub</button>
            {/* <a href="#projects" className="">View my work</a>
            <a href="#contact" className="">Contact Me</a> */}
          </div>
        </div>
        <img src={heroImage()} alt="My Image" className={styles.heroImg} />
        {/* <div className={styles.topBlur}></div> */}
        {/* <div className={styles.bottomBlur}></div> */}
      </div>
    </section>
  )
}

export default Hero
