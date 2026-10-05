import React from 'react';
import { aboutImage, cursorIcon, dev } from '../../utils';
import styles from './About.module.css';

const About = () => {
    return (
        // <section className={styles.container} id='about'>
        <section className="w-full bg-slate-100/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80" id='about'>
            <div className="flex flex-col items-center max-w-7xl mx-auto px-10 md:py-8 gap-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-xs font-mono font-bold text-cyan-600 :text-cyan-400 uppercase tracking-widest mb-2">01. ABOUT ME</h2>
                    <h3 className="font-bold text-2xl">Engineering with purpose and precision</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <div className="flex bg-white flex-col gap-4 p-8 rounded-2xl :bg-darkcard 
                    border border-slate-200 :border-slate-800 shadow-sm glow-card transition-all">
                        <span className="w-12 h-12 rounded-xl bg-cyan-50 :bg-cyan-900/30 text-cyan-600 
                        :text-cyan-400 
                        flex items-center justify-center">ic</span>

                        <h4 className="font-bold text-2xl">Full-Stack Arhitecture</h4>
                        <p className="text-gray-500 font-medium text-xl">Designing robust, end-to-end systems with high-performing frontend frameworks connected to secure,
                            scalable microservices and APIs.</p>
                    </div>

                    <div className="flex bg-white flex-col gap-4 p-8 rounded-2xl dark:bg-darkcard 
                    border border-slate-200 dark:border-slate-800 shadow-sm glow-card transition-all">
                        <span className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 
                        :text-cyan-400 
                        flex items-center justify-center">ic</span>

                        <h4 className="font-bold text-2xl">Full-Stack Arhitecture</h4>
                        <p className="text-gray-500 font-medium text-xl">Designing robust, end-to-end systems with high-performing frontend frameworks connected to secure,
                            scalable microservices and APIs.</p>
                    </div>
                    <div className="flex bg-white flex-col gap-4 p-8 rounded-2xl dark:bg-darkcard 
                    border border-slate-200 :border-slate-800 shadow-sm glow-card transition-all">
                        <span className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 
                        :text-cyan-400 
                        flex items-center justify-center">ic</span>

                        <h4 className="font-bold text-2xl">Full-Stack Arhitecture</h4>
                        <p className="text-gray-500 font-medium text-xl">Designing robust, end-to-end systems with high-performing frontend frameworks connected to secure,
                            scalable microservices and APIs.</p>
                    </div>
                  
                </div>
            </div>
            {/* <h1 className={styles.title}>ABOUT</h1>
            <div className={styles.content}>
                <img src={aboutImage()} alt="" className={styles.aboutImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={dev()} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.devTitle}>
                                Front-end developer
                            </h3>
                            <p className={styles.description}>
                                I build stunning and highly responsive websites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.evTitle}>
                                Back-end developer
                            </h3>
                            <p className={styles.description}>
                                I create modern backend systems and APIs that are super reliable
                            </p>
                        </div>
                        <img src={dev()} alt="" />
                    </li>
                </ul>
            </div> */}

        </section>
    )
}

export default About
