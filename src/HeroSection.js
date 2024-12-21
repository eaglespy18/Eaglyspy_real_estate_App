import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Find Your Dream Home</h1> 
      <p className={styles.heroText}>Discover amazing properties in your area.</p> 
      <button className={styles.heroButton}>Search Now</button>
    </section>
  );
};

export default HeroSection;