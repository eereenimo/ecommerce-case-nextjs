'use client';

import React from 'react';
import Image from 'next/image';

const cartItems = [
  {
    id: 1,
    title: 'Minimalist Armchair',
    quantity: 2,
    price: 398.00,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Loveseat Sofa',
    quantity: 1,
    price: 399.00,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&auto=format&fit=crop',
  },
];

export const OrderSummary = () => {
  return (
    <div className="w-full lg:w-[380px] border border-[#d9d9d9] rounded-sm p-5 md:p-6 flex flex-col gap-5 sticky top-24 shadow-none bg-white">
      <h2 className="text-base font-bold text-[#111111] uppercase tracking-tight">Order summary</h2>

      {/* Mini Product List */}
      <div className="flex flex-col gap-4 max-h-[250px] overflow-y-auto no-scrollbar">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="relative w-14 h-18 bg-[#f3f4f6] rounded flex-shrink-0 flex items-center justify-center p-1">
              <Image src={item.image} alt={item.title} fill unoptimized className="object-contain" />
            </div>
            <div className="flex flex-col flex-1 gap-0.5">
              <span className="text-xs font-bold text-[#111111] line-clamp-1">{item.title}</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Qty: {item.quantity}</span>
            </div>
            <span className="text-xs font-bold text-black">${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Coupon Field (Mini) */}
      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
        <input 
          placeholder="Coupon code" 
          className="flex-1 h-10 border border-[#d9d9d9] rounded-sm px-3 text-xs outline-none focus:border-black transition-all" 
        />
        <button className="bg-black text-white px-4 h-10 rounded-sm text-xs font-bold hover:bg-gray-800 transition-all uppercase tracking-widest">
          Apply
        </button>
      </div>

      {/* Totals */}
      <div className="flex flex-col gap-2.5 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subtotal</span>
          <span className="text-xs font-bold text-black">$797.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shipping</span>
          <span className="text-xs font-bold text-black">$15.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Discount</span>
          <span className="text-xs font-bold text-green-600">-$50.00</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
          <span className="text-sm font-bold text-black uppercase tracking-widest">Total</span>
          <span className="text-sm font-bold text-black">$762.00</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="w-full h-12 bg-black text-white font-bold rounded-sm hover:bg-gray-800 transition-all active:scale-95 text-xs uppercase tracking-widest">
        Place Order
      </button>
    </div>
  );
};
