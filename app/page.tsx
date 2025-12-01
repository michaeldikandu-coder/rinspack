'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code2, 
  Users,
  Award,
  TrendingUp,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
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
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                variants={fadeInUp}
              >
                <Sparkles className="w-4 h-4" />
                Transforming Tech Education & Business
              </motion.div>

              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
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
                We deliver enterprise-grade software solutions and train world-class developers through intensive, hands-on programs.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <Link href="/solutions">
                  <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Explore Business Solutions
                  </button>
                </Link>
                <Link href="/academy">
                  <button className="bg-white hover:bg-slate-50 text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition w-full sm:w-auto flex items-center justify-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Join the Academy
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-700 overflow-hidden">
                  {/* Code Editor Mockup */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-slate-400 text-sm">app.tsx</span>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-purple-400">import <span className="text-blue-400">React</span> from <span className="text-green-400">'react'</span>;</div>
                    <div className="text-slate-500">// Building the future</div>
                    <div className="text-purple-400">function <span className="text-yellow-400">App</span>() {'{'}</div>
                    <div className="pl-4 text-purple-400">return (</div>
                    <div className="pl-8"><span className="text-blue-400">&lt;div</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"success"</span><span className="text-blue-400">&gt;</span></div>
                    <div className="pl-12 text-white">Transform Your Career</div>
                    <div className="pl-8"><span className="text-blue-400">&lt;/div&gt;</span></div>
                    <div className="pl-4 text-purple-400">);</div>
                    <div className="text-purple-400">{'}'}</div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 bg-blue-900/50 p-3 rounded-lg border border-blue-700">
                      <Code2 className="w-6 h-6 text-blue-400" />
                      <div>
                        <div className="font-semibold text-white text-sm">500+ Projects</div>
                        <div className="text-xs text-slate-400">Enterprise Solutions</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-indigo-900/50 p-3 rounded-lg border border-indigo-700">
                      <GraduationCap className="w-6 h-6 text-indigo-400" />
                      <div>
                        <div className="font-semibold text-white text-sm">2,000+ Graduates</div>
                        <div className="text-xs text-slate-400">Tech Academy</div>
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
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
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

      {/* Dual Offerings Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              variants={fadeInUp}
            >
              Two Paths to Success
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Whether you're a business seeking cutting-edge solutions or an individual ready to launch your tech career
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Enterprise Solutions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
            >
              <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Enterprise Solutions
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Custom software development, cloud architecture, AI integration, and security solutions for businesses of all sizes.
              </p>
              <ul className="space-y-3 mb-8">
                {['Custom Development', 'Cloud Solutions', 'AI & Data Engineering', 'Security & Compliance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/solutions">
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            {/* Tech Academy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 border border-indigo-200"
            >
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Tech Academy
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Intensive 12-20 week bootcamps designed to transform beginners into job-ready developers with 95% placement rate.
              </p>
              <ul className="space-y-3 mb-8">
                {['Full-Stack Development', 'Backend Engineering', 'AI & Machine Learning', 'Mobile Development'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/academy">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                  View Programs
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join hundreds of successful businesses and thousands of graduates who've transformed their future with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-slate-100 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg w-full sm:w-auto">
                  Contact Us
                </button>
              </Link>
              <Link href="/success-stories">
                <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold transition w-full sm:w-auto">
                  View Success Stories
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
