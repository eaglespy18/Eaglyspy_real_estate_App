import React from 'react';
import PropertyCard from './PropertyCard'; 

const SearchResults = ({ properties }) => {
  return (
    <div className="search-results">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default SearchResults;