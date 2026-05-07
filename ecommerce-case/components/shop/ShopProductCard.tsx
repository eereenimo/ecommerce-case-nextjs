'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';

interface ShopProductCardProps {
  product: Product;
}

export const ShopProductCard = ({ product }: ShopProductCardProps) => {
  const [imgError, setImgError] = React.useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  
  const isWishlisted = isInWishlist(product.id);
  const fallbackImage = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop";

  return (
    <div className="flex flex-col gap-3 group relative">
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] bg-[#f3f4f6] rounded-2xl overflow-hidden group">
        <Link href={`/product/${product.id}`} className="w-full h-full block relative">
          <Image
            src={imgError ? fallbackImage : product.image}
            alt={product.title}
            fill
            className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
            unoptimized
            onError={() => setImgError(true)}
          />
        </Link>
        
        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 active:scale-90"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill={isWishlisted ? "black" : "none"} 
            stroke="black" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>

        {/* Add to Cart Quick Button (Desktop) */}
        <button 
          onClick={() => addItem(product)}
          className="absolute bottom-4 left-4 right-4 bg-black text-white text-xs font-bold py-3 rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-800 active:scale-95"
        >
          ADD TO CART
        </button>
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
