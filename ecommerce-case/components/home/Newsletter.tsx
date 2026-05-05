'use client';

import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="w-full relative bg-gray-100 overflow-hidden">
      
      {/* Decorative Background Images (Enhanced Visuals) */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-[25%] z-0">
        <Image 
          src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800&auto=format&fit=crop"
          alt="Premium Interior Left"
          fill
          className="object-cover opacity-80 contrast-110 saturate-110"
        />
        {/* Soft White Overlay */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="hidden md:block absolute right-0 top-0 h-full w-[25%] z-0">
        <Image 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
          alt="Premium Interior Right"
          fill
          className="object-cover opacity-80 contrast-110 saturate-110"
        />
        {/* Soft White Overlay */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center py-24 px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Join Our Newsletter
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
            Sign up for deals, new products and promotions directly to your inbox.
          </p>

          {/* Input Area */}
          <form className="mt-12 w-full max-w-md flex items-center gap-3 border-b-2 border-gray-300 group focus-within:border-gray-900 transition-all duration-300">
            {/* Mail Icon */}
            <div className="pl-1 text-gray-400 group-focus-within:text-gray-900 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>

            <input 
              type="email" 
              placeholder="Email address"
              className="flex-grow bg-transparent py-4 px-2 outline-none text-gray-900 font-medium placeholder:text-gray-400 text-base"
              required
            />

            <button 
              type="submit"
              className="text-sm md:text-base font-bold text-gray-900 hover:text-blue-600 transition-all uppercase tracking-widest px-4"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
