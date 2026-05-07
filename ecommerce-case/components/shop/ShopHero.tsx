'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ShopHero = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-0 mt-5 mb-8 md:mt-8 md:mb-12">
      <div className="relative w-full h-[360px] md:h-[420px] rounded-[32px] overflow-hidden group">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Shop Interior"
          fill
          priority
          unoptimized
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/25" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <Link 
              href="/" 
              className="text-sm md:text-base text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400 text-sm md:text-base">{">"}</span>
            <span className="text-sm md:text-base text-[#111827] font-semibold">
              Shop
            </span>
          </nav>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-semibold text-[#111827] mb-4 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Shop Page
          </h1>

          {/* Description */}
          <p className="text-lg md:text-2xl text-gray-700 font-normal max-w-[540px] leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
    </section>
  );
};
