'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    title: 'Living Room',
    href: '/shop/living-room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    isLarge: true,
  },
  {
    id: 2,
    title: 'Bedroom',
    href: '/shop/bedroom',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
    isLarge: false,
  },
  {
    id: 3,
    title: 'Kitchen',
    href: '/shop/kitchen',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=800&auto=format&fit=crop',
    isLarge: false,
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`
              relative group rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl
              ${category.isLarge ? 'md:col-span-2 md:row-span-2 h-[500px]' : 'h-[240px]'}
            `}
          >
            {/* Background Image */}
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={category.isLarge}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Content Container (Positioned on top) */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {category.title}
                </h3>
                <Link 
                  href={category.href}
                  className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors group/link"
                >
                  <span className="border-b-2 border-white/50 group-hover/link:border-white transition-all pb-0.5">
                    Shop Now
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-2 transition-transform group-hover/link:translate-x-1"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
