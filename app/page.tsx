'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Cloud, 
  Brain, 
  Shield, 
  Zap,
  Laptop,
  Server,
  Smartphone,
  Cpu,
  Database,
  Menu,
  X,
  CheckCircle2,
  Users,
  Award,
  TrendingUp,
  Briefcase,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/rinspack.png" alt="Rinspark Hub" className="h-14 w-auto" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-slate-700 hover:text-blue-900 transition font-medium">Solutions</a>
              <a href="#academy" className="text-slate-700 hover:text-indigo-600 transition font-medium">Academy</a>
              <a href="#portfolio" className="text-slate-700 hover:text-slate-900 transition font-medium">Success Stories</a>
              <a href="#contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg transition font-medium">
                  Get Started
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#solutions" className="block text-slate-700 hover:text-blue-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
              <a href="#academy" className="block text-slate-700 hover:text-indigo-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Academy</a>
              <a href="#portfolio" className="block text-slate-700 hover:text-slate-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Success Stories</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-slate-900 mb-6 leading-tight"
                variants={fadeInUp}
              >
                Empowering Enterprises.
                <br />
                <span className="text-indigo-600">
                  Training the Next Generation.
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-slate-600 mb-10 leading-relaxed"
                variants={fadeInUp}
              >
                We deliver enterprise-grade software solutions and train world-class developers.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <a href="#solutions">
                  <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Explore Business Solutions
                  </button>
                </a>
                <a href="#academy">
                  <button className="bg-white hover:bg-slate-50 text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition w-full sm:w-auto flex items-center justify-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Join the Academy
                  </button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                      <Code2 className="w-8 h-8 text-blue-900" />
                      <div>
                        <div className="font-semibold text-slate-900">Enterprise Solutions</div>
                        <div className="text-sm text-slate-600">500+ Projects Delivered</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg">
                      <GraduationCap className="w-8 h-8 text-indigo-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Tech Academy</div>
                        <div className="text-sm text-slate-600">2,000+ Graduates</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                      <Award className="w-8 h-8 text-green-600" />
                      <div>
                        <div className="font-semibold text-slate-900">95% Job Placement</div>
                        <div className="text-sm text-slate-600">₦2.5M Avg. Salary</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Bar (Stats) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { label: 'Projects Delivered', value: '500+', icon: <Briefcase className="w-6 h-6" /> },
              { label: 'Graduates', value: '2,000+', icon: <Users className="w-6 h-6" /> },
              { label: 'Job Placement Rate', value: '95%', icon: <TrendingUp className="w-6 h-6" /> },
              { label: 'Avg. Starting Salary', value: '₦2.5M', icon: <Award className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="flex justify-center mb-3 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                FOR BUSINESSES
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
                Enterprise Engineering
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Custom software solutions built for scale, security, and performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Laptop className="w-10 h-10" />,
                  title: 'Custom Web & Mobile Apps',
                  description: 'Scalable applications built with modern frameworks and best practices for your business needs'
                },
                {
                  icon: <Cloud className="w-10 h-10" />,
                  title: 'Cloud Solutions',
                  description: 'AWS, Azure, and DevOps infrastructure for seamless deployment and scaling'
                },
                {
                  icon: <Brain className="w-10 h-10" />,
                  title: 'AI & Data Engineering',
                  description: 'Machine learning models and data pipelines that drive actionable insights'
                },
                {
                  icon: <Shield className="w-10 h-10" />,
                  title: 'Security & Compliance',
                  description: 'Enterprise-grade security protocols and regulatory compliance solutions'
                },
                {
                  icon: <Zap className="w-10 h-10" />,
                  title: 'Performance Optimization',
                  description: 'Speed and efficiency improvements for existing systems and applications'
                },
                {
                  icon: <Database className="w-10 h-10" />,
                  title: 'Database Architecture',
                  description: 'Robust data solutions designed for scale, reliability, and performance'
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white border border-slate-200 rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              variants={fadeInUp}
            >
              <a href="#contact">
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Academy Section */}
      <section id="academy" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-block bg-indigo-100 text-indigo-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                FOR ASPIRING DEVELOPERS
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
                Launch Your Tech Career
              </h2>
              <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
                Intensive 12-20 week bootcamps. No prior experience needed.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                95% Job Placement Rate
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 className="w-10 h-10" />,
                  title: 'Full-Stack Development',
                  description: 'Master frontend and backend with React, Node.js, and databases',
                  duration: '16 weeks'
                },
                {
                  icon: <Server className="w-10 h-10" />,
                  title: 'Backend Engineering',
                  description: 'Build robust APIs and microservices with Python, Java, or Go',
                  duration: '14 weeks'
                },
                {
                  icon: <Brain className="w-10 h-10" />,
                  title: 'AI & Machine Learning',
                  description: 'Deep learning, neural networks, and AI model deployment',
                  duration: '20 weeks'
                },
                {
                  icon: <Smartphone className="w-10 h-10" />,
                  title: 'Mobile Development',
                  description: 'iOS and Android apps with React Native or Flutter',
                  duration: '14 weeks'
                },
                {
                  icon: <Cpu className="w-10 h-10" />,
                  title: 'Robotics & IoT',
                  description: 'Embedded systems, sensors, and connected devices',
                  duration: '18 weeks'
                },
                {
                  icon: <Cloud className="w-10 h-10" />,
                  title: 'Cloud & DevOps',
                  description: 'AWS, Docker, Kubernetes, and CI/CD pipelines',
                  duration: '12 weeks'
                },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  className="group bg-white border border-slate-200 rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-indigo-600 group-hover:scale-110 transition-transform">
                      {program.icon}
                    </div>
                    <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full font-semibold">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              variants={fadeInUp}
            >
              <a href="#contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Apply to Academy
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Transforming businesses and careers through technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'E-Commerce Platform',
                  category: 'Enterprise Solution',
                  description: 'Built a scalable e-commerce platform handling 100K+ daily transactions with 99.9% uptime',
                  color: 'blue',
                  bgColor: 'bg-blue-50',
                  textColor: 'text-blue-900',
                  borderColor: 'border-blue-200'
                },
                {
                  title: 'FinTech Mobile App',
                  category: 'Enterprise Solution',
                  description: 'Developed secure banking app with biometric authentication serving 500K+ users',
                  color: 'blue',
                  bgColor: 'bg-blue-50',
                  textColor: 'text-blue-900',
                  borderColor: 'border-blue-200'
                },
                {
                  title: 'AI Analytics Dashboard',
                  category: 'Enterprise Solution',
                  description: 'Created ML-powered analytics platform providing real-time insights for enterprise clients',
                  color: 'blue',
                  bgColor: 'bg-blue-50',
                  textColor: 'text-blue-900',
                  borderColor: 'border-blue-200'
                },
                {
                  title: 'Sarah O. - Full-Stack Developer',
                  category: 'Academy Graduate',
                  description: 'From zero coding experience to Full-Stack Developer at a leading fintech company in 16 weeks',
                  color: 'indigo',
                  bgColor: 'bg-indigo-50',
                  textColor: 'text-indigo-900',
                  borderColor: 'border-indigo-200'
                },
                {
                  title: 'Michael A. - Backend Engineer',
                  category: 'Academy Graduate',
                  description: 'Career switch from accounting to Backend Engineer, now earning ₦3.2M annually',
                  color: 'indigo',
                  bgColor: 'bg-indigo-50',
                  textColor: 'text-indigo-900',
                  borderColor: 'border-indigo-200'
                },
                {
                  title: 'Amina K. - AI Engineer',
                  category: 'Academy Graduate',
                  description: 'AI/ML bootcamp graduate now working on cutting-edge AI projects at a tech unicorn',
                  color: 'indigo',
                  bgColor: 'bg-indigo-50',
                  textColor: 'text-indigo-900',
                  borderColor: 'border-indigo-200'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-white border ${item.borderColor} rounded-lg p-8 hover:shadow-lg transition-all duration-300`}
                  variants={fadeInUp}
                >
                  <span className={`text-xs ${item.bgColor} ${item.textColor} px-3 py-1 rounded-full font-semibold`}>
                    {item.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-6"
              variants={fadeInUp}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 mb-10"
              variants={fadeInUp}
            >
              Whether you need enterprise solutions or want to launch your tech career, we're here to help.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <a href="mailto:business@rinsparkhub.com">
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Contact for Business
                </button>
              </a>
              <a href="mailto:academy@rinsparkhub.com">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Apply to Academy
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/rinspack.png" alt="Rinspark Hub" className="h-12 w-auto" />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Building the future of tech through innovation and education.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-4">Solutions</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#solutions" className="hover:text-blue-900 transition">Web Development</a></li>
                <li><a href="#solutions" className="hover:text-blue-900 transition">Cloud Services</a></li>
                <li><a href="#solutions" className="hover:text-blue-900 transition">AI Engineering</a></li>
                <li><a href="#solutions" className="hover:text-blue-900 transition">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-4">Academy</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#academy" className="hover:text-indigo-600 transition">Full-Stack</a></li>
                <li><a href="#academy" className="hover:text-indigo-600 transition">Backend</a></li>
                <li><a href="#academy" className="hover:text-indigo-600 transition">AI/ML</a></li>
                <li><a href="#academy" className="hover:text-indigo-600 transition">Mobile</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#portfolio" className="hover:text-slate-900 transition">About</a></li>
                <li><a href="#portfolio" className="hover:text-slate-900 transition">Success Stories</a></li>
                <li><a href="#contact" className="hover:text-slate-900 transition">Careers</a></li>
                <li><a href="#contact" className="hover:text-slate-900 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
            <p>&copy; 2024 Rinspark Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
