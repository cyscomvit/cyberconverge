import React from 'react';
import { Calendar, Users, Shield, Zap, Target, Award, Code, Star, Trophy } from 'lucide-react';
import Timeline from './Timeline';

const EventDetails: React.FC = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Live Penetration Testing',
      description: 'Watch experts break into systems in real-time while explaining their methodology',
      color: 'from-red-500 via-red-400 to-orange-400',
      accent: 'red',
      size: 'large'
    },
    {
      icon: Target,
      title: 'CTF Championship',
      description: 'Compete in progressive challenges with cash prizes and industry recognition',
      color: 'from-emerald-500 via-emerald-400 to-lime-300',
      accent: 'emerald',
      size: 'medium'
    },
    {
      icon: Code,
      title: 'Zero-Day Workshop',
      description: 'Learn to discover and exploit previously unknown vulnerabilities',
      color: 'from-emerald-400 via-emerald-600 to-lime-400',
      accent: 'emerald',
      size: 'medium'
    }
  ];

  // Removed unused workshops array

  const speakers = [
    { 
      name: 'Dr. Geetha', 
      role: 'Faculty Coordinator', 
      specialty: 'CYSCOM VIT CHENNAI'
    },
    { 
      name: 'Dr. P. Nithyanandam', 
      role: 'Faculty Coordinator', 
      specialty: 'CYSCOM VIT CHENNAI'
    }
  ];

  const stats = [
    { number: '500+', label: 'Participants Expected', icon: Users },
    { number: '15+', label: 'Industry Experts', icon: Star },
    { number: '₹90,000', label: 'Prize Worth', icon: Trophy },
    { number: '48hrs', label: 'Non-stop Action', icon: Zap }
  ];

  return (
    <section id="details" className="relative z-10 overflow-hidden py-20">
      {/* Complex Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-emerald-400/6 to-emerald-200/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-gradient-to-tl from-emerald-500/6 to-lime-400/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-emerald-400/6 to-lime-300/6 rounded-full blur-3xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Asymmetrical Header */}
          {/* <div className="relative mb-24">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 lg:col-start-2">
                <div className="relative">
                  <h2 className="text-6xl sm:text-7xl font-black mb-6 leading-none">
                    <span className="block text-white transform -rotate-1">DIVE</span>
                    <span className="block cyber-text-glow text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-600 to-lime-300 transform rotate-1 -mt-4">
                      DEEPER
                    </span>
                  </h2>
                  <div className="absolute -top-8 -right-12 w-24 h-24 border-2 border-emerald-400/30 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="lg:col-span-3">
                  <div className="cyber-card p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-emerald-500/30 rounded-2xl backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-all duration-700">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-600 to-lime-300">National Cyber Security Summit</div>
                    <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm font-semibold">Flagship Summit</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl ml-auto mr-16 mt-8 leading-relaxed">
              CYBERCONVERGE unites the brightest minds in cybersecurity to exchange knowledge, build connections, and gain hands-on experience with the latest security technologies.
            </p>
          </div> */}

          {/* Dynamic Highlights Layout */}
          {/* <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8">
            
              <div className="lg:col-span-7">
                <div className="group cyber-card h-full p-10 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-red-400/30 rounded-3xl backdrop-blur-sm hover:border-red-400/60 transition-all duration-700 transform hover:scale-[1.02] hover:-rotate-1">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500 via-red-400 to-orange-400 p-5 group-hover:shadow-2xl group-hover:shadow-red-400/25 transition-all duration-500 transform group-hover:rotate-12">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-4">{highlights[0].title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{highlights[0].description}</p>
                      <div className="flex items-center space-x-4">
                        <div className="px-4 py-2 bg-red-400/20 rounded-full">
                          <span className="text-red-400 text-sm font-semibold">Live Demo</span>
                        </div>
                        <div className="px-4 py-2 bg-orange-400/20 rounded-full">
                          <span className="text-orange-400 text-sm font-semibold">Expert Level</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

     
              <div className="lg:col-span-5 space-y-8">
                {highlights.slice(1).map((highlight, index) => {
                  const getBorderClass = (accent: string) => {
                    switch (accent) {
                      case 'purple': return 'border-emerald-400/30 hover:border-emerald-400/60';
                      case 'cyan': return 'border-emerald-400/30 hover:border-emerald-400/60';
                      case 'red': return 'border-red-400/30 hover:border-red-400/60';
                      case 'green': return 'border-green-400/30 hover:border-green-400/60';
                      case 'yellow': return 'border-yellow-400/30 hover:border-yellow-400/60';
                      case 'blue': return 'border-blue-400/30 hover:border-blue-400/60';
                      default: return 'border-gray-400/30 hover:border-gray-400/60';
                    }
                  };

                  return (
                    <div
                      key={index}
                      className={`group cyber-card p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border ${getBorderClass(highlight.accent)} rounded-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 ${
                        index === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${highlight.color} p-4 mb-6 group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6`}>
                        <highlight.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div> */}

          {/* Diagonal Stats Section */}
          {/* <div className="relative mb-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`cyber-card p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-emerald-400/30 rounded-2xl backdrop-blur-sm hover:border-emerald-400/60 transition-all duration-500 transform hover:scale-110 ${
                    index % 2 === 0 ? 'hover:rotate-2 md:mt-0' : 'hover:-rotate-2 md:mt-12'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                    <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Event Partners Section */}
          <div className="relative mb-32">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-white mb-4">Our Partners</h3>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  Collaborating with leading organizations in cybersecurity, law enforcement, and technical education
                </p>
              </div>
              
              {/* Auto-scrolling Partners Section */}
              <div className="relative py-10 sm:py-12 md:py-16 mb-16 bg-gray-900/80 backdrop-blur-sm w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden">
                <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-24 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
                
                <div className="marquee-container overflow-hidden px-4 sm:px-6 md:px-8">
                  <div className="marquee animate-scroll flex items-center space-x-8 sm:space-x-12 md:space-x-20">
                    {/* Partners - First Set */}
                    <img src="/Tasc.png" alt="T.A.S.C. logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/project safe.png" alt="Project SAFE logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/CBI.png" alt="CBI logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/Tamil Nadu Police.png" alt="Tamil Nadu Police logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/Altered Security.png" alt="Altered Security logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    
                    {/* Partners - Duplicated Set for Seamless Scrolling */}
                    <img src="/Tasc.png" alt="T.A.S.C. logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/project safe.png" alt="Project SAFE logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/CBI.png" alt="CBI logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/Tamil Nadu Police.png" alt="Tamil Nadu Police logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/Altered Security.png" alt="Altered Security logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    
                    {/* Partners - Triple Set for Extra Seamless Scrolling */}
                    <img src="/Tasc.png" alt="T.A.S.C. logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/project safe.png" alt="Project SAFE logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/CBI.png" alt="CBI logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/Tamil Nadu Police.png" alt="Tamil Nadu Police logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                    <img src="/Altered Security.png" alt="Altered Security logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain transition-transform duration-300 transform hover:scale-110" />
                  </div>
                </div>
              </div>
              
              {/* Partnership Statement */}
              <div className="text-center partner-card-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
                  <h4 className="text-2xl font-bold text-cyan-400 mb-2">Collaborative Excellence</h4>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-6">
                    <Star className="w-4 h-4" /> Key Highlight
                  </div>

                  <div className="space-y-4 text-left sm:text-center">
                    <div className="flex sm:justify-center items-start gap-3">
                      <Award className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-200 text-lg leading-relaxed">
                        <span className="font-semibold text-white">Chief Guest:</span> Ms. Vidhya Kulkarni, Joint Director, CBI 
                      </p>
                    </div>
                    <div className="flex sm:justify-center items-start gap-3">
                      <Shield className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-200 text-lg leading-relaxed">
                        <span className="font-semibold text-white">Guest of Honour:</span> Assistant Commissioner, Tamil Nadu Cyber Crime Branch
                      </p>
                    </div>
                    <div className="flex sm:justify-center items-start gap-3">
                      <Users className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-200 text-lg leading-relaxed">
                        Featuring SOC analysts, penetration testers, bug bounty hunters, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asymmetrical Workshop Schedule */}
          <div className="relative mb-32">
            <Timeline />
          </div>

          {/* Event Information Section */}
          <div className="relative mb-32">
            <div className="max-w-6xl mx-auto">

              {/* Section Header */}
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-white mb-4">Event Information</h3>
                <p className="text-gray-400 text-lg">Everything you need to know about CyberConverge 2025</p>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">

                {/* When & Where Card */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-gray-900" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">When & Where</h4>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-4 border-cyan-400 pl-6">
                      <h5 className="text-lg font-semibold text-white mb-1">Date</h5>
                      <p className="text-cyan-400 font-medium">August 28-29, 2025</p>
                      <p className="text-gray-400 text-sm">Two intensive days of cybersecurity learning</p>
                    </div>

                    <div className="border-l-4 border-purple-400 pl-6">
                      <h5 className="text-lg font-semibold text-white mb-1">Time</h5>
                      <p className="text-purple-400 font-medium">8:00 AM - 5:00 PM</p>
                      <p className="text-gray-400 text-sm">Full day immersive experience both days</p>
                    </div>

                    <div className="border-l-4 border-green-400 pl-6">
                      <h5 className="text-lg font-semibold text-white mb-1">Venue</h5>
                      <p className="text-green-400 font-medium">Kamaraj Auditorium</p>
                      <p className="text-gray-400 text-sm">VIT Chennai Campus, Vandalur-Kelambakkam Road</p>
                    </div>
                  </div>
                </div>

                {/* Faculty Coordinators Card */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Faculty Coordinators</h4>
                  </div>

                  <div className="space-y-6">
                    {speakers.map((speaker, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg p-4 bg-gray-900/30">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{speaker.name.split(' ')[1]?.charAt(0) || speaker.name.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="text-lg font-semibold text-white">{speaker.name}</h5>
                            <p className="text-purple-400 text-sm mb-2">{speaker.role}</p>
                            <p className="text-gray-400 text-sm">{speaker.specialty}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">Need Help? Contact Our Student Coordinators</h4>
                  <p className="text-gray-400">Available for registration assistance and event queries</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {/* Melvin first */}
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-emerald-400/30">
                    <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-emerald-400 font-bold text-xl">M</span>
                    </div>
                    <h5 className="text-white font-semibold mb-1">Melvin</h5>
                    <p className="text-emerald-400 font-mono text-sm">+91 98765 43210</p>
                    <p className="text-gray-400 text-xs mt-1">Summit Coordinator</p>
                  </div>

                  <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-cyan-400 font-bold text-xl">V</span>
                    </div>
                    <h5 className="text-white font-semibold mb-1">Vijval</h5>
                    <p className="text-cyan-400 font-mono text-sm">+91 93243 84817</p>
                    <p className="text-gray-400 text-xs mt-1">Registration & General Queries</p>
                  </div>

                  <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-purple-400/30">
                    <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-400 font-bold text-xl">H</span>
                    </div>
                    <h5 className="text-white font-semibold mb-1">Harsh</h5>
                    <p className="text-purple-400 font-mono text-sm">+91 98906 62736</p>
                    <p className="text-gray-400 text-xs mt-1">Technical Support & Workshops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;