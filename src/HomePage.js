import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import PropertyList from './PropertyList';
import Footer from './Footer';

const HomePage = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Apartment",
      description: "Spacious and stylish apartment in the city center.",
      imageUrl: "https://example.com/images/apartment.jpg",
      price: 1500,
    },
    {
      id: 2,
      title: "Cozy Cottage",
      description: "Charming cottage in a quiet neighborhood.",
      imageUrl: "https://example.com/images/cottage.jpg",
      price: 1000,
    },
    // Add more featured properties here
  ];

  const recentListings = [
    {
      id: 3,
      title: "Luxury Villa",
      description: "Luxurious villa with stunning ocean views.",
      imageUrl: "https://example.com/images/villa.jpg",
      price: 5000,
    },
    {
      id: 4,
      title: "Family Home",
      description: "Spacious family home in a great school district.",
      imageUrl: "https://example.com/images/family-home.jpg",
      price: 2500,
    },
    // Add more recent listings here
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <PropertyList properties={featuredProperties} title="Featured Properties" />
      <PropertyList properties={recentListings} title="Recent Listings" />
      <Footer />
    </div>
  );
};

export default HomePage;