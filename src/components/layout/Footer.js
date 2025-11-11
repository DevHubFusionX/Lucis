'use client';

import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Platform: [
    { name: 'Find Professionals', href: '/professionals' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/#how-it-works' }
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ],
  Legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookies', href: '/cookies' }
  ]
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-light tracking-[0.2em] uppercase">LUCIS</span>
              </Link>
              <p className="text-base font-light text-gray-400 mb-6 max-w-sm">
                Connecting creative talent with vision. Find and book exceptional photographers and videographers.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-light text-lg mb-6 text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-sm font-light text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light text-gray-400">
              © 2024 LUCIS. All rights reserved.
            </p>
            <p className="text-sm font-light text-gray-400">
              Made with ♥ for creators
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
