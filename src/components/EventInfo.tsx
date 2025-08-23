import React from 'react';
import { Shield, Users, Target, BookOpen } from 'lucide-react';
import { Award } from 'lucide-react';
const EventInfo: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Cybersecurity Workshops',
      description: 'Hands-on training sessions with industry experts covering the latest security techniques and technologies.',
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with cybersecurity professionals, researchers, and fellow enthusiasts from across the industry.',
    },
    {
      icon: Target,
      title: 'Hands-on Experience',
      description: 'Capture-the-Flag style challenges where you exploit vulnerabilities and secure systems under pressure.'

    },
    {
      icon: BookOpen,
      title: 'Expert Keynotes',
      description: 'Inspiring talks from renowned cybersecurity leaders sharing insights on emerging threats and solutions.',
    },
  ];

  return (
    <section id="event-info" className="py-20 px-4 ">
      <div className="relative mb-24">
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
                    <div className="text-2xl font-bold text-white">₹50,000</div>
                    <div className="text-sm text-emerald-500">Total Prizes</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl ml-auto mr-16 mt-8 leading-relaxed">
              Experience hands-on cybersecurity through live demonstrations, competitive challenges, 
              and expert-led workshops that push the boundaries of ethical hacking.
            </p>
          </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
            What Awaits You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CYBERCONVERGE unites the brightest minds in cybersecurity to exchange knowledge, 
            build connections, and gain hands-on 
            experience with the latest security technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-green/40 hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-800 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-green-900/20 border border-purple-500/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-orbitron mb-4 text-white">
              Event Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300+</div>
                <div className="text-gray-300">Participants Expected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-300">Industry Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">8hrs</div>
                <div className="text-gray-300">Of Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;