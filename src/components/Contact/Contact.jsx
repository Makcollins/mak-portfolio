import React from 'react';
import { FaGithub, FaLinkedin,FaRegCopyright } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.contact}> 
            <h2 className={styles.title}>Contact:</h2>
            <a href="mailto:makcollins16@gmail.com" className={styles.mail}>makcollins16@gmail.com</a>
            </div>
            <div>
                <div className={styles.contactIcons}>
                    <a href="https://www.linkedin.com/in/collins-makui/" className={styles.contactIcon}><FaLinkedin /></a>
                    <a href="https://github.com/devcollinsmakui" className={styles.contactIcon}><FaGithub /></a>
                    <a href="https://github.com/Makcollins" className={styles.contactIcon}><FaGithubAlt /></a>
{/*                     <a href="mailto:makcollins16@gmail.com" className={styles.contactIcon}><SiGmail /></a> */}
                </div>
            </div>
            <div className='copyright'>COLLINS MAKUI <FaRegCopyright/> 2024</div>
        </footer>
    )
}

export default Contact
