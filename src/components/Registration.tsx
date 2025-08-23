import React, { useState } from 'react';
import { User, Mail, Phone, GraduationCap, Send, CheckCircle, Zap, Shield, Target } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

interface RegistrationProps {
  selectedDay: 'day1' | 'day2' | 'both';
  onBack: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ selectedDay, onBack }) => {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '', // Don't auto-fill from Google account
    email: user?.email || '', // Auto-filled from Firebase auth
    phone: '',
    college: '',
    year: '',
    branch: '',
    interests: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [showDay1InstructionAfterBoth, setShowDay1InstructionAfterBoth] = useState(false);

  // Interests removed - no longer using interest selections

  const getDayInfo = (day: 'day1' | 'day2' | 'both') => {
    const dayInfo = {
      day1: {
        title: 'Day 1: Offensive Security',
        date: 'March 15, 2025',
        description: 'Focus on penetration testing, web security, and offensive techniques',
        color: 'emerald',
        topics: ['Web Application Testing', 'Network Penetration', 'Social Engineering', 'OSINT Techniques']
      },
      day2: {
        title: 'Day 2: Defensive Security',
        date: 'March 16, 2025', 
        description: 'Emphasis on digital forensics, incident response, and defensive strategies',
        color: 'cyan',
        topics: ['Digital Forensics', 'Malware Analysis', 'Incident Response', 'Security Monitoring']
      }
    };
    if (day === 'both') {
      return {
        title: 'Both Days: Full Registration',
        date: `${dayInfo.day1.date} & ${dayInfo.day2.date}`,
        description: 'Register for both tracks and receive instructions for Day 1 after submission',
        color: 'emerald',
        topics: [...dayInfo.day1.topics, ...dayInfo.day2.topics]
      };
    }

    return dayInfo[day as 'day1' | 'day2'];
  };

  const currentDayInfo = getDayInfo(selectedDay);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // interests are no longer collected for Day 2 / Both

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Include day information in submission
      const submissionData = {
        ...formData,
        selectedDay,
        dayTitle: currentDayInfo.title,
        dayDate: currentDayInfo.date,
        userId: user?.uid,
        userEmail: user?.email,
        registrationDate: new Date().toISOString(),
        timestamp: new Date()
      };
      
      // Save to appropriate collection(s)
      if (selectedDay === 'both') {
        // Write to both collections
        const docRef1 = await addDoc(collection(db, 'day1'), submissionData);
        const docRef2 = await addDoc(collection(db, 'day2'), submissionData);
        console.log('Submitted to both collections:', docRef1.id, docRef2.id);
        // After registering for both, show Day 1 instructions panel
        setShowDay1InstructionAfterBoth(true);
      } else {
        const collectionName = selectedDay === 'day1' ? 'day1' : 'day2';
        const docRef = await addDoc(collection(db, collectionName), submissionData);
        console.log('Registration saved with ID: ', docRef.id);
        console.log('Submitted to collection:', collectionName);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error saving registration:', error);
      // You might want to show an error message to the user
      alert('Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-xl p-4 mb-8">
                <p className="text-emerald-400 font-semibold text-lg">
                  {currentDayInfo.title}
                </p>
                <p className="text-gray-300 text-sm">
                  {currentDayInfo.date} • {currentDayInfo.description}
                </p>
              </div>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Welcome to the CyberConverge family!
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
              
              <button
                onClick={onBack}
                className="inline-block px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl mr-4 transition-all duration-300"
              >
                Register for Another Day
              </button>
              
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
            <div className="mb-4 inline-flex items-center px-6 py-2 bg-emerald-400/20 border border-emerald-400/30 rounded-full">
              <span className="text-emerald-400 font-semibold">{currentDayInfo.title}</span>
              <span className="mx-3 w-1 h-1 bg-emerald-400 rounded-full"></span>
              <span className="text-emerald-400 text-sm">{currentDayInfo.date}</span>
            </div>
            <h2 className="text-6xl sm:text-7xl font-black mb-6 leading-none">
              <span className="block text-white transform -rotate-2">REGISTER FOR</span>
              <span className="block cyber-text-glow text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-600 to-lime-300 transform rotate-2 -mt-4">
                {selectedDay.toUpperCase()}
              </span>
            </h2>
            <div className="absolute -top-12 -right-16 w-32 h-32 border-2 border-emerald-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -bottom-8 -left-12 w-20 h-20 border-2 border-emerald-500/20 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
            {currentDayInfo.description}. Secure your spot for this specialized track.
          </p>
          <button
            onClick={onBack}
            className="mt-4 text-emerald-400 hover:text-emerald-300 underline transition-colors duration-300"
          >
            ← Back to day selection
          </button>
        </div>

        {/* Dynamic Form Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Form - Spans 8 columns */}
          <div className="lg:col-span-8">

            {(selectedDay === 'day1' || showDay1InstructionAfterBoth) ? (
              <div className="cyber-card p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">CyberConverge Day 1 Instructions</h3>
                <p className="text-gray-300 mb-4">Please use VIT Chennai Event Hub to register for Day 1.</p>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                  <li>Create an account / Log in using existing account <span className="text-cyan-300"><a href="https://eventhubcc.vit.ac.in/EventHub/login"><u>here</u></a></span> and return to this page.</li>
                  <img
                    src="/signup.png"
                    alt="Day 1 - Offensive Security"
                  />
                  <li>After Successful login use <span className="font-medium text-emerald-300"><a href="https://eventhubcc.vit.ac.in/EventHub/eventPreview?id=0&categoryType=&eid=222"><u>this link</u></a></span> to register for Day 1 of CyberConverge.</li>
                  <li>If you face any problems, Contact us on WhatsApp at <span className="text-cyan-300">9324384817</span> for assistance.</li>
                </ul>
                <div className="mt-6">
                  <button onClick={onBack} className="px-6 py-3 bg-emerald-400 text-black rounded-lg font-semibold">Back to Day Selection</button>
                </div>
              </div>
            ) : (
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
                      Email Address *
                      <span className="ml-2 text-xs bg-emerald-400/20 text-emerald-400 px-2 py-1 rounded">
                        Auto-filled
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      readOnly
                      className="cyber-input w-full px-6 py-4 bg-gray-900/30 border-2 border-gray-500 rounded-xl text-gray-300 cursor-not-allowed opacity-75"
                      placeholder="your.email@domain.com"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      This email is linked to your Google account and cannot be changed.
                    </p>
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

              {/* Interests removed for Day 2 / Both registration per request */}

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
                      Register for {currentDayInfo.title}
                      <Zap className="w-6 h-6 ml-3 group-hover:scale-125 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
            )}
          </div>

          {/* Side Info Panel - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            {/* Day-specific Topics */}
            <div className="cyber-card p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-emerald-400/30 rounded-2xl backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-all duration-700">
              <h4 className="text-xl font-bold text-emerald-400 mb-6">{currentDayInfo.title} Topics</h4>
              <div className="space-y-3">
                {currentDayInfo.topics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Benefits */}
            <div className="cyber-card p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-cyan-400/30 rounded-2xl backdrop-blur-sm transform -rotate-1 hover:rotate-0 transition-all duration-700">
              <h4 className="text-xl font-bold text-cyan-400 mb-6">What You Get</h4>
              <div className="space-y-4">
                {[
                  { icon: '🎯', text: 'Hands-on Labs', color: 'text-red-400' },
                  { icon: '🏆', text: 'Certificate of Completion', color: 'text-yellow-400' },
                  { icon: '🎁', text: 'Exclusive Swag', color: 'text-green-400' },
                  { icon: '🤝', text: 'Expert Mentoring', color: 'text-purple-400' },
                  { icon: '📚', text: 'Study Materials', color: 'text-cyan-400' },
                  { icon: '🍕', text: 'Meals Included', color: 'text-orange-400' }
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