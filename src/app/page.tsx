"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, Shield, ArrowRight, Calendar, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { submitRegistration } from "@/lib/actions"

export default function CyberconvergePage() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    role: "",
    registrationType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [registrationResult, setRegistrationResult] = useState<any>(null)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2024-08-28T08:00:00+05:30").getTime() // IST timezone

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })

    const result = await submitRegistration(formDataObj)
    setRegistrationResult(result)
    setIsSubmitting(false)
    setShowSuccess(true)

    // Handle payment redirect if required
    if (result.success && result.requiresPayment) {
      setTimeout(() => {
        window.open(result.paymentUrl, "_blank")
      }, 2000)
    }
  }

  const handleWhatsAppJoin = () => {
    window.open("https://chat.whatsapp.com/cyberconverge2024", "_blank")
  }

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-blue-900/30 bg-black/95 backdrop-blur sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Shield className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-xl font-bold text-white">Cyberconverge</span>
                </div>
              </div>
            </motion.div>
            <nav className="hidden md:block">
              <motion.div
                className="ml-10 flex items-baseline space-x-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {["about", "agenda", "partners", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    variants={fadeInUp}
                    onClick={() => scrollToSection(section)}
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors capitalize"
                    whileHover={{ y: -2 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </motion.div>
            </nav>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-4">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="sm"
                    className="bg-blue-800 hover:bg-blue-700 text-white"
                    onClick={() => scrollToSection("registration")}
                  >
                    Register Now
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 matrix-bg"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="bg-blue-800/20 text-blue-400 border-blue-800/30 mb-4">
                  National Cybersecurity Conference
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="glitch-text">Join us for</span>
                <br />
                <span className="text-blue-800">Cyberconverge</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Connecting Law, Security, and Innovation at VIT Chennai. Join industry leaders, law enforcement
                officials, and cybersecurity experts.
              </motion.p>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="prize-glow-card bg-gradient-to-r from-blue-800/20 to-blue-700/20 border border-blue-600/50 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <motion.div
                      className="w-3 h-3 bg-blue-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    />
                    <span className="text-blue-300 font-semibold text-lg">
                      🏆 CTF Competition: $1000 USD Prize Pool
                    </span>
                    <motion.div
                      className="w-3 h-3 bg-blue-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="grid grid-cols-4 gap-4 text-center">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="cyber-border bg-gray-900/50 p-4 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-2xl font-bold text-blue-400"
                        key={item.value}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.value}
                      </motion.div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="text-lg px-8 py-3 bg-blue-800 hover:bg-blue-700 text-white"
                    onClick={() => scrollToSection("registration")}
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-3 border-blue-800 text-blue-400 hover:bg-blue-800/10 bg-transparent"
                    onClick={() => scrollToSection("agenda")}
                  >
                    View Agenda
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>August 28-29, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>VIT Chennai, Tamil Nadu</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="terminal hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-gray-400 text-sm ml-4">cyberconverge@vit-chennai:~</span>
              </div>
              <div className="terminal-content">
                <div className="mb-2">
                  <span className="terminal-prompt">root@cyberconverge:~$ </span>
                  <span className="terminal-command">./scan_threats.sh</span>
                </div>
                <div className="terminal-output mb-2">[INFO] Initializing threat detection systems...</div>
                <div className="terminal-output mb-2">[SUCCESS] 500+ Security professionals connected</div>
                <div className="terminal-output mb-2">[SUCCESS] Law enforcement agencies: ACTIVE</div>
                <div className="terminal-output mb-2">[SUCCESS] Industry experts: ONLINE</div>
                <div className="mb-2">
                  <span className="terminal-prompt">root@cyberconverge:~$ </span>
                  <span className="terminal-command typing-animation">join_conference --register-now</span>
                </div>
                <div className="terminal-output">[READY] Cyberconverge 2024 - August 28-29</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="about"
        className="py-20 bg-gray-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Cyberconverge</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A premier platform for cybersecurity collaboration and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6">
                Join Cyberconverge, a National Cybersecurity Conference fostering essential public-private partnerships
                between industry innovators and law enforcement agencies including CBI Joint Director.
              </p>
              <p className="text-gray-300 mb-6">
                Network with senior officials, contribute insights during keynote sessions, and gain exposure among
                influential cybersecurity professionals.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Network & Connect",
                  desc: "Direct interaction with law enforcement officials and industry peers",
                },
                {
                  title: "Share & Contribute",
                  desc: "Contribute insights during high-level keynote sessions and panels",
                },
                { title: "Gain Exposure", desc: "Increase visibility among targeted national cybersecurity audience" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start space-x-4"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-blue-400 rounded-full mt-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.5 }}
                  />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="agenda"
        className="py-20 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Conference Agenda</h2>
            <p className="text-xl text-gray-300">Two days of intensive cybersecurity sessions and hands-on workshops</p>
          </motion.div>

          {/* Day Toggle */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/50 p-1 rounded-lg border border-blue-800/30">
              <motion.button
                onClick={() => setActiveDay("day1")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeDay === "day1" ? "bg-blue-800 text-white" : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Day 1 - CTF & Workshop
              </motion.button>
              <motion.button
                onClick={() => setActiveDay("day2")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeDay === "day2" ? "bg-blue-800 text-white" : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Day 2 - Conference
              </motion.button>
            </div>
          </motion.div>

          {/* Timeline Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeDay === "day1" ? (
                <motion.div
                  key="day1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-900/50 border-blue-800/20">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">Day 1 - CTF & Workshop</CardTitle>
                      <CardDescription className="text-gray-300">
                        August 28, 2024 - Hands-on Training & Competition
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          time: "8:00 - 9:00 AM",
                          title: "Kali Linux Installation Booth",
                          desc: "Setup and configuration support for participants",
                        },
                        {
                          time: "9:00 - 11:00 AM",
                          title: "Hands-on CTF Workshop",
                          desc: "Comprehensive training session for Capture The Flag competition",
                        },
                        {
                          time: "11:00 AM - 1:00 PM",
                          title: "CTF Competition (Session 1)",
                          desc: "First round of competitive cybersecurity challenges",
                        },
                        { time: "1:00 - 1:30 PM", title: "Lunch Break", desc: "Networking and refreshments" },
                        {
                          time: "1:30 - 4:30 PM",
                          title: "CTF Competition (Session 2)",
                          desc: "Advanced challenges and final competition rounds",
                        },
                        {
                          time: "4:30 - 5:00 PM",
                          title: "Evening Snacks & Networking",
                          desc: "Closing networking session with refreshments",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(55, 65, 81, 0.4)" }}
                        >
                          <div className="text-blue-400 font-mono text-sm min-w-[100px] bg-blue-700/20 px-3 py-1 rounded">
                            {item.time}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="day2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-900/50 border-blue-800/20">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">Day 2 - Conference</CardTitle>
                      <CardDescription className="text-gray-300">
                        August 29, 2024 - Keynotes, Sessions & Networking
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          time: "8:00 AM",
                          title: "Check-in & Coffee Kickstart",
                          desc: "Participants arrive, collect badges, and network informally",
                        },
                        {
                          time: "8:30 AM",
                          title: "Grand Opening",
                          desc: "Welcome remarks and housekeeping announcements",
                        },
                        {
                          time: "9:00 AM",
                          title: "Inaugural Session",
                          desc: "Address by Chief Guests, Law Enforcement Officials (CBI, Cyber Crime Wing, Local Police)",
                        },
                        {
                          time: "10:00 AM",
                          title: "SOC & SIEM Secrets",
                          desc: "Exploring Security Operations Centers and Security Information & Event Management best practices",
                        },
                        {
                          time: "11:00 AM",
                          title: "DFIR & Blue Teaming",
                          desc: "Incident Response, Digital Forensics methodologies, and threat mitigation strategies",
                        },
                        {
                          time: "12:00 PM",
                          title: "Networking Hour",
                          desc: "Facilitated networking among law enforcement, security professionals, and industry experts",
                        },
                        {
                          time: "1:00 PM",
                          title: "Lunch & Recharge",
                          desc: "Refuel and recharge for the thrilling sessions ahead",
                        },
                        {
                          time: "2:00 PM",
                          title: "Bug Bounty Buzz",
                          desc: "Insights from ethical hackers and bounty hunters on vulnerability reporting",
                        },
                        {
                          time: "2:45 PM",
                          title: "Joint Session Warm-up",
                          desc: "Overview of collaborative initiatives and agenda for technical demonstrations",
                        },
                        {
                          time: "3:00 PM",
                          title: "Red Team Live",
                          desc: "Live demonstrations of Red Team tradecraft, advanced command-and-control (C2) infrastructures, and evasion techniques by T.A.S.C. & CYSCOM VIT Chennai",
                        },
                        {
                          time: "4:30 PM",
                          title: "Wrap-up & Clicks",
                          desc: "Certificate distribution, memento presentations, and group photos with dignitaries, speakers, and participants",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(55, 65, 81, 0.4)" }}
                        >
                          <div className="text-blue-400 font-mono text-sm min-w-[100px] bg-blue-700/20 px-3 py-1 rounded">
                            {item.time}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="partners"
        className="py-20 bg-gray-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Partners</h2>
            <p className="text-xl text-gray-300">Leading cybersecurity organizations and law enforcement agencies</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: "Central Bureau of Investigation", logo: "/generic-investigation-logo.png" },
              { name: "Threat Assessment and Security Consortium", logo: "/generic-abstract-logo.png" },
              { name: "Project SAFE – PPP Initiative under AEGIS", logo: "/project-safe-logo.png" },
              { name: "Tamil Nadu Police Cyber Crime Wing", logo: "/tamil-nadu-police-logo.png" },
              { name: "Altered Security", logo: "/placeholder-8hkxw.png" },
              { name: "Yet to be confirmed", logo: "/placeholder-duo5c.png" },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                className="bg-white/10 p-8 rounded-lg text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-white font-medium text-sm">{partner.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="registration"
        className="py-20 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Registration</h2>
            <p className="text-xl text-gray-300">Secure your spot at Cyberconverge 2024</p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!showSuccess ? (
              <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gray-900/50 border-blue-800/20">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Register for Cyberconverge</CardTitle>
                    <CardDescription className="text-gray-300">
                      Fill out the form below to register for the conference
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        <motion.div variants={fadeInUp}>
                          <Label htmlFor="name" className="text-white">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                          <Label htmlFor="email" className="text-white">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        <motion.div variants={fadeInUp}>
                          <Label htmlFor="phone" className="text-white">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                          <Label htmlFor="institution" className="text-white">
                            Institution/Company *
                          </Label>
                          <Input
                            id="institution"
                            required
                            value={formData.institution}
                            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Label htmlFor="role" className="text-white">
                          Role *
                        </Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) => setFormData({ ...formData, role: value })}
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="faculty">Faculty</SelectItem>
                            <SelectItem value="industry">Industry Professional</SelectItem>
                            <SelectItem value="law-enforcement">Law Enforcement</SelectItem>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Label className="text-white mb-4 block">Registration Type *</Label>
                        <RadioGroup
                          value={formData.registrationType}
                          onValueChange={(value) => setFormData({ ...formData, registrationType: value })}
                          className="space-y-4"
                        >
                          <motion.div
                            className="flex items-center space-x-2 p-4 bg-gray-800/30 rounded-lg"
                            whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
                          >
                            <RadioGroupItem value="day1" id="day1" />
                            <Label htmlFor="day1" className="text-white flex-1">
                              <div className="font-semibold">Day 1 Only - CTF & Workshop (₹150)</div>
                              <div className="text-sm text-gray-400">Hands-on training and competition</div>
                            </Label>
                          </motion.div>
                          <motion.div
                            className="flex items-center space-x-2 p-4 bg-gray-800/30 rounded-lg"
                            whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
                          >
                            <RadioGroupItem value="day2" id="day2" />
                            <Label htmlFor="day2" className="text-white flex-1">
                              <div className="font-semibold">Day 2 Only - Conference (FREE)</div>
                              <div className="text-sm text-gray-400">Keynotes, sessions, and networking</div>
                            </Label>
                          </motion.div>
                          <motion.div
                            className="flex items-center space-x-2 p-4 bg-blue-800/20 border border-blue-800/30 rounded-lg"
                            whileHover={{ backgroundColor: "rgba(29, 78, 216, 0.3)" }}
                          >
                            <RadioGroupItem value="both" id="both" />
                            <Label htmlFor="both" className="text-white flex-1">
                              <div className="font-semibold">Both Days - Complete Experience (₹150)</div>
                              <div className="text-sm text-gray-400">Best Value! Full conference + CTF access</div>
                            </Label>
                          </motion.div>
                        </RadioGroup>
                      </motion.div>

                      <motion.div
                        className="bg-blue-800/10 border border-blue-800/30 rounded-lg p-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="text-white font-semibold mb-2">Registration Details:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Day 2 (Conference) is FREE for all participants</li>
                          <li>• Day 1 (CTF & Workshop) costs ₹150 if registered separately</li>
                          <li>• Both Days package is only ₹150 - incredible value!</li>
                          <li>• Payment will be processed through VIT Chennai's official portal</li>
                          <li>• WhatsApp group access for updates and networking</li>
                        </ul>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          className="w-full bg-blue-800 hover:bg-blue-700 text-white"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Register Now"}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                className="max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-green-900/20 border-green-500/30">
                  <CardContent className="pt-6">
                    <motion.div
                      className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Check className="w-8 h-8 text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Registration Successful!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for registering for Cyberconverge 2024.
                      {registrationResult?.requiresPayment && " You will be redirected to the payment portal shortly."}
                    </p>
                    <div className="space-y-4">
                      {registrationResult?.requiresPayment && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className="bg-blue-800 hover:bg-blue-700 text-white mr-4"
                            onClick={() => window.open(registrationResult.paymentUrl, "_blank")}
                          >
                            Proceed to Payment <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </motion.div>
                      )}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="border-green-500 text-green-400 hover:bg-green-500/10 bg-transparent"
                          onClick={handleWhatsAppJoin}
                        >
                          Join WhatsApp Group
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-blue-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Join Cyberconverge?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Be part of India's premier cybersecurity conference connecting law enforcement, industry, and academia.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div {...scaleOnHover}>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3 bg-white text-blue-800 hover:bg-gray-100"
                onClick={() => scrollToSection("registration")}
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div {...scaleOnHover}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white/10 bg-transparent"
              >
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gray-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">About CYSCOM</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The Cybersecurity Student Community at VIT Chennai
            </p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="/placeholder-y0w73.png" alt="CYSCOM VIT Chennai Logo" className="h-16 mx-auto mb-4" />
            </motion.div>
          </motion.div>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-6">
              CYSCOM – the Cybersecurity Student Community at VIT Chennai is dedicated to raising awareness about
              cybersecurity and the threats posed by malware and ransomware. Formerly the OWASP VIT Student Chapter, it
              is officially recognized by AICTE under the SPICES scheme.
            </p>
            <p className="text-gray-300">
              Through diverse events and initiatives, CYSCOM works towards creating a cyber-safe world by equipping
              people with the knowledge to prevent cyber threats. The community maintains an active social media
              presence and fosters an inclusive, respectful environment for all members and partners.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        id="contact"
        className="bg-gray-900 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Shield className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-xl font-bold text-white">Cyberconverge</span>
              </div>
              <p className="text-gray-300 mb-4">National Cybersecurity Conference by CYSCOM, VIT Chennai. 🚀</p>
              <div className="flex space-x-3">
                {[
                  { bg: "bg-blue-600", hover: "hover:bg-blue-500", icon: "f" },
                  { bg: "bg-blue-400", hover: "hover:bg-blue-300", icon: "t" },
                  { bg: "bg-blue-700", hover: "hover:bg-blue-600", icon: "in" },
                  {
                    bg: "bg-gradient-to-r from-purple-500 to-pink-500",
                    hover: "hover:from-purple-400 hover:to-pink-400",
                    icon: "ig",
                  },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    className={`w-8 h-8 ${social.bg} rounded-full flex items-center justify-center ${social.hover} cursor-pointer`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-white text-xs font-bold">{social.icon}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold text-white mb-4">Event Details</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>August 28-29, 2024</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>VIT Chennai, Tamil Nadu</span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 96061 49532</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 93243 84817</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>cyscom@vit.ac.in</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            className="border-t border-gray-700 mt-6 pt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © 2024 CYSCOM, VIT Chennai. Made with 💙 for cybersecurity community
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
