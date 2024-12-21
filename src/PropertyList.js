import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import geolib from 'geolib'; // Import geolib for distance calculation

const PropertyList = ({
  properties,
  title,
  selectedCategory,
  priceRange,
  bedrooms,
  bathrooms,
  location,
}) => {
  const [isGridView, setIsGridView] = useState(true); // State to track grid/list view

  const filteredProperties = properties.filter((property) => {
    // Filter by price range
    if (property.price < priceRange[0] || property.price > priceRange[1]) {
      return false;
    }

    // Filter by property type
    if (selectedCategory && property.type !== selectedCategory) {
      return false;
    }

    // Filter by bedrooms
    if (bedrooms && property.bedrooms !== bedrooms) {
      return false;
    }

    // Filter by bathrooms
    if (bathrooms && property.bathrooms !== bathrooms) {
      return false;
    }

    // Filter by location
    if (location) {
      const distance = geolib.getDistance(
        { latitude: property.latitude, longitude: property.longitude },
        { latitude: location.latitude, longitude: location.longitude }
      );
      const maxDistance = 10 * 1000; // 10 kilometers in meters
      if (distance > maxDistance) {
        return false;
      }
    }

    return true;
  });

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="view-toggle">
        <button onClick={toggleView}>
          {isGridView ? 'List View' : 'Grid View'}
        </button>
      </div>
      <div
        className={`property-list-container ${isGridView ? 'grid-view' : 'list-view'}`}
      >
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;