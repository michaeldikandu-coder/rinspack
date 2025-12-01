'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Laptop,
  Cloud,
  Brain,
  Shield,
  Zap,
  Database,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Solutions() {
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

  const services = [
    {
      id: 'web',
      icon: <Laptop className="w-12 h-12" />,
      title: 'Custom Web & Mobile Apps',
      description: 'Scalable applications built with modern frameworks and best practices for your business needs',
      features: [
        'React, Next.js, Vue.js frontend development',
        'Progressive Web Apps (PWA)',
        'Cross-platform mobile apps',
        'Responsive design & UX optimization'
      ],
      codeSnippet: `// Modern React Component
function Dashboard() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchAnalytics();
  }, []);
  
  return <Analytics data={data} />;
}`
    },
    {
      id: 'cloud',
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and DevOps infrastructure for seamless deployment and scaling',
      features: [
        'Cloud architecture design',
        'CI/CD pipeline setup',
        'Container orchestration (Kubernetes)',
        'Serverless computing'
      ],
      codeSnippet: `# Docker Compose
services:
  app:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:14
    environment:
      POSTGRES_DB: myapp`
    },
    {
      id: 'ai',
      icon: <Brain className="w-12 h-12" />,
      title: 'AI & Data Engineering',
      description: 'Machine learning models and data pipelines that drive actionable insights',
      features: [
        'Custom ML model development',
        'Natural Language Processing',
        'Computer Vision solutions',
        'Data pipeline automation'
      ],
      codeSnippet: `# ML Model Training
model = Sequential([
  Dense(128, activation='relu'),
  Dropout(0.2),
  Dense(64, activation='relu'),
  Dense(10, activation='softmax')
])
model.compile(optimizer='adam')`
    },
    {
      id: 'security',
      icon: <Shield className="w-12 h-12" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security protocols and regulatory compliance solutions',
      features: [
        'Security audits & penetration testing',
        'GDPR & compliance consulting',
        'Authentication & authorization',
        'Data encryption & protection'
      ],
      codeSnippet: `// JWT Authentication
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);`
    },
    {
      id: 'performance',
      icon: <Zap className="w-12 h-12" />,
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements for existing systems and applications',
      features: [
        'Code profiling & optimization',
        'Database query optimization',
        'Caching strategies',
        'Load balancing & CDN setup'
      ],
      codeSnippet: `// Redis Caching
const cached = await redis.get(key);
if (cached) return cached;

const data = await db.query();
await redis.set(key, data, 'EX', 3600);`
    },
    {
      id: 'database',
      icon: <Database className="w-12 h-12" />,
      title: 'Database Architecture',
      description: 'Robust data solutions designed for scale, reliability, and performance',
      features: [
        'Database design & modeling',
        'SQL & NoSQL solutions',
        'Data migration services',
        'Backup & disaster recovery'
      ],
      codeSnippet: `-- Optimized Query
SELECT u.name, COUNT(o.id) as orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.active = true
GROUP BY u.id;`
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              variants={fadeInUp}
            >
              FOR BUSINESSES
            </motion.div>
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6"
              variants={fadeInUp}
            >
              Enterprise Engineering Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
              variants={fadeInUp}
            >
              Custom software solutions built for scale, security, and performance. We transform your business challenges into technological advantages.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg inline-flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-blue-900 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-slate-900 rounded-xl p-6 shadow-2xl border border-slate-700">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-slate-400 text-sm">code.tsx</span>
                    </div>
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="text-slate-300">{service.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Ready to transform your business with cutting-edge technology? Our team is here to help.
            </p>
            <Link href="/contact">
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-lg text-lg font-semibold transition shadow-lg inline-flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
