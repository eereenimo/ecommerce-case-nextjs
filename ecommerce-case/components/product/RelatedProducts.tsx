'use client';

import React from 'react';
import { ShopProductCard } from '../shop/ShopProductCard';

const relatedProducts = [
  {
    id: 101,
    title: 'Loveseat Sofa',
    price: 199.00,
    oldPrice: 400.00,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    discount: '-50%',
  },
  {
    id: 102,
    title: 'Table Lamp',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 103,
    title: 'Beige Sofa',
    price: 159.00,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 104,
    title: 'Bamboo Basket',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop',
  },
];

export const RelatedProducts = () => {
  return (
    <section className="w-full mt-24 mb-16">
      <div className="flex items-center justify-between mb-10 px-4 md:px-0">
        <h2 className="text-3xl font-semibold text-[#111827]">You may also like</h2>
        <button className="text-black font-bold underline underline-offset-4 hover:opacity-70 transition-opacity">
          More Products
        </button>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-6 md:pb-0 px-4 md:px-0 scrollbar-hide">
        {relatedProducts.map((product) => (
          <div key={product.id} className="min-w-[280px] md:min-w-0">
            <ShopProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
