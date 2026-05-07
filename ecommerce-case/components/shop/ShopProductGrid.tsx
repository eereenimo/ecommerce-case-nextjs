'use client';

import React from 'react';
import { ShopProductCard } from './ShopProductCard';

const products = [
  {
    id: 1,
    title: 'Loveseat Sofa',
    price: 199.00,
    oldPrice: 400.00,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    discount: '-50%',
    showCart: true,
  },
  {
    id: 2,
    title: 'Table Lamp',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 3,
    title: 'Beige Sofa',
    price: 159.00,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Bamboo Basket',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Toaster',
    price: 224.50,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Black Tray Table',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop',
  },
];

export const ShopProductGrid = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12 w-full">
        {products.map((product) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="px-8 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300">
        Show more
      </button>
    </div>
  );
};
