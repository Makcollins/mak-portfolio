import React from 'react';
import { aboutImage, cursorIcon } from '../../utils';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h1 className={styles.title}>ABOUT</h1>
            <div className={styles.content}>
                <img src={aboutImage()} alt="" className={styles.aboutImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon()} alt="" />
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
                        <img src={cursorIcon()} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.evTitle}>
                                Back-end developer
                            </h3>
                            <p className={styles.description}>
                                I create modern backend systems and APIs that are super reliable
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default About
