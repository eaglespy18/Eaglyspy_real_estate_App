import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import PropertyList from './PropertyList';
import Footer from './Footer';
import PropertyTypes from './PropertyTypes';
import CtaButton from './CtaButton';

const HomePage = () => {
  const featuredProperties = [
    // ... your featured properties data
  ];

  const recentListings = [
    // ... your recent listings data
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const navigate = useNavigate(); 

  const handleListPropertyClick = () => {
    navigate('/list-your-property');
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <PropertyTypes 
        propertyTypes={['Apartment', 'Villa', 'House', 'Condo', 'Townhouse', 'Commercial Space', 'Land']} 
        onCategorySelect={handleCategorySelect} 
      />
      <PropertyList properties={featuredProperties} title="Featured Properties" selectedCategory={selectedCategory} />
      <PropertyList properties={recentListings} title="Recent Listings" selectedCategory={selectedCategory} />
      <CtaButton text="List Your Property" onClick={handleListPropertyClick} />
      <Footer />
    </div>
  );
};

export default HomePage;