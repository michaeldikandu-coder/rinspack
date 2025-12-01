import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/rinspack.png" alt="Rinspark Hub" className="h-12 w-auto" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Building the future of tech through innovation and education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/solutions#web" className="hover:text-white transition">Web Development</Link></li>
              <li><Link href="/solutions#cloud" className="hover:text-white transition">Cloud Services</Link></li>
              <li><Link href="/solutions#ai" className="hover:text-white transition">AI Engineering</Link></li>
              <li><Link href="/solutions#security" className="hover:text-white transition">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Academy</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/academy#fullstack" className="hover:text-indigo-300 transition">Full-Stack</Link></li>
              <li><Link href="/academy#backend" className="hover:text-indigo-300 transition">Backend</Link></li>
              <li><Link href="/academy#ai" className="hover:text-indigo-300 transition">AI/ML</Link></li>
              <li><Link href="/academy#mobile" className="hover:text-indigo-300 transition">Mobile</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/success-stories" className="hover:text-white transition">Success Stories</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 text-center text-slate-300 text-sm">
          <p>&copy; 2024 Rinspark Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
