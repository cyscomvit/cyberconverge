import React from 'react';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import VenueMap from '../components/VenueMap';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Hero />
      <EventDetails />
      <VenueMap />
      <Footer />
    </div>
  );
};

export default HomePage;
