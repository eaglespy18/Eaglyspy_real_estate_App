import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl'; // Import necessary components
import RangeSlider from 'react-range-slider-component';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

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

  const [viewport, setViewport] = useState({
    latitude: 37.7578, 
    longitude: -122.4374, 
    zoom: 8, 
  });

  const [address, setAddress] = useState(''); 

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

  const handleSelect = async (value) => {
    setAddress(value);
    try {
      const results = await geocodeByAddress(value);
      const { lat, lng } = await getLatLng(results[0]); 
      setLocation({ latitude: lat, longitude: lng }); 
      setViewport({ ...viewport, latitude: lat, longitude: lng }); 
      onLocationChange({ latitude: lat, longitude: lng }); // Pass location to HomePage
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  const handleMapClick = (event) => {
    setLocation({ 
      latitude: event.lngLat[1], 
      longitude: event.lngLat[0] 
    });
    onLocationChange({ 
      latitude: event.lngLat[1], 
      longitude: event.lngLat[0] 
    }); 
  };

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
          <option value="Villa">Villa</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Commercial Space">Commercial Space</option>
          <option value="Land">Land</option>
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
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4+">4+</option>
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
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4+">4+</option>
        </select>
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <PlacesAutocomplete 
          value={address} 
          onChange={setAddress} 
          onSelect={handleSelect} 
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input 
                {...getInputProps({ 
                  placeholder: 'Search Places...', 
                  className: 'location-input' 
                })} 
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => (
                  <div 
                    {...getSuggestionItemProps(suggestion, {
                      className: 'suggestion-item',
                    })}
                  >
                    {suggestion.description}
                  </div>
                ))}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <ReactMapGL 
          {...viewport} 
          width="300px" 
          height="250px" 
          mapStyle="mapbox://styles/mapbox/streets-v11" 
          mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN" 
          onViewportChange={setViewport} 
          onClick={handleMapClick} 
        >
          <GeolocateControl position="top-left" /> 
        </ReactMapGL>
      </div>
    </aside>
  );
};

export default SearchFilters;