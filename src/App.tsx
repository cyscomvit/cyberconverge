import React from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Registration from './components/Registration';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground/>
      <Hero/>
      <EventDetails/>
      <Registration/>
      <Footer/>
  
    </div>
  );
}

export default App;