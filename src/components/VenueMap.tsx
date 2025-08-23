import React from 'react';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';

const VenueMap: React.FC = () => {
  return (
    <section id="venue" className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Venue & Location
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us at the heart of innovation - VIT University, Chennai
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3890.040938948732!2d80.1507345!3d12.8406311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1755950187444!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Venue Details */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <MapPin className="w-6 h-6 text-green-400 mr-3" />
                Event Venue
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  <strong className="text-white">VIT Chennai</strong><br />
                  Kelambakkam - Vandalur Rd,<br/> Rajan Nagar, Chennai-600127<br />
                  
                </p>
                <p>
                  <strong className="text-green-400">Hall:</strong> Kamaraj Auditorium, Academic Block-3
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//Vellore+Institute+of+Technology+-+Chennai,+Kelambakkam+-+Vandalur+Rd,+Rajan+Nagar,+Chennai,+Tamil+Nadu+600127/@12.8406311,80.1507345,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-gradient-to-r from-green-400 to-green-900 hover:from-green-300 hover:to-green-900 text-black font-bold text-center py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;