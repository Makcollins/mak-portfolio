import React from 'react';
import { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl,menuIcon, closeIcon } from '../../util';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src = {menuOpen ? closeIcon() : menuIcon()} alt="Menu" 
                onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={styles.menuItems}> 
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
