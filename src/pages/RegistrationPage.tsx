import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Home, User, Shield } from 'lucide-react';
import Registration from '../components/Registration';
import DaySelection from '../components/DaySelection';

const RegistrationPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2' | 'both' | null>(null);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const handleDaySelect = (day: 'day1' | 'day2' | 'both') => {
    setSelectedDay(day);
  };

  const handleBackToSelection = () => {
    setSelectedDay(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-emerald-200/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/8 to-lime-400/8 rounded-full blur-3xl"></div>
      </div>

      {/* Header with user info and logout */}
      <div className="relative z-20 bg-gray-800/50 backdrop-blur-sm border-b border-emerald-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Title */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-lime-300 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-gray-900" />
              </div>
              <h1 className="text-xl font-bold text-white">
                <span className="cyber-text-glow text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">
                  CyberConverge Registration
                </span>
              </h1>
            </div>

            {/* User info and actions */}
            <div className="flex items-center space-x-4">
              {user && (
                <div className="flex items-center space-x-3 text-sm">
                  <div className="flex items-center space-x-2 bg-emerald-400/10 px-3 py-2 rounded-lg border border-emerald-400/20">
                    <User className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">{user.displayName}</span>
                  </div>
                </div>
              )}
              
              <button
                onClick={handleGoHome}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 rounded-lg border border-red-600/20 hover:border-red-600/30 transition-all duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form or Day Selection */}
      <div className="relative z-10">
        {selectedDay ? (
          <Registration selectedDay={selectedDay} onBack={handleBackToSelection} />
        ) : (
          <DaySelection onDaySelect={handleDaySelect} />
        )}
      </div>

      {/* Welcome Message - Only show when day is selected */}
      {selectedDay && (
        <div className="fixed top-20 right-6 z-30 max-w-sm">
          <div className="bg-emerald-400/10 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-emerald-400 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-900" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-emerald-400 font-semibold text-sm">
                  Welcome, {user?.displayName?.split(' ')[0]}!
                </p>
                <p className="text-gray-400 text-xs">
                  Registering for {selectedDay === 'day1' ? 'CTF Championship' : (selectedDay === 'day2' ? 'Cyber Security Summit' : 'Both Days')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
