import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, GraduationCap, Send, CheckCircle, Zap, Shield, Target, Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface RegistrationProps {
  selectedDay?: 'day1' | 'day2';
}

const Registration: React.FC<RegistrationProps> = ({ selectedDay }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: user?.email || '',
    phone: '',
    college: '',
    year: '',
    branch: '',
    interests: [],
    day: selectedDay || ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    if (user?.email) {
      setFormData(prev => ({ ...prev, email: user.email || '' }));
    }
    if (selectedDay) {
      setFormData(prev => ({ ...prev, day: selectedDay }));
    }
  }, [user, selectedDay]);

  const interests = [
    { name: 'Penetration Testing', icon: Target, color: 'red' },
    { name: 'Ethical Hacking', icon: Shield, color: 'cyan' },
    { name: 'Digital Forensics', icon: '🔍', color: 'purple' },
    { name: 'Network Security', icon: '🌐', color: 'green' },
    { name: 'Cryptography', icon: '🔐', color: 'yellow' },
    { name: 'Malware Analysis', icon: '🦠', color: 'red' },
    { name: 'Web Security', icon: '🌍', color: 'blue' },
    { name: 'Mobile Security', icon: '📱', color: 'purple' },
    { name: 'IoT Security', icon: '📡', color: 'cyan' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest as never)
        ? prev.interests.filter((i: string) => i !== interest)
        : [...prev.interests, interest as never]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-emerald-200/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/8 to-lime-400/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="cyber-card p-16 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-green-400/50 rounded-3xl backdrop-blur-sm transform hover:scale-105 transition-all duration-700">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-emerald-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-emerald-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-8" />
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="cyber-text-glow text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">
                  Registration Complete!
                </span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Welcome to the CyberConverge! You'll receive a confirmation email with 
                event details, access credentials, and exclusive pre-event materials.
              </p>
              
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-emerald-400/10 rounded-xl border border-emerald-400/20">
                  <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-sm text-emerald-400 font-semibold">Instant Access</div>
                  <div className="text-xs text-gray-400">CTF Platform Ready</div>
                </div>
                <div className="p-4 bg-emerald-400/10 rounded-xl border border-emerald-400/20">
                  <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-sm text-emerald-400 font-semibold">VIP Materials</div>
                  <div className="text-xs text-gray-400">Exclusive Resources</div>
                </div>
                <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <Target className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm text-emerald-500 font-semibold">Priority Support</div>
                  <div className="text-xs text-gray-400">Direct Expert Access</div>
                </div>
              </div>
              
              <div className="inline-block px-10 py-4 bg-gradient-to-r from-emerald-400 to-lime-300 text-black font-bold rounded-2xl text-lg transform hover:scale-105 transition-all duration-300">
                See you at CyberConverge 2025! 🚀
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
      {/* Complex Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/5 to-emerald-200/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-96 h-96 bg-gradient-to-tl from-emerald-500/6 to-lime-400/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-lime-300/6 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Creative Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-6xl sm:text-7xl font-black mb-6 leading-none">
              <span className="block text-white transform -rotate-2">JOIN THE</span>
              <span className="block cyber-text-glow text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-600 to-lime-300 transform rotate-2 -mt-4">
                REVOLUTION
              </span>
            </h2>
            <div className="absolute -top-12 -right-16 w-32 h-32 border-2 border-emerald-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -bottom-8 -left-12 w-20 h-20 border-2 border-emerald-500/20 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
            Secure your spot in the most anticipated cybersecurity event of the year. 
            Limited seats available for this exclusive experience.
          </p>
          
          {/* Day Selection Indicator */}
          {selectedDay && (
            <div className="mt-8 flex justify-center">
              <div className={`inline-flex items-center px-8 py-4 rounded-2xl border backdrop-blur-sm ${
                selectedDay === 'day1' 
                  ? 'bg-emerald-400/20 border-emerald-400/40 text-emerald-400' 
                  : 'bg-cyan-400/20 border-cyan-400/40 text-cyan-400'
              }`}>
                <Calendar className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-bold text-lg">
                    {selectedDay === 'day1' ? 'Day 1 Registration' : 'Day 2 Registration'}
                  </div>
                  <div className="text-sm opacity-80">
                    {selectedDay === 'day1' ? 'August 28, 2025' : 'August 29, 2025'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Form Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Form - Spans 8 columns */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info Section */}
              <div className="cyber-card p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700 rounded-2xl backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-500">
                <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center">
                  <User className="w-6 h-6 mr-3" />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="cyber-input-group">
                    <label className="block text-emerald-400 font-medium mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`cyber-input w-full px-6 py-4 bg-gray-900/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-emerald-400 shadow-lg shadow-emerald-400/25' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="cyber-input-group">
                    <label className="block text-emerald-400 font-medium mb-3 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address *
                      <span className="ml-2 text-xs bg-emerald-400/20 text-emerald-400 px-2 py-1 rounded">Auto-filled</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      readOnly
                      disabled
                      className="cyber-input w-full px-6 py-4 bg-gray-800/50 border-2 rounded-xl text-gray-300 border-gray-500 cursor-not-allowed"
                      placeholder="your.email@domain.com"
                    />
                    <p className="text-xs text-gray-400 mt-2">Email automatically filled from your Google account</p>
                  </div>

                  <div className="cyber-input-group">
                    <label className="block text-emerald-400 font-medium mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`cyber-input w-full px-6 py-4 bg-gray-900/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === 'phone' 
                          ? 'border-emerald-400 shadow-lg shadow-emerald-400/25' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="cyber-input-group">
                    <label className="block text-emerald-400 font-medium mb-3">
                      College/University *
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('college')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`cyber-input w-full px-6 py-4 bg-gray-900/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === 'college' 
                          ? 'border-emerald-400 shadow-lg shadow-emerald-400/25' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Your institution name"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Info Section */}
              <div className="cyber-card p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700 rounded-2xl backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-500">
                <h3 className="text-2xl font-bold text-emerald-500 mb-8 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Academic Details
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="cyber-input-group">
                    <label className="block text-emerald-500 font-medium mb-3">Year of Study *</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('year')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`cyber-input w-full px-6 py-4 bg-gray-900/50 border-2 rounded-xl text-white focus:outline-none transition-all duration-300 ${
                        focusedField === 'year' 
                          ? 'border-emerald-500 shadow-lg shadow-emerald-500/25' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="postgrad">Postgraduate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="cyber-input-group">
                    <label className="block text-emerald-500 font-medium mb-3">Branch/Major *</label>
                    <input
                      type="text"
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('branch')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`cyber-input w-full px-6 py-4 bg-gray-900/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === 'branch' 
                          ? 'border-emerald-500 shadow-lg shadow-emerald-500/25' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="e.g., Computer Science, IT, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Interests Section */}
              <div className="cyber-card p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700 rounded-2xl backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-500">
                <h3 className="text-2xl font-bold text-emerald-400 mb-8">Areas of Interest</h3>
                <p className="text-gray-400 mb-6">Select all areas that excite you (multiple selections encouraged)</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interests.map((interest, index) => (
                    <label
                      key={interest.name}
                      className={`cyber-checkbox group flex items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        formData.interests.includes(interest.name as never)
                          ? `bg-${interest.color}-400/20 border-${interest.color}-400 text-${interest.color}-400 shadow-lg shadow-${interest.color}-400/25`
                          : 'bg-gray-900/50 border-gray-600 text-gray-300 hover:border-gray-500'
                      } ${
                        index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest.name as never)}
                        onChange={() => handleInterestChange(interest.name)}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-3">
                        {typeof interest.icon === 'string' ? (
                          <span className="text-2xl">{interest.icon}</span>
                        ) : (
                          <interest.icon className="w-5 h-5" />
                        )}
                        <span className="font-medium">{interest.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-button group inline-flex items-center px-12 py-6 bg-gradient-to-r from-emerald-400 via-emerald-600 to-lime-300 text-black font-bold text-xl rounded-2xl hover:from-emerald-300 hover:via-emerald-500 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-500 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl shadow-emerald-400/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                      Securing Your Spot...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Join CyberConverge 2025
                      <Zap className="w-6 h-6 ml-3 group-hover:scale-125 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Side Info Panel - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            {/* Registration Benefits */}
            <div className="cyber-card p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-cyan-400/30 rounded-2xl backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-all duration-700">
              <h4 className="text-xl font-bold text-cyan-400 mb-6">What You Get</h4>
              <div className="space-y-4">
                {[
                  { icon: '🎯', text: 'Exclusive CTF Access', color: 'text-red-400' },
                  { icon: '🏆', text: 'Certificate of Participation', color: 'text-yellow-400' },
                  { icon: '🎁', text: 'Swag & Goodies', color: 'text-green-400' },
                  { icon: '🤝', text: 'Industry Networking', color: 'text-purple-400' },
                  { icon: '📚', text: 'Learning Resources', color: 'text-cyan-400' },
                  { icon: '🍕', text: 'Meals & Refreshments', color: 'text-orange-400' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className={`${benefit.color} font-medium`}>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="cyber-card p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-purple-400/30 rounded-2xl backdrop-blur-sm transform -rotate-1 hover:rotate-0 transition-all duration-700">
              <h4 className="text-xl font-bold text-purple-400 mb-6">Event Highlights</h4>
              <div className="space-y-6">
                <div className="text-center p-4 bg-purple-400/10 rounded-xl">
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-sm text-purple-400">Expected Participants</div>
                </div>
                <div className="text-center p-4 bg-cyan-400/10 rounded-xl">
                  <div className="text-3xl font-black text-white">₹50K</div>
                  <div className="text-sm text-cyan-400">Prize Pool</div>
                </div>
                <div className="text-center p-4 bg-green-400/10 rounded-xl">
                  <div className="text-3xl font-black text-white">48hrs</div>
                  <div className="text-sm text-green-400">Non-stop Learning</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="cyber-card p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700 rounded-xl backdrop-blur-sm">
              <h4 className="text-lg font-bold text-white mb-4">Need Help?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Vijval:</span>
                  <span className="text-cyan-400 font-mono">+91 93243 84817</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Niharga:</span>
                  <span className="text-purple-400 font-mono">+91 96061 49532</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">cyscom@vit.ac.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;