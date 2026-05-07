'use client';

import React, { useState } from 'react';

import { Product } from '@/types/product';
import { useCartStore, CartState } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state: CartState) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  
  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    // For now, we add one by one in the store, but we could update addItem to accept quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title & Rating */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating.rate) ? 'text-black fill-current' : 'text-gray-200 fill-current'}`} viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-medium text-gray-500">{product.rating.count} Reviews</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111827] leading-tight">
          {product.title}
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-[500px]">
          {product.description}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[#111827]">${product.price.toFixed(2)}</span>
          <span className="text-lg text-gray-400 line-through">${(product.price * 1.5).toFixed(2)}</span>
        </div>
      </div>

      <div className="h-px bg-gray-100 w-full my-2" />

      {/* Product Details (Stock, Category) */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Category:</span>
          <span className="text-xs font-bold text-[#111827] uppercase">{product.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">SKU:</span>
          <span className="text-xs font-bold text-[#111827] uppercase">V-00{product.id}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center bg-[#f3f4f6] rounded-md h-[52px] px-2">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center text-lg font-medium hover:text-black transition-colors"
            >
              -
            </button>
            <span className="w-10 text-center text-sm font-bold">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center text-lg font-medium hover:text-black transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to Wishlist */}
          <button 
            onClick={() => toggleWishlist(product)}
            className={`flex-1 h-[52px] border ${isWishlisted ? 'border-black bg-black text-white' : 'border-black text-black hover:bg-black hover:text-white'} rounded-md text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "white" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            {isWishlisted ? 'Added to Wishlist' : 'Wishlist'}
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
