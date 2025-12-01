'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Cloud, 
  Brain, 
  Server,
  Smartphone,
  Cpu,
  CheckCircle2,
  Clock,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Calendar,
  DollarSign,
  Target,
  Laptop,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function AcademyPage() {
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

  const programs = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: 'Full-Stack Development',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      description: 'Master both frontend and backend development with modern technologies',
      curriculum: [
        'HTML, CSS, JavaScript fundamentals',
        'React.js & Next.js for frontend',
        'Node.js & Express for backend',
        'MongoDB & PostgreSQL databases',
        'RESTful APIs & GraphQL',
        'Authentication & Authorization',
        'Deployment & DevOps basics'
      ],
      outcomes: [
        'Build full-stack web applications',
        'Work with modern frameworks',
        'Deploy production-ready apps',
        'Collaborate using Git & GitHub'
      ],
      salary: '₦2.4M - ₦3.5M',
      color: 'indigo'
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: 'Backend Engineering',
      duration: '14 weeks',
      level: 'Beginner to Advanced',
      description: 'Build robust, scalable server-side applications and APIs',
      curriculum: [
        'Python/Java/Go fundamentals',
        'RESTful API design',
        'Microservices architecture',
        'Database design & optimization',
        'Caching strategies (Redis)',
        'Message queues & async processing',
        'Testing & documentation'
      ],
      outcomes: [
        'Design scalable backend systems',
        'Build secure APIs',
        'Optimize database performance',
        'Implement microservices'
      ],
      salary: '₦2.6M - ₦4.0M',
      color: 'blue'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI & Machine Learning',
      duration: '20 weeks',
      level: 'Intermediate',
      description: 'Deep dive into artificial intelligence and machine learning',
      curriculum: [
        'Python for data science',
        'Machine learning algorithms',
        'Deep learning & neural networks',
        'Natural Language Processing',
        'Computer Vision',
        'TensorFlow & PyTorch',
        'Model deployment & MLOps'
      ],
      outcomes: [
        'Build ML models from scratch',
        'Deploy AI solutions',
        'Work with large datasets',
        'Implement deep learning'
      ],
      salary: '₦3.0M - ₦5.5M',
      color: 'purple'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      duration: '14 weeks',
      level: 'Beginner to Advanced',
      description: 'Create native and cross-platform mobile applications',
      curriculum: [
        'Mobile UI/UX principles',
        'React Native fundamentals',
        'Flutter & Dart',
        'Native features & APIs',
        'State management',
        'App store deployment',
        'Performance optimization'
      ],
      outcomes: [
        'Build iOS & Android apps',
        'Publish to app stores',
        'Integrate native features',
        'Optimize app performance'
      ],
      salary: '₦2.3M - ₦3.8M',
      color: 'green'
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Robotics & IoT',
      duration: '18 weeks',
      level: 'Intermediate',
      description: 'Build intelligent connected devices and robotic systems',
      curriculum: [
        'Embedded systems programming',
        'Arduino & Raspberry Pi',
        'Sensor integration',
        'IoT protocols (MQTT, CoAP)',
        'Robotics fundamentals',
        'Computer vision for robotics',
        'Cloud integration'
      ],
      outcomes: [
        'Build IoT devices',
        'Program robots',
        'Integrate sensors',
        'Deploy edge computing'
      ],
      salary: '₦2.5M - ₦4.2M',
      color: 'orange'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud & DevOps',
      duration: '12 weeks',
      level: 'Intermediate',
      description: 'Master cloud infrastructure and DevOps practices',
      curriculum: [
        'AWS/Azure fundamentals',
        'Docker & containerization',
        'Kubernetes orchestration',
        'CI/CD pipelines',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Security best practices'
      ],
      outcomes: [
        'Deploy cloud infrastructure',
        'Automate deployments',
        'Manage containers',
        'Implement CI/CD'
      ],
      salary: '₦2.8M - ₦4.5M',
      color: 'cyan'
    }
  ];

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
              <Link href="/academy" className="text-white font-medium">Academy</Link>
              <Link href="/#portfolio" className="text-slate-200 hover:text-white transition font-medium">Success Stories</Link>
              <Link href="/#contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg transition font-medium">
                  Apply Now
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
              <Link href="/academy" className="block text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Academy</Link>
              <Link href="/#portfolio" className="block text-slate-200 hover:text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Success Stories</Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                RINSPARK HUB ACADEMY
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-slate-900 mb-6"
              variants={fadeInUp}
            >
              Launch Your
              <br />
              <span className="text-indigo-600">Tech Career</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Intensive bootcamps designed to transform beginners into job-ready developers in 12-20 weeks
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                95% Job Placement Rate
              </div>
              <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold">
                <Award className="w-5 h-5" />
                ₦2.5M Avg. Starting Salary
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a href="#programs">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
                Why Rinspark Hub Academy?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We don't just teach code. We build careers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="w-10 h-10" />,
                  title: 'Expert Instructors',
                  description: 'Learn from industry professionals with 10+ years of experience'
                },
                {
                  icon: <Laptop className="w-10 h-10" />,
                  title: 'Hands-On Projects',
                  description: 'Build real-world projects for your portfolio'
                },
                {
                  icon: <Briefcase className="w-10 h-10" />,
                  title: 'Career Support',
                  description: 'Resume building, interview prep, and job placement assistance'
                },
                {
                  icon: <TrendingUp className="w-10 h-10" />,
                  title: 'Proven Results',
                  description: '95% of graduates land jobs within 3 months'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
                Our Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the path that matches your career goals
              </p>
            </motion.div>

            <div className="space-y-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Left: Program Info */}
                    <div className="lg:col-span-1">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-${program.color}-100 text-${program.color}-600 rounded-xl mb-4`}>
                        {program.icon}
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-slate-600 mb-6">
                        {program.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-slate-700">
                          <Clock className="w-5 h-5 text-indigo-600" />
                          <span className="font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <BookOpen className="w-5 h-5 text-indigo-600" />
                          <span className="font-medium">{program.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <DollarSign className="w-5 h-5 text-green-600" />
                          <span className="font-medium">{program.salary}</span>
                        </div>
                      </div>

                      <a href="#contact">
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center gap-2">
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </a>
                    </div>

                    {/* Middle: Curriculum */}
                    <div className="lg:col-span-1 border-l border-slate-200 pl-8">
                      <h4 className="text-lg font-heading font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-indigo-600" />
                        What You'll Learn
                      </h4>
                      <ul className="space-y-2">
                        {program.curriculum.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Outcomes */}
                    <div className="lg:col-span-1 border-l border-slate-200 pl-8">
                      <h4 className="text-lg font-heading font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-indigo-600" />
                        Career Outcomes
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {program.outcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-sm text-green-800 font-semibold mb-1">Job Placement</div>
                        <div className="text-2xl font-bold text-green-900">95%</div>
                        <div className="text-xs text-green-700">within 3 months</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Your journey from beginner to professional developer
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Apply',
                  description: 'Submit your application and complete a brief assessment'
                },
                {
                  step: '02',
                  title: 'Interview',
                  description: 'Chat with our admissions team about your goals'
                },
                {
                  step: '03',
                  title: 'Learn',
                  description: '12-20 weeks of intensive, hands-on training'
                },
                {
                  step: '04',
                  title: 'Launch',
                  description: 'Graduate and start your new tech career'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={fadeInUp}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">
                      {item.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-indigo-200 -z-10"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
                Student Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real graduates, real results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Okonkwo',
                  program: 'Full-Stack Development',
                  before: 'Marketing Manager',
                  after: 'Full-Stack Developer at Paystack',
                  salary: '₦3.2M/year',
                  quote: 'The bootcamp completely changed my life. In 16 weeks, I went from zero coding knowledge to landing my dream job.',
                  image: '👩🏾‍💻'
                },
                {
                  name: 'Michael Adeyemi',
                  program: 'Backend Engineering',
                  before: 'Accountant',
                  after: 'Backend Engineer at Flutterwave',
                  salary: '₦3.5M/year',
                  quote: 'The instructors were amazing and the career support helped me land multiple job offers.',
                  image: '👨🏿‍💻'
                },
                {
                  name: 'Amina Bello',
                  program: 'AI & Machine Learning',
                  before: 'Fresh Graduate',
                  after: 'ML Engineer at Andela',
                  salary: '₦4.0M/year',
                  quote: 'Best investment I ever made. The hands-on projects prepared me for real-world challenges.',
                  image: '👩🏽‍💻'
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="text-6xl mb-4">{story.image}</div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">
                    {story.name}
                  </h3>
                  <div className="text-sm text-indigo-600 font-semibold mb-4">
                    {story.program}
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <div className="text-xs text-slate-500 mb-1">Before</div>
                    <div className="text-sm font-medium text-slate-700">{story.before}</div>
                    <div className="text-xs text-slate-500 mt-2 mb-1">After</div>
                    <div className="text-sm font-medium text-slate-900">{story.after}</div>
                    <div className="text-lg font-bold text-green-600 mt-2">{story.salary}</div>
                  </div>

                  <p className="text-slate-600 italic">
                    "{story.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: 'Do I need prior coding experience?',
                  answer: 'No! Most of our programs are designed for complete beginners. We start from the fundamentals and build up to advanced concepts.'
                },
                {
                  question: 'What is the time commitment?',
                  answer: 'Our bootcamps are intensive and require 40-50 hours per week. We offer both full-time (weekdays) and part-time (evenings/weekends) options.'
                },
                {
                  question: 'How much does it cost?',
                  answer: 'Program fees range from ₦500,000 to ₦1,200,000 depending on the track. We offer flexible payment plans and income share agreements.'
                },
                {
                  question: 'What kind of job support do you provide?',
                  answer: 'We provide resume building, portfolio development, interview preparation, and direct connections to hiring partners. Our career team works with you until you land a job.'
                },
                {
                  question: 'Can I work while attending?',
                  answer: 'Our part-time programs are designed for working professionals. Full-time programs require full commitment but can be completed faster.'
                },
                {
                  question: 'What if I don\'t get a job after graduating?',
                  answer: 'We offer continued career support until you land a role. 95% of our graduates find jobs within 3 months, and we work with the remaining 5% until they succeed.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 rounded-lg p-6"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-indigo-800">
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
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-100 mb-10"
              variants={fadeInUp}
            >
              Join 2,000+ graduates who transformed their careers with Rinspark Hub Academy
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <a href="mailto:academy@rinsparkhub.com">
                <button className="bg-white hover:bg-slate-100 text-indigo-600 px-10 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Apply Now
                </button>
              </a>
              <a href="mailto:academy@rinsparkhub.com?subject=Request Information">
                <button className="bg-indigo-700 hover:bg-indigo-800 text-white border-2 border-white px-10 py-4 rounded-lg text-lg font-semibold transition w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  Request Information
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
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
              <h4 className="font-heading font-semibold text-white mb-4">Programs</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><a href="#programs" className="hover:text-white transition">Full-Stack</a></li>
                <li><a href="#programs" className="hover:text-white transition">Backend</a></li>
                <li><a href="#programs" className="hover:text-white transition">AI/ML</a></li>
                <li><a href="#programs" className="hover:text-white transition">Mobile</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition">Apply</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition">Solutions</Link></li>
                <li><Link href="/#portfolio" className="hover:text-white transition">Portfolio</Link></li>
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
