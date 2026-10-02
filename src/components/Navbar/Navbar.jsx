import React from 'react';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl,menuIcon, closeIcon } from '../../utils';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

     const cld = new Cloudinary({
        cloud: {
            cloudName: 'xnlxwmb1'
        }
    });

    const logo = cld.image('mak_ui_tp');
    return (
        <nav className={styles.navbar}>
            <a href="/" className="">
             <AdvancedImage cldImg={logo}
                    alt={'Mak UI brand logo'}
                    className="h-6"w-6 />
            Collins Makui</a>
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
