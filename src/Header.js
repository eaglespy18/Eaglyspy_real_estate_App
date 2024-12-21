import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}> 
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search for properties..." 
          className={styles.searchInput} 
        />
      </div>
      <div className={styles.profile}> 
        <button className={styles.profileButton}>JOIN/SIGNUP</button> 
      </div>
    </header>
  );
};

export default Header;