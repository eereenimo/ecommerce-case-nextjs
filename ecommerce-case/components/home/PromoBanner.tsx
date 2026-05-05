'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PromoBanner = () => {
  return (
    <section className="w-full mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        
        {/* Left Side: Full-width Image */}
        <div className="relative min-h-[300px] md:h-full w-full">
          <Image 
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop"
            alt="Full Width Interior Promo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Full-width Content Area */}
        <div className="flex flex-col justify-center bg-gray-100 p-8 md:p-20 lg:p-32">
          <div className="max-w-xl">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">
              SALE UP TO 35% OFF
            </span>
            
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              HUNDREDS of <br /> New lower prices!
            </h2>
            
            <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
              It’s more affordable than ever to give every room in your home a stylish makeover with our latest collection of premium furniture.
            </p>
            
            <Link 
              href="/shop" 
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-all border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600"
            >
              Shop Now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
