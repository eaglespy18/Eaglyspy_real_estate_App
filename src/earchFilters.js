import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-component'; // Import range slider library

const SearchFilters = ({ 
  onPriceRangeChange, 
  onPropertyTypeChange, 
  onBedroomsChange, 
  onBathroomsChange, 
  onLocationChange 
}) => {
  const [priceRange, setPriceRange] = useState([0, 1000000]); 
  const [propertyType, setPropertyType] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null); 
  const [location, setLocation] = useState(null); 

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
    onPriceRangeChange(values); 
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
    onPropertyTypeChange(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
    onBedroomsChange(event.target.value);
  };

  const handleBathroomsChange = (event) => {
    setBathrooms(event.target.value);
    onBathroomsChange(event.target.value);
  };

  // ... (Implement location filter handling)

  return (
    <aside className="search-filters">
      <div>
        <label htmlFor="price-range">Price Range:</label>
        <RangeSlider
          min={0}
          max={1000000}
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
      </div>

      <div>
        <label htmlFor="property-type">Property Type:</label>
        <select 
          id="property-type" 
          value={propertyType} 
          onChange={handlePropertyTypeChange}
        >
          <option value="">All</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          {/* Add more property types */}
        </select>
      </div>

      <div>
        <label htmlFor="bedrooms">Bedrooms:</label>
        <select 
          id="bedrooms" 
          value={bedrooms} 
          onChange={handleBedroomsChange}
        >
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          {/* Add more bedroom options */}
        </select>
      </div>

      <div>
        <label htmlFor="bathrooms">Bathrooms:</label>
        <select 
          id="bathrooms" 
          value={bathrooms} 
          onChange={handleBathroomsChange}
        >
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          {/* Add more bathroom options */}
        </select>
      </div>

      {/* Location Filter (Map Integration) */}

    </aside>
  );
};

export default SearchFilters;