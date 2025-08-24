import React, { useState } from 'react';
import { Calendar, Clock, Users, Target, Shield, ChevronRight, Zap } from 'lucide-react';

interface DaySelectionProps {
  onDaySelect: (day: 'day1' | 'day2' | 'both') => void;
}

const DaySelection: React.FC<DaySelectionProps> = ({ onDaySelect }) => {
  const [expandedDay, setExpandedDay] = useState<'day1' | 'day2' | null>(null);

  const dayDetails = {
    day1: {
      title: 'Day 1: CTF Championship',
      subtitle: 'Capture The Flag',
      date: 'August 28, 2025',
      time: '8:00 AM - 5:00 PM',
      capacity: '₹150',
      description: 'Compete in a high-energy Capture The Flag with progressive challenges and team play',
      color: {
        primary: 'emerald',
        accent: 'red',
        gradient: 'from-emerald-500 to-red-500'
      },
      topics: [
        { name: 'Kali Installation Booth', level: 'Basics' },
        { name: 'CTF Workshop', level: 'Beginner' },
        { name: 'Web Exploitation', level: 'Beginner' },
        { name: 'Reverse Engineering', level: 'Intermediate' },
        { name: 'Pawning', level: 'Advanced' },
        { name: 'Miscellaneous CTFs', level: 'Intermediate' }
      ],
      speakers: ['Hands On Training by CYSCOM'],
      highlight: 'CTF with progressive challenges and prizes'
    },
    day2: {
      title: 'Day 2: Cyber Security Summit',
      subtitle: 'Learn & Network',
      date: 'August 29, 2025',
      time: '8:00 AM - 5:00 PM',
      capacity: 'Free',
      description: 'Expert talks, panels, and demos from industry leaders and law enforcement',
      color: {
        primary: 'cyan',
        accent: 'blue',
        gradient: 'from-cyan-500 to-blue-500'
      },
      topics: [
        { name: 'SOC & SIEM Secrets', level: 'Advanced' },
        { name: 'DIFR & Blue Teaming', level: 'Advanced' },
        { name: 'Networking Hour', level: 'Networking' },
        { name: 'Bug Bounty Buzz', level: 'Intermediate' },
        { name: 'Red Team Live', level: 'Advanced' }
      ],
      speakers: ['Ms. Vidhya Kulkarn - Joint Director, CBI', 'Assistant Commissioner - Tamil Nadu Cyber Crime Branch','Mr. Sanjsai B.K - Cybersecurity NXXT','Ms. Neha K.J. - Cybersecurity NXXT', 'Mr. Kabish S. - BugCrowd'],
      highlight: 'Cyber Security Summit with expert keynotes and panels'
    }
  };

  const handleDayClick = (day: 'day1' | 'day2') => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const handleRegisterClick = (day: 'day1' | 'day2') => {
    onDaySelect(day);
  };

  return (
    <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-emerald-200/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-cyan-500/8 to-blue-400/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-6xl sm:text-7xl font-black mb-6 leading-none">
              <span className="block text-white transform -rotate-1">CHOOSE YOUR</span>
              <span className="block cyber-text-glow text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-400 transform rotate-1 -mt-4">
                ADVENTURE
              </span>
            </h2>
            <div className="absolute -top-12 -right-16 w-32 h-32 border-2 border-emerald-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -bottom-8 -left-12 w-20 h-20 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-8 leading-relaxed">
            CyberConverge 2025 offers two specialized tracks. Click on each day to explore detailed content 
            and register for your preferred security specialization.
          </p>
        </div>

        {/* Prominent CTA: Register Both Days (primary action) */}
        <div className="mb-10">
          <div className="cyber-card relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-emerald-500 to-lime-300 text-black shadow-2xl border border-emerald-400/30">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h2 className="text-4xl font-extrabold">Register for Both Days — CTF + Summit</h2>
                <p className="mt-2 text-lg text-black/80 max-w-2xl">Get the complete CyberConverge experience: Day 1 CTF and Day 2 Cyber Security Summit. One signup — both days covered.</p>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    onClick={() => onDaySelect('both')}
                    className="px-8 py-4 bg-black text-emerald-300 font-bold rounded-2xl text-xl shadow-lg hover:scale-105 transform transition-all duration-200"
                    aria-label="Register for both days"
                  >
                    Register for Both Days
                  </button>

                  {/* <a href="#" className="px-4 py-3 bg-black/10 text-black/80 rounded-lg font-medium hover:bg-black/20">Why both?</a> */}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <img src="/cyscom.png" alt="Both days" />
              </div>
            </div>
          </div>
        </div>

        {/* Day Selection Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(dayDetails).map(([dayKey, day]) => {
            const isExpanded = expandedDay === dayKey;
            const dayTyped = dayKey as 'day1' | 'day2';
            
            return (
              <div
                key={dayKey}
                className={`cyber-card relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 border rounded-3xl backdrop-blur-sm transition-all duration-700 transform hover:scale-105 ${
                  isExpanded
                    ? `border-${day.color.primary}-400/50 shadow-2xl shadow-${day.color.primary}-400/20`
                    : 'border-gray-700 hover:border-gray-600'
                } ${isExpanded ? 'lg:col-span-2' : ''}`}
              >
                {/* Card Header */}
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => handleDayClick(dayTyped)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${day.color.gradient} shadow-lg`}>
                        {dayKey === 'day1' ? (
                          <Target className="w-8 h-8 text-white" />
                        ) : (
                          <Shield className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold text-${day.color.primary}-400 mb-2`}>
                          {day.title}
                        </h3>
                        <p className="text-gray-400 text-lg">{day.subtitle}</p>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-6 h-6 text-${day.color.primary}-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>

                  {/* Basic Info */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className={`w-5 h-5 text-${day.color.primary}-400`} />
                      <span className="font-medium">{day.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock className={`w-5 h-5 text-${day.color.primary}-400`} />
                      <span className="font-medium">{day.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Users className={`w-5 h-5 text-${day.color.primary}-400`} />
                      <span className="font-medium">{day.capacity}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {day.description}
                  </p>

                  <div className={`mt-4 inline-flex items-center px-4 py-2 bg-${day.color.primary}-400/20 border border-${day.color.primary}-400/30 rounded-full`}>
                    <Zap className={`w-4 h-4 text-${day.color.primary}-400 mr-2`} />
                    <span className={`text-${day.color.primary}-400 font-semibold text-sm`}>
                      {day.highlight}
                    </span>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-8 pb-8 border-t border-gray-700">
                    <div className="grid lg:grid-cols-2 gap-8 pt-8">
                      {/* Topics */}
                      <div>
                        <h4 className={`text-xl font-bold text-${day.color.primary}-400 mb-6`}>
                          Workshop Topics
                        </h4>
                        <div className="space-y-4">
                          {day.topics.map((topic, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{topic.icon}</span>
                                <div>
                                  <p className="text-white font-medium">{topic.name}</p>
                                  <p className={`text-${day.color.primary}-400 text-sm`}>{topic.level}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Speakers & Register */}
                      <div className="space-y-6">
                        <div>
                          <h4 className={`text-xl font-bold text-${day.color.primary}-400 mb-4`}>
                            Expert Speakers
                          </h4>
                          <div className="space-y-3">
                            {day.speakers.map((speaker, index) => (
                              <div key={index} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                                <p className="text-white font-medium">{speaker}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Register Button */}
                        <button
                          onClick={() => handleRegisterClick(dayTyped)}
                          className={`w-full group flex items-center justify-center px-8 py-6 bg-gradient-to-r ${day.color.gradient} text-white font-bold text-xl rounded-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-${day.color.primary}-400/50 transition-all duration-300 shadow-2xl shadow-${day.color.primary}-400/25`}
                        >
                          <Target className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                          Register for {day.title}
                          <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>
  );
};

export default DaySelection;
