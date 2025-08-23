import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-gray-900/80 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">CyberConverge</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Join the premier cybersecurity event at VIT Chennai. Learn, compete, and connect with industry experts.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                <span className="text-cyan-400 text-sm font-bold">C</span>
              </div>
              <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-400 text-sm font-bold">C</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Kamaraj Auditorium, VIT Chennai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 93243 84817 (Vijval)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 98906 62736 (Harsh)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>cyscom@vit.ac.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#details" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <ExternalLink className="w-4 h-4" />
                <span>Event Details</span>
              </a>
              <a href="https://eventhubcc.vit.ac.in/EventHub/eventPreview?id=0&categoryType=&eid=222" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <ExternalLink className="w-4 h-4" />
                <span>Registration</span>
              </a>
              <a href="https://chennai.vit.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <ExternalLink className="w-4 h-4" />
                <span>VIT Chennai</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 CyberConverge. Organized by CYSCOM, VIT Chennai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">Powered by</span>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">CYSCOM VIT Chennai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;