import React, {useState} from 'react'


import styles from './Navbar.module.css'
import { getImageUrl } from './../../utils';



const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    // const toggleMenu = () => setmenuOpen(!menuOpen)
  return <nav className={styles.navbar}>
  <a className={styles.title} href="/">Portfolio</a>
  <div className={styles.menu}>
  <img className={styles.menuBtn}
   src={ menuOpen ? getImageUrl("nav/closeIcon.png"): getImageUrl("nav/menuIcon.png")}  //conditional operator 
   alt='menu-button'
   onClick={() => setmenuOpen(!menuOpen)}
   />
   <ul className={`${styles.menuItems} ${menuOpen  && styles.menuOpen}`}
   onClick={() => setmenuOpen(false)}>
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
}

export default Navbar