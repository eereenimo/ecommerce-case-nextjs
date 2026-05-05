'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#232627] text-gray-400 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo & Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="flex flex-col md:flex-row items-center">
            <Link href="/" className="text-white text-xl font-bold tracking-tight">
              VisioCreate<span className="text-gray-400">.</span>
            </Link>
            <div className="hidden md:block h-6 w-px bg-gray-600 mx-6"></div>
            <p className="text-sm text-gray-400 mt-2 md:mt-0 text-center md:text-left">
              Gift & Decoration Store
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium">
              <li>
                <Link href="/" className="text-white hover:text-gray-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-white transition-colors">Product</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-10 md:my-16 border-t border-gray-700/50"></div>

        {/* Bottom Row: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-xs">
              Copyright © 2024 VisioCreate. All rights reserved
            </p>
            <div className="flex gap-6 text-xs font-bold text-white">
              <Link href="/privacy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
              <Link href="/terms" className="hover:opacity-70 transition-opacity">Terms of Use</Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
            <Link href="#" className="text-white hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="#" className="text-white hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
