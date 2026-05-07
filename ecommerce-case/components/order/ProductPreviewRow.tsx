'use client';

import React from 'react';
import Image from 'next/image';

const purchasedProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop',
    quantity: 2,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&auto=format&fit=crop',
    quantity: 1,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=200&auto=format&fit=crop',
    quantity: 1,
  },
];

export const ProductPreviewRow = () => {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 py-4">
      {purchasedProducts.map((product) => (
        <div key={product.id} className="relative w-16 h-20 md:w-20 md:h-24 bg-[#f3f4f6] rounded flex items-center justify-center p-1.5 shadow-sm">
          <div className="relative w-full h-full">
            <Image src={product.image} alt="Purchased Product" fill unoptimized className="object-contain" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            {product.quantity}
          </div>
        </div>
      ))}
    </div>
  );
};
