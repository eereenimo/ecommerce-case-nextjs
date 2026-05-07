'use client';

import React, { useState } from 'react';

const variants = [
  { name: 'Black', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop' },
  { name: 'Beige', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=200&auto=format&fit=crop' },
  { name: 'Gray', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=200&auto=format&fit=crop' },
];

export const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState(variants[0].name);

  return (
    <div className="flex flex-col gap-5 w-full lg:max-w-[480px]">
      {/* Title and Rating */}
      <div className="flex flex-col gap-3 pb-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-black fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-medium text-gray-500">11 Reviews</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-semibold text-[#111827] tracking-tight">
          Minimalist Armchair
        </h1>
        
        <p className="text-sm text-gray-400 leading-relaxed max-w-[420px]">
          The Minimalist Armchair brings elegance and comfort to your space. Handcrafted with premium oak and focused on Scandinavian aesthetics.
        </p>

        <div className="flex items-center gap-3 mt-1">
          <span className="text-xl font-bold text-[#111827]">$199.00</span>
          <span className="text-lg text-gray-300 line-through font-medium">$400.00</span>
        </div>
      </div>

      {/* Offer Countdown */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Offer expires in:</p>
        <div className="flex items-center gap-3">
          {[
            { value: '02', label: 'Days' },
            { value: '12', label: 'Hours' },
            { value: '45', label: 'Mins' },
            { value: '05', label: 'Secs' }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 bg-[#F3F4F6] rounded-lg flex items-center justify-center font-bold text-lg text-black">
                {item.value}
              </div>
              <span className="text-[10px] text-gray-400 uppercase font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Variant Selector */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Choose Color</span>
        <div className="flex items-center gap-3">
          {variants.map((variant) => (
            <button
              key={variant.name}
              onClick={() => setActiveVariant(variant.name)}
              className={`relative w-16 h-16 rounded-xl border-2 transition-all p-1 bg-[#F3F4F6] ${
                activeVariant === variant.name ? 'border-black shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={variant.image}
                alt={variant.name}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Cart */}
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex items-center gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-200 rounded-lg px-3 h-11 bg-gray-50/50">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-gray-400 hover:text-black transition-colors p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
            </button>
            <span className="font-bold text-sm w-8 text-center">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="text-gray-400 hover:text-black transition-colors p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </button>
          </div>

          {/* Add to Cart */}
          <button className="flex-1 h-11 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-sm active:scale-95">
            Add to cart
          </button>
        </div>

        {/* Wishlist */}
        <button className="w-full h-11 border border-gray-200 text-black font-semibold text-sm rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center justify-center gap-2 group">
          <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          Wishlist
        </button>
      </div>

      {/* Meta Info */}
      <div className="flex flex-col gap-2 pt-5 border-t border-gray-100 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="text-gray-300 uppercase tracking-widest font-bold">SKU:</span>
          <span className="text-gray-500 font-semibold">FURN-12345</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-300 uppercase tracking-widest font-bold">CATEGORY:</span>
          <span className="text-gray-500 font-semibold">Living Room, Furniture</span>
        </div>
      </div>
    </div>
  );
};
