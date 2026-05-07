'use client';

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    oldPrice?: number;
    image: string;
    isNew?: boolean;
    discount?: string;
    showCart?: boolean;
  };
}

export const ShopProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group flex flex-col gap-3">
      {/* Image Container */}
      <div className="relative aspect-[4/5] md:h-[220px] lg:h-[300px] bg-[#F3F4F6] rounded-2xl overflow-hidden flex items-center justify-center p-6 transition-all duration-300 group-hover:bg-[#E5E7EB]">
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="bg-white text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-sm uppercase">
              NEW
            </span>
          )}
          {product.discount && (
            <span className="bg-[#38CB89] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-sm uppercase">
              {product.discount}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm transition-all z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </button>

        {/* Product Image */}
        <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
          <Image
            src={product.image}
            alt={product.title}
            fill
            unoptimized
            className="object-contain"
          />
        </div>

        {/* Add to Cart Overlay Button (Visible if showCart or on hover) */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${product.showCart ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'}`}>
          <button className="w-full bg-black text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
            Add to cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-black fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
        </div>

        <h3 className="text-sm font-medium text-[#111827] truncate">
          {product.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#111827]">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
