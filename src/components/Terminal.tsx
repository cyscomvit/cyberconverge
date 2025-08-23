import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cybersecurity-themed code that will be "typed" out
  const hackerCode = `#!/bin/bash
# CyberConverge Security Assessment Tool
# Advanced Penetration Testing Framework

echo "Initializing CyberConverge Security Scanner..."
echo "Target: 192.168.1.0/24"

# Network Discovery Phase
nmap -sn 192.168.1.0/24 | grep "Nmap scan report"
echo "Discovered $(nmap -sn 192.168.1.0/24 | grep -c "Nmap scan report") active hosts"

# Port Scanning
for ip in $(nmap -sn 192.168.1.0/24 | grep "Nmap scan report" | awk '{print $5}'); do
    echo "Scanning $ip..."
    nmap -sS -O -sV --script vuln $ip
done

# Vulnerability Assessment
echo "Running vulnerability checks..."
python3 << EOF
import socket
import sys
import threading
from datetime import datetime

def scan_port(target, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((target, port))
        if result == 0:
            print(f"Port {port}: Open")
        sock.close()
    except socket.gaierror:
        print("Hostname could not be resolved")
    except socket.error:
        print("Could not connect to server")

target = "192.168.1.100"
print(f"Scanning {target}")
print(f"Time started: {datetime.now()}")

common_ports = [21, 22, 23, 25, 53, 80, 110, 443, 993, 995]
for port in common_ports:
    scan_port(target, port)
EOF

# SQL Injection Testing
echo "Testing for SQL injection vulnerabilities..."
sqlmap -u "http://target.com/login.php" --data="username=admin&password=admin" --dbs

# XSS Testing
echo "Cross-Site Scripting (XSS) vulnerability scan..."
python3 -c "
import requests
payloads = ['<script>alert(1)</script>', '\"><script>alert(1)</script>']
for payload in payloads:
    r = requests.post('http://target.com/search', data={'q': payload})
    if payload in r.text:
        print(f'XSS vulnerability found with payload: {payload}')
"

# Metasploit Integration
echo "Launching Metasploit framework..."
msfconsole -q -x "
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST 192.168.1.50
set LPORT 4444
exploit -j
"

# Network Traffic Analysis
echo "Analyzing network traffic..."
tcpdump -i eth0 -w capture.pcap &
TCPDUMP_PID=$!
sleep 30
kill $TCPDUMP_PID
wireshark -r capture.pcap

# Hash Cracking
echo "Initiating password hash analysis..."
hashcat -m 1000 -a 0 hashes.txt rockyou.txt

# Steganography Detection
echo "Checking for hidden data in images..."
steghide extract -sf suspicious_image.jpg

# Log Analysis
echo "Parsing system logs for anomalies..."
grep -i "failed" /var/log/auth.log | tail -20
grep -i "error" /var/log/syslog | tail -20

# Forensic Analysis
echo "Digital forensics investigation..."
volatility -f memory_dump.raw imageinfo
volatility -f memory_dump.raw --profile=Win7SP1x64 pslist

# Encryption/Decryption
echo "Testing encryption algorithms..."
openssl enc -aes-256-cbc -in plaintext.txt -out encrypted.bin
openssl enc -d -aes-256-cbc -in encrypted.bin -out decrypted.txt

# Social Engineering Simulation
echo "Generating phishing email templates..."
python3 << EOF
import smtplib
from email.mime.text import MIMEText

def send_phishing_test():
    msg = MIMEText("This is a security awareness test.")
    msg['Subject'] = 'Security Test - Do Not Click'
    msg['From'] = 'security@company.com'
    msg['To'] = 'employee@company.com'
    print("Phishing test email prepared (not sent)")

send_phishing_test()
EOF

echo "Security assessment complete."
echo "Report generated: security_report_$(date +%Y%m%d_%H%M%S).html"
echo "Remember: This is for educational purposes only!"
echo "Always obtain proper authorization before testing!"

# Advanced Persistent Threat (APT) Simulation
echo "Simulating APT attack vectors..."
python3 << EOF
import time
import random

class APTSimulator:
    def __init__(self):
        self.stages = [
            "Initial Reconnaissance",
            "Weaponization",
            "Delivery",
            "Exploitation",
            "Installation",
            "Command & Control",
            "Actions on Objectives"
        ]

    def simulate_attack(self):
        for stage in self.stages:
            print(f"[APT] Stage: {stage}")
            time.sleep(random.uniform(0.5, 2.0))
            print(f"[APT] {stage} completed successfully")

apt = APTSimulator()
apt.simulate_attack()
EOF

echo "CyberConverge Security Assessment Framework - Complete"
echo "Stay vigilant, stay secure! 🛡️"`;

  // Initialize with welcome message
  useEffect(() => {
    const welcomeText = `CyberConverge Terminal v3.0 - Hacker Mode Activated
Type anything to start the security assessment...
Press any key to begin automated penetration testing...

`;
    setDisplayedText(welcomeText);
  }, []);

  // Handle keypress events (like hackertyper.net)
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore special keys
      if (event.ctrlKey || event.altKey || event.metaKey) return;
      if (['Tab', 'Shift', 'Control', 'Alt', 'Meta', 'CapsLock'].includes(event.key)) return;

      // Handle backspace
      if (event.key === 'Backspace') {
        setDisplayedText(prev => prev.slice(0, -1));
        return;
      }

      // Handle escape key to clear
      if (event.key === 'Escape') {
        setDisplayedText('');
        setCurrentIndex(0);
        return;
      }

      // For any other key, advance the hacker code
      if (currentIndex < hackerCode.length) {
        const charsToAdd = Math.floor(Math.random() * 3) + 1; // Add 1-3 characters per keypress
        const newIndex = Math.min(currentIndex + charsToAdd, hackerCode.length);
        const newText = hackerCode.slice(0, newIndex);

        setDisplayedText(prev => {
          const welcomeLines = prev.split('\n').slice(0, 4).join('\n') + '\n\n';
          return welcomeLines + newText;
        });
        setCurrentIndex(newIndex);

        // Reset when we reach the end
        if (newIndex >= hackerCode.length) {
          setTimeout(() => {
            setCurrentIndex(0);
            const welcomeText = `CyberConverge Terminal v3.0 - Hacker Mode Activated
Type anything to start the security assessment...
Press any key to begin automated penetration testing...

`;
            setDisplayedText(welcomeText);
          }, 3000);
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex, hackerCode]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText]);

  return (
    <div
      ref={containerRef}
      className="cyber-terminal w-full max-w-2xl mx-auto cursor-text"
      tabIndex={0}
      onClick={() => containerRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="terminal-header flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-cyan-400/50 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-mono text-sm">cyber@converge:~</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="terminal-body bg-black/95 backdrop-blur-sm border-x border-cyan-400/50 p-4 h-96 overflow-y-auto font-mono text-sm leading-relaxed"
      >
        <pre className="text-green-400 whitespace-pre-wrap break-words">
          {displayedText}
          <span className="animate-pulse text-cyan-400">█</span>
        </pre>
      </div>

      {/* Terminal Footer with Instructions */}
      <div className="bg-gray-800 border-t border-cyan-400/50 rounded-b-lg px-4 py-2">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Press any key to execute commands • ESC to clear • Backspace to delete</span>
          <span className="text-cyan-400">HACKER MODE ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;