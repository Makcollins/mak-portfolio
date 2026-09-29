import React from 'react';
import { getImageUrl, hand, heroImage } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 :bg-cyan-900/30 border border-cyan-200 :border-cyan-800/50 text-cyan-700 :text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for software engineering roles
        </div>
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
              <button className="border border-gray-400 rounded-sm py-1 px-2" href="#projects">View my work</button>
              <button className="border border-gray-400 rounded-sm py-1 px-2" href="#github">Git hub</button>
              {/* <a href="#projects" className="">View my work</a>
            <a href="#contact" className="">Contact Me</a> */}
            </div>
          </div>
          <img src={heroImage()} alt="My Image" className={styles.heroImg} />
          {/* <div className={styles.topBlur}></div> */}
          {/* <div className={styles.bottomBlur}></div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
