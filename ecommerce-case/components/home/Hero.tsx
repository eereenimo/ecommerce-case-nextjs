'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
      <div className="relative h-[480px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
        
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop')` 
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center items-center md:items-start px-6 md:px-20 text-center md:text-left">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-md">
              Transform Your Space, <br className="hidden md:block" /> Elevate Your Life
            </h1>
            <p className="text-lg md:text-xl text-gray-100 font-medium mb-8 max-w-md drop-shadow-sm">
              VisioCreate is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
            </p>
            <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-black hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 md:left-8 flex items-center">
          <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-black transition-all hover:scale-110 active:scale-90" aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 md:right-8 flex items-center">
          <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-black transition-all hover:scale-110 active:scale-90" aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          <button className="w-3 h-3 rounded-full bg-white transition-all shadow-md" aria-label="Go to slide 1" />
          <button className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all" aria-label="Go to slide 2" />
          <button className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all" aria-label="Go to slide 3" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
