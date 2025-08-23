import React, { useState } from 'react';
import { Users, Shield, Target, Code, Zap, Coffee, Award, Eye, Lock, Flame, Terminal, Network, Bug, UserCheck } from 'lucide-react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<any> | string;
  type: 'workshop' | 'session' | 'break' | 'networking' | 'competition';
}

const Timeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const day1Schedule: TimelineEvent[] = [
    {
      time: '8:00 AM - 9:00 AM',
      title: 'Kali Linux Installation Booth',
      description: 'Get your systems ready with expert guidance on Kali Linux setup and configuration',
      icon: Terminal,
      type: 'workshop'
    },
    {
      time: '9:00 AM - 11:00 AM',
      title: 'Hands-on CTF Workshop',
      description: 'Interactive capture-the-flag challenges to test your cybersecurity skills',
      icon: Target,
      type: 'competition'
    },
    {
      time: '11:00 AM - 1:00 PM',
      title: 'CTF (Session 1)',
      description: 'First competitive session with progressive difficulty challenges',
      icon: Shield,
      type: 'competition'
    },
    {
      time: '1:00 PM - 1:30 PM',
      title: 'Lunch Break',
      description: 'Networking lunch with fellow participants and mentors',
      icon: Coffee,
      type: 'break'
    },
    {
      time: '1:30 PM - 4:30 PM',
      title: 'CTF (Session 2)',
      description: 'Advanced challenges and team collaboration opportunities',
      icon: Code,
      type: 'competition'
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Evening Snacks & Networking',
      description: 'Connect with industry experts and fellow cybersecurity enthusiasts',
      icon: Users,
      type: 'networking'
    }
  ];

  const day2Schedule: TimelineEvent[] = [
    {
      time: '8:00 AM - 8:30 AM',
      title: 'Check-in & Coffee Kickstart',
      description: 'Participants arrive, collect badges, and network informally',
      icon: Coffee,
      type: 'networking'
    },
    {
      time: '8:30 AM - 9:00 AM',
      title: 'Grand Opening',
      description: 'Welcome remarks and housekeeping announcements',
      icon: UserCheck,
      type: 'session'
    },
    {
      time: '9:00 AM - 10:00 AM',
      title: 'Inaugural Session',
      description: 'Address by Chief Guests, Law Enforcement Officials (CBI, Cyber Crime Wing, Local Police)',
      icon: Shield,
      type: 'session'
    },
    {
      time: '10:00 AM - 11:00 AM',
      title: 'SOC & SIEM Secrets',
      description: 'Exploring Security Operations Centers and Security Information and Event Management best practices',
      icon: Eye,
      type: 'workshop'
    },
    {
      time: '11:00 AM - 12:00 PM',
      title: 'DFIR & Blue Teaming',
      description: 'Incident Response, Digital Forensics methodologies, and threat mitigation strategies',
      icon: Lock,
      type: 'workshop'
    },
    {
      time: '12:00 PM - 1:00 PM',
      title: 'Networking Hour',
      description: 'Connect and collaborate among law enforcement, security professionals, and industry experts',
      icon: Network,
      type: 'networking'
    },
    {
      time: '1:00 PM - 2:00 PM',
      title: 'Lunch & Recharge',
      description: 'Refuel and recharge for the thrilling sessions ahead',
      icon: Coffee,
      type: 'break'
    },
    {
      time: '2:00 PM - 2:45 PM',
      title: 'Bug Bounty Buzz',
      description: 'Insights from ethical hackers and bug hunters on vulnerability reporting',
      icon: Bug,
      type: 'workshop'
    },
    {
      time: '2:45 PM - 3:00 PM',
      title: 'Joint Session Warm-up',
      description: 'Overview of collaborative initiatives and agenda for technical demonstrations',
      icon: Zap,
      type: 'session'
    },
    {
      time: '3:00 PM - 4:30 PM',
      title: 'Red Team Live',
      description: 'Team tradecraft, advanced command-and-control (C2) frameworks, and live attack techniques by T.A.S.C & CYSCOM - VIT Chennai',
      icon: Flame,
      type: 'workshop'
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Wrap-up & Clicks',
      description: 'Certificate distribution, memorable moments, and group photos with dignitaries, speakers, and participants',
      icon: Award,
      type: 'session'
    }
  ];

  const currentSchedule = activeDay === 1 ? day1Schedule : day2Schedule;

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'from-emerald-500 to-emerald-700';
      case 'session': return 'from-emerald-400 to-emerald-600';
      case 'break': return 'from-orange-400 to-red-400';
      case 'networking': return 'from-green-400 to-teal-400';
      case 'competition': return 'from-red-400 to-pink-400';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getEventTypeBorder = (type: string) => {
    switch (type) {
      case 'workshop': return 'border-emerald-500/50';
      case 'session': return 'border-emerald-400/50';
      case 'break': return 'border-orange-400/50';
      case 'networking': return 'border-green-400/50';
      case 'competition': return 'border-red-400/50';
      default: return 'border-gray-400/50';
    }
  };

  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-16">
  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700 mb-6">
          Event Timeline
        </h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Two days of intensive cybersecurity learning, competitions, and networking
        </p>
      </div>

      {/* Day Switcher */}
      <div className="flex justify-center mb-12">
        <div className="cyber-card bg-gray-800/60 border border-gray-700 rounded-2xl p-2 backdrop-blur-sm">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeDay === 1
                  ? 'bg-gradient-to-r from-emerald-400 to-emerald-700 text-black shadow-lg shadow-emerald-400/25'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Day 1 - CTF & Workshop
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeDay === 2
                  ? 'bg-gradient-to-r from-emerald-400 to-emerald-700 text-black shadow-lg shadow-emerald-400/25'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Day 2 - Conference
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central Timeline Line */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400 via-emerald-600 to-lime-400 h-full rounded-full opacity-60"></div>
        
        {/* Timeline Events */}
        <div className="space-y-12">
          {currentSchedule.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-emerald-400/50"></div>
              
              {/* Event Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className={`cyber-card group p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border ${getEventTypeBorder(event.type)} rounded-2xl backdrop-blur-sm hover:border-opacity-100 transition-all duration-500 transform hover:scale-105 ${
                  index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${getEventTypeColor(event.type)} p-3 group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6`}>
                      {typeof event.icon === 'string' ? (
                        <span className="text-2xl">{event.icon}</span>
                      ) : (
                        <event.icon className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-mono text-emerald-400 mb-2">{event.time}</div>
                      <h4 className="text-xl font-bold text-white mb-3">{event.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{event.description}</p>
                      <div className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'workshop' ? 'bg-emerald-500/20 text-emerald-500' :
                          event.type === 'session' ? 'bg-emerald-400/20 text-emerald-400' :
                        event.type === 'break' ? 'bg-orange-400/20 text-orange-400' :
                        event.type === 'networking' ? 'bg-green-400/20 text-green-400' :
                        event.type === 'competition' ? 'bg-red-400/20 text-red-400' :
                        'bg-gray-400/20 text-gray-400'
                      }`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Display on Opposite Side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pl-12' : 'pr-72'}`}>
                <div className={`text-right ${index % 2 !== 0 ? 'text-left' : ''}`}>
                  <div className="inline-block px-6 py-3 bg-gray-800/40 border border-gray-700 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {event.time.split(' - ')[0]}
                    </div>
                    <div className="text-sm text-gray-400">
                      {event.time.split(' - ')[1] && `to ${event.time.split(' - ')[1]}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline End Marker */}
  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-8 h-8 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-400/50"></div>
      </div>

      {/* Day Summary */}
      <div className="mt-16 text-center">
        <div className="cyber-card inline-block p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-emerald-400/30 rounded-2xl backdrop-blur-sm">
          <h4 className="text-2xl font-bold text-emerald-400 mb-4">
            {activeDay === 1 ? 'Day 1 Focus' : 'Day 2 Focus'}
          </h4>
          <p className="text-gray-300 max-w-2xl">
            {activeDay === 1 
              ? 'Hands-on technical workshops, CTF competitions, and practical cybersecurity skill building'
              : 'Expert talks, industry insights, networking with law enforcement, and advanced security demonstrations'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;