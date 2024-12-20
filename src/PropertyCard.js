import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.imageUrl} alt={property.title} />
      <h2>{property.title}</h2>
      <p>${property.price}</p>
    </div>
  );
};

export default PropertyCard;