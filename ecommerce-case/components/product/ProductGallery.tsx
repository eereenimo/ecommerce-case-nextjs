'use client';

import React from 'react';
import Image from 'next/image';

import { Product } from '@/types/product';

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery = ({ product }: ProductGalleryProps) => {
  if (!product || !product.image) {
    return <div className="aspect-[4/5] bg-[#f3f4f6] rounded-2xl animate-pulse" />;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Image */}
      <div className="relative aspect-[4/5] bg-[#f3f4f6] rounded-2xl overflow-hidden p-8 md:p-12">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>
      
      {/* Thumbnails (Mocking multiple by reusing the same image) */}
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`relative aspect-square bg-[#f3f4f6] rounded-xl overflow-hidden p-3 border-2 ${i === 1 ? 'border-black' : 'border-transparent opacity-60'}`}>
            <Image
              src={product.image}
              alt={`${product.title} view ${i}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};
