'use client';

import { motion } from 'framer-motion';
import { 
  Award,
  TrendingUp,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Menu,
  X,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Quote,
  Star,
  Users,
  Target,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const graduateStories = [
    {
      id: 1,
      name: 'Sarah Okonkwo',
      image: '👩🏾‍💻',
      program: 'Full-Stack Development',
      duration: '16 weeks',
      category: 'academy',
      before: {
        role: 'Marketing Manager',
        company: 'Local Agency',
        salary: '₦800K/year'
      },
      after: {
        role: 'Full-Stack Developer',
        company: 'Paystack',
        location: 'Lagos, Nigeria',
        salary: '₦3.2M/year'
      },
      story: 'I was working in marketing but always felt drawn to tech. After researching bootcamps, I chose Rinspark Hub because of their job placement rate. The 16 weeks were intense but incredibly rewarding. The instructors were patient, the curriculum was practical, and the career support was outstanding. Within 2 weeks of graduating, I had 3 job offers. Now I\'m building payment solutions that impact millions of users.',
      highlights: [
        'Completed 5 major projects',
        'Learned React, Node.js, and MongoDB',
        'Received 3 job offers',
        '300% salary increase'
      ],
      testimonial: 'Rinspark Hub didn\'t just teach me to code—they taught me to think like a developer and prepared me for the real world.'
    },
    {
      id: 2,
      name: 'Michael Adeyemi',
      image: '👨🏿‍💻',
      program: 'Backend Engineering',
      duration: '14 weeks',
      category: 'academy',
      before: {
        role: 'Accountant',
        company: 'Audit Firm',
        salary: '₦900K/year'
      },
      after: {
        role: 'Backend Engineer',
        company: 'Flutterwave',
        location: 'Lagos, Nigeria',
        salary: '₦3.5M/year'
      },
      story: 'After 5 years in accounting, I realized I wanted a more dynamic career. I\'d always been interested in how systems work behind the scenes. The Backend Engineering bootcamp was perfect—it focused on building scalable APIs and microservices. The hands-on approach meant I was building real projects from day one. The career team helped me craft a compelling story about my career transition, and I landed at Flutterwave.',
      highlights: [
        'Built 3 production-ready APIs',
        'Mastered Python and Go',
        'Contributed to open source',
        '290% salary increase'
      ],
      testimonial: 'The transition from accounting to tech seemed impossible, but Rinspark Hub made it happen. Best decision of my life.'
    },
    {
      id: 3,
      name: 'Amina Bello',
      image: '👩🏽‍💻',
      program: 'AI & Machine Learning',
      duration: '20 weeks',
      category: 'academy',
      before: {
        role: 'Fresh Graduate',
        company: 'Unemployed',
        salary: '₦0'
      },
      after: {
        role: 'ML Engineer',
        company: 'Andela',
        location: 'Remote',
        salary: '₦4.0M/year'
      },
      story: 'I graduated with a degree in Mathematics but struggled to find work. I discovered Rinspark Hub\'s AI/ML program and took a chance. The 20-week program was comprehensive—covering everything from basic Python to deploying neural networks. The instructors were industry experts who made complex concepts understandable. I built a sentiment analysis tool for my capstone project, which impressed my interviewers at Andela.',
      highlights: [
        'Built 4 ML models',
        'Published research paper',
        'Won hackathon competition',
        'Landed dream job from scratch'
      ],
      testimonial: 'From unemployed graduate to ML Engineer in 20 weeks. Rinspark Hub gave me the skills and confidence to compete globally.'
    },
    {
      id: 4,
      name: 'Chidi Okafor',
      image: '👨🏿‍💼',
      program: 'Cloud & DevOps',
      duration: '12 weeks',
      category: 'academy',
      before: {
        role: 'IT Support',
        company: 'Corporate Office',
        salary: '₦600K/year'
      },
      after: {
        role: 'DevOps Engineer',
        company: 'Interswitch',
        location: 'Lagos, Nigeria',
        salary: '₦3.8M/year'
      },
      story: 'I was stuck in IT support, resetting passwords and fixing printers. I wanted to work on infrastructure at scale. The Cloud & DevOps bootcamp taught me AWS, Docker, Kubernetes, and CI/CD pipelines. The hands-on labs were incredible—I was deploying real applications to the cloud. Now I manage infrastructure that processes millions of transactions daily.',
      highlights: [
        'AWS & Azure certified',
        'Automated 50+ deployments',
        'Reduced deployment time by 80%',
        '533% salary increase'
      ],
      testimonial: 'From IT support to DevOps Engineer. Rinspark Hub gave me the technical skills and the confidence to level up.'
    },
    {
      id: 5,
      name: 'Blessing Nwosu',
      image: '👩🏾‍💻',
      program: 'Mobile Development',
      duration: '14 weeks',
      category: 'academy',
      before: {
        role: 'Graphic Designer',
        company: 'Freelance',
        salary: '₦500K/year'
      },
      after: {
        role: 'Mobile Developer',
        company: 'Kuda Bank',
        location: 'Lagos, Nigeria',
        salary: '₦3.0M/year'
      },
      story: 'As a graphic designer, I was always interested in how apps were built. The Mobile Development bootcamp taught me React Native and Flutter. I loved that I could use my design skills while learning to code. My capstone project was a fintech app that caught the attention of Kuda Bank. Now I\'m building features used by millions of customers.',
      highlights: [
        'Built 3 mobile apps',
        'Published 2 apps on stores',
        'Won design award',
        '500% salary increase'
      ],
      testimonial: 'Combining design and development was my dream. Rinspark Hub made it a reality.'
    },
    {
      id: 6,
      name: 'Emeka Eze',
      image: '👨🏿‍🔬',
      program: 'Robotics & IoT',
      duration: '18 weeks',
      category: 'academy',
      before: {
        role: 'Electrical Engineer',
        company: 'Manufacturing',
        salary: '₦1.2M/year'
      },
      after: {
        role: 'IoT Engineer',
        company: 'Tech Startup',
        location: 'Abuja, Nigeria',
        salary: '₦3.5M/year'
      },
      story: 'I had an electrical engineering background but wanted to work on cutting-edge IoT solutions. The Robotics & IoT program was perfect—covering embedded systems, sensors, and cloud integration. I built a smart agriculture system for my final project. Now I\'m developing IoT solutions for smart cities.',
      highlights: [
        'Built 5 IoT devices',
        'Arduino & Raspberry Pi expert',
        'Patent pending on invention',
        '192% salary increase'
      ],
      testimonial: 'The program bridged the gap between hardware and software. Now I\'m building the future of connected devices.'
    }
  ];

  const enterpriseStories = [
    {
      id: 7,
      name: 'TechMart Nigeria',
      logo: '🛒',
      industry: 'E-Commerce',
      category: 'enterprise',
      challenge: 'Legacy system couldn\'t handle growing traffic. Site crashes during peak hours. Poor mobile experience.',
      solution: 'Built modern e-commerce platform with microservices architecture, implemented CDN, optimized database queries, and created responsive mobile-first design.',
      results: [
        '99.9% uptime achieved',
        '100K+ daily transactions',
        '60% increase in mobile conversions',
        '40% reduction in page load time'
      ],
      metrics: {
        timeline: '6 months',
        team: '8 engineers',
        tech: 'React, Node.js, MongoDB, AWS'
      },
      testimonial: 'Rinspark Hub transformed our business. The new platform handles 10x our previous traffic with zero downtime.',
      client: 'Oluwaseun Adebayo, CTO'
    },
    {
      id: 8,
      name: 'FinSecure Bank',
      logo: '🏦',
      industry: 'FinTech',
      category: 'enterprise',
      challenge: 'Needed secure mobile banking app with biometric authentication. Strict regulatory compliance requirements.',
      solution: 'Developed native mobile apps for iOS and Android with end-to-end encryption, biometric authentication, and real-time fraud detection.',
      results: [
        '500K+ active users',
        'Zero security breaches',
        '4.8★ app store rating',
        'Passed all compliance audits'
      ],
      metrics: {
        timeline: '8 months',
        team: '12 engineers',
        tech: 'React Native, Python, PostgreSQL'
      },
      testimonial: 'Security and user experience were critical. Rinspark Hub delivered both flawlessly.',
      client: 'Aisha Mohammed, Head of Digital'
    },
    {
      id: 9,
      name: 'DataInsights Corp',
      logo: '📊',
      industry: 'Analytics',
      category: 'enterprise',
      challenge: 'Manual data processing taking weeks. Needed real-time analytics and AI-powered insights.',
      solution: 'Built ML-powered analytics platform with automated data pipelines, real-time dashboards, and predictive models.',
      results: [
        'Real-time data processing',
        '95% prediction accuracy',
        'Insights in minutes vs weeks',
        '₦50M saved annually'
      ],
      metrics: {
        timeline: '10 months',
        team: '10 engineers',
        tech: 'Python, TensorFlow, AWS, React'
      },
      testimonial: 'The AI platform revolutionized how we serve our clients. ROI was achieved in 3 months.',
      client: 'Dr. Chukwuma Obi, CEO'
    },
    {
      id: 10,
      name: 'LogiTrack Solutions',
      logo: '🚚',
      industry: 'Logistics',
      category: 'enterprise',
      challenge: 'Inefficient fleet management. No real-time tracking. High fuel costs.',
      solution: 'Developed IoT-based fleet management system with GPS tracking, route optimization, and predictive maintenance.',
      results: [
        'Real-time fleet visibility',
        '30% reduction in fuel costs',
        '50% faster deliveries',
        '₦80M saved in first year'
      ],
      metrics: {
        timeline: '7 months',
        team: '9 engineers',
        tech: 'IoT, Python, React, Google Maps API'
      },
      testimonial: 'The system paid for itself in 4 months. Our operations are now completely optimized.',
      client: 'Ibrahim Yusuf, Operations Director'
    }
  ];

  const allStories = [...graduateStories, ...enterpriseStories];
  const filteredStories = selectedCategory === 'all' 
    ? allStories 
    : allStories.filter(story => story.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-blue-950 backdrop-blur-sm border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <img src="/rinspack.png" alt="Rinspark Hub" className="h-14 w-auto" />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#solutions" className="text-slate-200 hover:text-white transition font-medium">Solutions</Link>
              <Link href="/academy" className="text-slate-200 hover:text-indigo-300 transition font-medium">Academy</Link>
              <Link href="/success-stories" className="text-white font-medium">Success Stories</Link>
              <Link href="/#contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg transition font-medium">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-900 border-t border-blue-800">
            <div className="px-4 py-4 space-y-3">
              <Link href="/#solutions" className="block text-slate-200 hover:text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
              <Link href="/academy" className="block text-slate-200 hover:text-indigo-300 font-medium" onClick={() => setMobileMenuOpen(false)}>Academy</Link>
              <Link href="/success-stories" className="block text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Success Stories</Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-slate-900 mb-6"
              variants={fadeInUp}
            >
              Success Stories
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Real people, real businesses, real transformations. See how Rinspark Hub is changing lives and building the future.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              {[
                { value: '2,000+', label: 'Graduates' },
                { value: '500+', label: 'Projects' },
                { value: '95%', label: 'Job Placement' },
                { value: '₦2.5M', label: 'Avg. Salary' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4">
            {[
              { id: 'all', label: 'All Stories', icon: <Star className="w-4 h-4" /> },
              { id: 'academy', label: 'Academy Graduates', icon: <GraduationCap className="w-4 h-4" /> },
              { id: 'enterprise', label: 'Enterprise Clients', icon: <Building2 className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
                  selectedCategory === tab.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {story.category === 'academy' ? (
                  // Graduate Story Card
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-8 p-8">
                      {/* Left: Profile */}
                      <div className="lg:col-span-1">
                        <div className="text-center lg:text-left">
                          <div className="text-8xl mb-4">{'image' in story ? story.image : ''}</div>
                          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                            {story.name}
                          </h3>
                          <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                            {'program' in story ? story.program : ''}
                          </div>
                          
                          {/* Before/After */}
                          {'before' in story && 'after' in story && (
                          <div className="bg-slate-50 rounded-lg p-4 mb-4">
                            <div className="mb-4">
                              <div className="text-xs text-slate-500 mb-1">BEFORE</div>
                              <div className="font-semibold text-slate-700">{story.before.role}</div>
                              <div className="text-sm text-slate-600">{story.before.company}</div>
                              <div className="text-sm text-slate-500">{story.before.salary}</div>
                            </div>
                            <div className="border-t border-slate-200 pt-4">
                              <div className="text-xs text-slate-500 mb-1">AFTER</div>
                              <div className="font-semibold text-slate-900">{story.after.role}</div>
                              <div className="text-sm text-slate-700">{story.after.company}</div>
                              <div className="flex items-center gap-1 text-sm text-slate-600 mb-1">
                                <MapPin className="w-3 h-3" />
                                {story.after.location}
                              </div>
                              <div className="text-lg font-bold text-green-600">{story.after.salary}</div>
                            </div>
                          </div>
                          )}

                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Calendar className="w-4 h-4" />
                            {'duration' in story ? story.duration : ''}
                          </div>
                        </div>
                      </div>

                      {/* Middle: Story */}
                      <div className="lg:col-span-2">
                        <div className="mb-6">
                          <Quote className="w-8 h-8 text-indigo-200 mb-4" />
                          <p className="text-slate-700 leading-relaxed mb-6">
                            {'story' in story ? story.story : ''}
                          </p>
                          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded">
                            <p className="text-slate-800 italic">
                              "{story.testimonial}"
                            </p>
                          </div>
                        </div>

                        {/* Highlights */}
                        {'highlights' in story && (
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-indigo-600" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {story.highlights.map((highlight: string, i: number) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Enterprise Story Card
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-8 p-8">
                      {/* Left: Company Info */}
                      <div className="lg:col-span-1">
                        <div className="text-center lg:text-left">
                          <div className="text-8xl mb-4">{'logo' in story ? story.logo : ''}</div>
                          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                            {story.name}
                          </h3>
                          <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                            {'industry' in story ? story.industry : ''}
                          </div>
                          
                          {/* Project Metrics */}
                          {'metrics' in story && (
                          <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                            <div>
                              <div className="text-xs text-slate-500 mb-1">TIMELINE</div>
                              <div className="font-semibold text-slate-900">{story.metrics.timeline}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500 mb-1">TEAM SIZE</div>
                              <div className="font-semibold text-slate-900">{story.metrics.team}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500 mb-1">TECH STACK</div>
                              <div className="text-sm text-slate-700">{story.metrics.tech}</div>
                            </div>
                          </div>
                          )}
                        </div>
                      </div>

                      {/* Right: Challenge & Solution */}
                      <div className="lg:col-span-2">
                        <div className="space-y-6">
                          {/* Challenge */}
                          <div>
                            <h4 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                              The Challenge
                            </h4>
                            <p className="text-slate-700 leading-relaxed">
                              {'challenge' in story ? story.challenge : ''}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                              Our Solution
                            </h4>
                            <p className="text-slate-700 leading-relaxed">
                              {'solution' in story ? story.solution : ''}
                            </p>
                          </div>

                          {/* Results */}
                          {'results' in story && (
                          <div>
                            <h4 className="text-lg font-heading font-semibold text-slate-900 mb-4 flex items-center gap-2">
                              <TrendingUp className="w-5 h-5 text-green-600" />
                              Results & Impact
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                              {story.results.map((result: string, i: number) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-700 font-medium">{result}</span>
                                </div>
                              ))}
                            </div>

                            {/* Testimonial */}
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                              <p className="text-slate-800 italic mb-2">
                                "{story.testimonial}"
                              </p>
                              <p className="text-sm text-slate-600 font-semibold">
                                — {'client' in story ? story.client : ''}
                              </p>
                            </div>
                          </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Ready to Write Your Success Story?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-10"
              variants={fadeInUp}
            >
              Join thousands of graduates and businesses who transformed their future with Rinspark Hub
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link href="/academy">
                <button className="bg-white hover:bg-slate-100 text-indigo-600 px-10 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Join the Academy
                </button>
              </Link>
              <Link href="/#solutions">
                <button className="bg-blue-700 hover:bg-blue-800 text-white border-2 border-white px-10 py-4 rounded-lg text-lg font-semibold transition w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Hire Our Team
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 border-t border-blue-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <img src="/rinspack.png" alt="Rinspark Hub" className="h-12 w-auto" />
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed">
                Building the future of tech through innovation and education.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><Link href="/#solutions" className="hover:text-white transition">Web Development</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition">Cloud Services</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition">AI Engineering</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition">Security</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Academy</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><Link href="/academy" className="hover:text-indigo-300 transition">Full-Stack</Link></li>
                <li><Link href="/academy" className="hover:text-indigo-300 transition">Backend</Link></li>
                <li><Link href="/academy" className="hover:text-indigo-300 transition">AI/ML</Link></li>
                <li><Link href="/academy" className="hover:text-indigo-300 transition">Mobile</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/success-stories" className="hover:text-white transition">Success Stories</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition">Careers</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-900 pt-8 text-center text-slate-300 text-sm">
            <p>&copy; 2024 Rinspark Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
