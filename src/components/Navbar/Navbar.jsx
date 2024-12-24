import React from 'react';
import { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl,menuIcon, closeIcon } from '../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Collins Makui</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src = {menuOpen ? closeIcon() : menuIcon()} alt="Menu" 
                onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
                onClick={()=>setMenuOpen(false)}> 
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
