import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact=() => {
  return (
    <footer  id='contact' className={styles.container}>
    <div className={styles.text}>
    <h2 >Contact</h2>
    <p >Feel free to Contact. </p>
    <ul className={styles.links}>
    <li className={styles.link}>
    <img src={getImageUrl('contact/emailIcon.png')}
     alt='Email'
     
     />
    <a href="mailto:contact@gmail.com">myemail@email.com</a>
    </li>
    <li className={styles.link}>
    <img src={getImageUrl('contact/linkedinIcon.png')}
     alt='linkedin' 
     
     />
    <a href="https://www.linkedin.com/ak">linkedin.com/ak</a>
    </li>
    <li className={styles.link}>
    <img src={getImageUrl('contact/githubIcon.png')}
     alt='github'
    
     />
    <a href="https://www.github.com/ak">github.com/ak</a>
    </li>
    </ul>
    </div>
      
    </footer>
  )
}

export default Contact;
