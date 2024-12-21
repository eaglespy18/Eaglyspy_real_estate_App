import React, { useState } from 'react';

const ListYourProperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    price: '',
    images: [],
    contactName: '',
    contactPhone: '',
    contactEmail: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(propertyData); 
  };

  return (
    <div>
      <h1>List Your Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={propertyData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={propertyData.description} onChange={handleChange} />
        </div>
        {/* Add more form fields here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ListYourProperty;