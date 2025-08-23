import React, { useState, useEffect } from 'react';
import { Shield, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal';

const Hero: React.FC = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setTitleVisible(true), 500);
    const timer2 = setTimeout(() => setSubtitleVisible(true), 1200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title Card */}
          <div className="text-center lg:text-left">
            {/* Header Logos */}
            <div className="flex items-center justify-center lg:justify-start mb-8 space-x-4">
              <div className="flex items-center space-x-2 px-4 py-2 border border-cyan-400/30 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <Shield className="w-6 h-6 text-cyan-400" />
                <span className="text-sm font-mono text-cyan-400">VIT CHENNAI</span>
              </div>
              <div className="text-cyan-400 text-sm font-mono">x</div>
              <div className="px-4 py-2 border border-purple-400/30 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <span className="text-sm font-mono text-purple-400">CYSCOM</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="mb-6">
              <h1 
                className={`text-6xl sm:text-7xl lg:text-8xl font-bold transition-all duration-1000 ${
                  titleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
              >
                <span className="cyber-text-outline text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  CYBER
                </span>
                <br />
                <span className="cyber-text-glow text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  CONVERGE
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div 
              className={`transition-all duration-1000 delay-700 ${
                subtitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
            >
              <p className="text-xl sm:text-2xl text-gray-300 mb-4 leading-relaxed">
                Join expert talks, workshops, and live demonstrations on
                <span className="text-cyan-400 font-semibold"> cybersecurity</span>, hosted by
                <span className="text-purple-400 font-semibold"> CYSCOM VIT Chennai</span>
              </p>
              
              {/* Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 border border-cyan-400/30 rounded-lg bg-gray-800/30 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-400">AUG</div>
                  <div className="text-3xl font-bold text-white">28-29</div>
                  <div className="text-xl text-cyan-400">2025</div>
                </div>
                <div className="text-center p-4 border border-purple-400/30 rounded-lg bg-gray-800/30 backdrop-blur-sm">
                  <div className="text-sm text-gray-300">TIME</div>
                  <div className="text-lg font-bold text-white">8 AM - 5 PM</div>
                  <div className="text-sm text-purple-400">FULL DAY</div>
                </div>
                <div className="text-center p-4 border border-green-400/30 rounded-lg bg-gray-800/30 backdrop-blur-sm">
                  <div className="text-sm text-gray-300">VENUE</div>
                  <div className="text-sm font-bold text-white">KAMARAJ</div>
                  <div className="text-sm text-green-400">AUDITORIUM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Terminal */}
          <div className="lg:pl-8">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;