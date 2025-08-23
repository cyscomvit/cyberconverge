import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, Chrome, Zap, GraduationCap , Users, ArrowRight, AlertTriangle } from 'lucide-react';


const Login: React.FC = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const from = (location.state as any)?.from?.pathname || '/';

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (error: any) {
      setError('Failed to sign in with Google. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-emerald-200/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/8 to-lime-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-lime-300/6 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-20 w-20 bg-gradient-to-br from-emerald-400 to-lime-300 rounded-2xl flex items-center justify-center mb-8 transform rotate-3 hover:rotate-0 transition-all duration-500">
              <Shield className="h-10 w-10 text-gray-900" />
            </div>
            <h2 className="text-4xl font-black text-white mb-4">
              <span className="cyber-text-glow text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">
                CyberConverge 2025  
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Sign in with your Google account to register for CyberConverge 2025
            </p>
          </div>

          {/* Login Card */}
          <div className="cyber-card bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-emerald-400/30 rounded-3xl p-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-6">
              {/* Sign In Button */}
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="cyber-button w-full group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-300 text-black font-bold text-lg rounded-2xl hover:from-emerald-300 hover:via-emerald-400 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl shadow-emerald-400/25"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Chrome className="w-6 h-6 mr-3" />
                    Continue with Google
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              {/* Additional Info */}
              <div className="text-center">
                <p className="text-xs text-gray-400">
                  Sign in using you Google account.
                  We only access basic profile information needed for registration.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-8 mt-12">
            <div className="flex items-center space-x-2 text-gray-400">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">CYSCOM</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <GraduationCap  className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">VIT Chennai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-emerald-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-emerald-500/20 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Login;
