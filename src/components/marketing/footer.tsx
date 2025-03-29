'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white/80">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="mb-8">
              <div className="font-light tracking-[0.25em] text-white">
                <div className="relative">
                  <span className="text-xl">CADRA</span>
                  <span className="text-xl font-extralight">TEC</span>
                  <div className="h-[1px] bg-white/20 mt-1.5" />
                  <div className="absolute -bottom-0.5 left-0 h-[1px] w-8 bg-white/40" />
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6 font-light">
              Swiss precision in watch dial manufacturing, combining traditional craftsmanship with innovative technology.
            </p>
            <div className="space-y-2 text-sm text-white/60 font-light">
              <p>Le Péquie 1, CH-2364</p>
              <p>St-Brais, Switzerland</p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium tracking-wider text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-white/60 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium tracking-wider text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                  Lab Testing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                  Dial Restoration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium tracking-wider text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="text-sm text-white/60 hover:text-white transition-colors">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium tracking-wider text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+41323223435" className="text-sm text-white/60 hover:text-white transition-colors">
                  +41 32 322 34 35
                </a>
              </li>
              <li>
                <a href="mailto:info@cadratec.ch" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@cadratec.ch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/40">
              © {new Date().getFullYear()} CadraTec SA. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 