import React from 'react';
import { aboutImage, cursorIcon, dev } from '../../utils';
import styles from './About.module.css';

const About = () => {
    return (
        // <section className={styles.container} id='about'>
        <section className="w-full" id='about'>
            <div className="flex flex-col items-center max-w-7xl mx-auto gap-4">
                <h2 className="text-cyan-700 text-sm">ABOUT ME</h2>
                <h3 className="font-bold text-2xl">Engineering with purpose and precision</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex bg-white flex-col gap-4 border rounded-xl border-gray-200 shadow-sm p-6">
                        <span className="bg-cyan-100 w-6 rounded-sm text-center">ic</span>

                        <h4 className="font-bold text-2xl">Full-Stack Arhitecture</h4>
                        <p className="text-gray-500 font-medium text-xl">Designing robust, end-to-end systems with high-performing frontend frameworks connected to secure,
                            scalable microservices and APIs.</p>

                    </div>
                    <div className="flex bg-white flex-col gap-4 border rounded-xl border-gray-200 shadow-sm p-6">
                        <span className="bg-cyan-100 w-6 rounded-sm text-center">ic</span>

                        <h4 className="font-bold text-2xl">Full-Stack Arhitecture</h4>
                        <p className="text-gray-500 font-medium text-xl">Designing robust, end-to-end systems with high-performing frontend frameworks connected to secure,
                            scalable microservices and APIs.</p>

                    </div>
                    <div className="flex bg-white flex-col gap-4 border rounded-xl border-gray-200 shadow-sm p-6">
                        <span className="bg-cyan-100 w-6 rounded-sm text-center">ic</span>

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
