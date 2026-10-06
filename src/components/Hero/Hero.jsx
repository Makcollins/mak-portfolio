import React from 'react';
import { getImageUrl, hand, heroImage } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row justify-center md:justify-between">
          <div className="flex flex-col gap-4">
            <div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800/50 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for software engineering roles
              </div>
            </div>
            {/* Title */}
            <h1 className="md:text-4xl lg:text-6xl font-bold font-sans">Building <span className="text-cyan-700">scalable</span> <span className="text-sky-500">solutions</span> with
              clean code & intuitive design.</h1>
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600 dark:text-cyan-500">Collins Makui</span>.
              -a Full-Stack Software Engineer dedicated to crafting high-performance web applications,
              robust backend architectures, and seamless user experiences
            </p>
            <div className="flex gap-2">
              <button className="border border-gray-400 rounded-sm py-1 px-2"><a href="#projects">View my work</a></button>
              <button className="border border-gray-400 rounded-sm py-1 px-2"><a href="https://github.com/Makcollins/">Git hub</a></button>

            </div>
          </div>
          <img src={heroImage()} alt="My Image" className={`md:w-[35%] ${styles.heroImg}`} />
        </div>
      </div>
    </section>
  )
}

export default Hero
