'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200&auto=format&fit=crop',
];

export const ProductGallery = () => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Main Image */}
      <div className="relative aspect-[4/5] md:aspect-square w-full bg-[#f3f4f6] rounded-[24px] overflow-hidden flex items-center justify-center p-10 md:p-16">
        <div className="relative w-full h-full transform transition-all duration-500 hover:scale-105">
          <Image
            src={activeImage}
            alt="Product Main Image"
            fill
            priority
            unoptimized
            className="object-contain"
          />
        </div>
        
        {/* Discount Badge */}
        <div className="absolute top-5 left-5 flex flex-col gap-2">
          <span className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
            NEW
          </span>
          <span className="bg-[#38CB89] text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
            -50%
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`relative aspect-square bg-[#f3f4f6] rounded-xl overflow-hidden flex items-center justify-center p-2 transition-all duration-300 ${
              activeImage === img 
                ? 'ring-1 ring-black shadow-md' 
                : 'hover:opacity-80 border border-transparent'
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              unoptimized
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
