'use client';

import Link from 'next/link';
import { Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { BRAND } from '../../lib/constants';
import { theme } from '../../lib/theme';

export default function Footer() {
  const footerLinks = {
    Platform: [
      { name: 'Find Professionals', href: '/professionals' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Success Stories', href: '/testimonials' }
    ],
    Services: [
      { name: 'Photography', href: '/photography' },
      { name: 'Videography', href: '/videography' },
      { name: 'Wedding', href: '/wedding' },
      { name: 'Corporate', href: '/corporate' }
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Safety', href: '/safety' },
      { name: 'Community', href: '/community' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-white border-t" style={{ borderColor: theme.colors.border }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                >
                  <span className="text-white font-bold text-lg">{BRAND.logo}</span>
                </div>
                <span 
                  className="font-bold text-2xl"
                  style={{ color: theme.colors.text.primary }}
                >
                  {BRAND.name}
                </span>
              </div>
              
              <p 
                className="text-lg leading-relaxed mb-8 max-w-sm"
                style={{ color: theme.colors.text.secondary }}
              >
                Connect with verified photographers and videographers for your special moments.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
                  <span style={{ color: theme.colors.text.secondary }}>hello@lucis.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
                  <span style={{ color: theme.colors.text.secondary }}>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 
                  className="font-semibold text-lg mb-6"
                  style={{ color: theme.colors.text.primary }}
                >
                  {category}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="transition-colors duration-200 hover:opacity-80"
                        style={{ color: theme.colors.text.secondary }}
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

        {/* Bottom Footer */}
        <div className="border-t py-8" style={{ borderColor: theme.colors.border }}>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div style={{ color: theme.colors.text.muted }}>
              © 2024 <span style={{ color: theme.colors.copper.DEFAULT }}>{BRAND.name}</span>. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: theme.colors.seaMist.DEFAULT }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}