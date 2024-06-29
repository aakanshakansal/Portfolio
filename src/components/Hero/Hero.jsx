import React from 'react'
import styles from '../Hero/Hero.module.css'
import { getImageUrl } from '../../utils';

 const Hero=() =>{
  return (
    <section className={styles.container}>
    
    <div className={styles.content}>
    <h1 className={styles.title}>Hello I'm Aakansha kansal</h1>
    <p  className={styles.description}>I'm a thee.js developer with 1.3 years of hands-on experience.</p>
    <a href="mailto: aakanshakansal56@gmail.com" className={styles.contactBtn}>Contact me</a>
    </div>
  <img src={getImageUrl('hero/heroImage1.png')} className={styles.heroImg} alt="Hero image of me  " />
  <div className={styles.topBlur}/>
  <div className={styles.bottomBlur}/>
  </section>
  );
};



export default Hero;







