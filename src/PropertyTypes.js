import React from 'react';

const PropertyTypes = ({ propertyTypes, onCategorySelect }) => {
  return (
    <div className="property-types">
      {propertyTypes.map((type) => (
        <button key={type} onClick={() => onCategorySelect(type)}>
          {type}
        </button>
      ))}
    </div>
  );
};

export default PropertyTypes;