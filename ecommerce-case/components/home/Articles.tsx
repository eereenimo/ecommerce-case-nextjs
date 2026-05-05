'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: '7 ways to decor your home',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    href: '/blog/7-ways-to-decor-your-home',
  },
  {
    id: 2,
    title: 'Kitchen organization',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop',
    href: '/blog/kitchen-organization',
  },
  {
    id: 3,
    title: 'Decor your bedroom',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=800&auto=format&fit=crop',
    href: '/blog/decor-your-bedroom',
  },
];

const Articles = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
          Articles
        </h2>
        <Link 
          href="/blog" 
          className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-70 transition-opacity flex items-center gap-1"
        >
          More Articles
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7 7 7-7 7"/>
          </svg>
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {articles.map((article) => (
          <div key={article.id} className="group">
            {/* Article Image Container */}
            <Link href={article.href} className="block relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
              <Image 
                src={article.image} 
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            {/* Article Content */}
            <div className="mt-5">
              <Link href={article.href}>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
              </Link>
              
              <Link 
                href={article.href}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gray-600 border-b border-gray-400 pb-0.5 hover:text-black hover:border-black transition-all"
              >
                Read More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
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
        ))}
      </div>
    </section>
  );
};

export default Articles;
