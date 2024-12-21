// PropertyCard.js
import React from 'react';
import styles from './PropertyCard.module.css';

const PropertyCard = ({ property }) => {
  return (
    <div className={styles.card}>
      <img src={property.imageUrl} alt={property.title} className={styles.image} />
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{property.title}</h3>
        <p className={styles.description}>{property.description}</p>
        <p className={styles.price}>${property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;