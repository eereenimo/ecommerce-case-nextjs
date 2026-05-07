'use client';

import React from 'react';
import Image from 'next/image';
import { QuantitySelector } from './QuantitySelector';

interface CartItemProps {
  item: {
    id: number;
    title: string;
    color: string;
    price: number;
    quantity: number;
    image: string;
  };
}

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center py-6 border-b border-[#e5e7eb] gap-4 md:gap-0">
      {/* Product Info (Left) */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-20 h-24 md:w-24 md:h-28 bg-[#f3f4f6] rounded-xl overflow-hidden flex items-center justify-center p-2">
          <Image
            src={item.image}
            alt={item.title}
            fill
            unoptimized
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm md:text-base font-semibold text-[#111111]">{item.title}</h3>
          <span className="text-xs text-gray-400">Color: {item.color}</span>
          <button className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-black mt-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            Remove
          </button>
        </div>
      </div>

      {/* Mobile-only Quantity and Subtotal layout */}
      <div className="flex items-center justify-between w-full md:hidden mt-2">
        <QuantitySelector 
          quantity={item.quantity} 
          onIncrease={() => {}} 
          onDecrease={() => {}} 
        />
        <div className="flex flex-col items-end">
          <span className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>

      {/* Desktop columns */}
      <div className="hidden md:flex flex-1 items-center justify-between px-4">
        {/* Quantity */}
        <div className="flex-1 flex justify-center">
          <QuantitySelector 
            quantity={item.quantity} 
            onIncrease={() => {}} 
            onDecrease={() => {}} 
          />
        </div>
        {/* Price */}
        <div className="flex-1 text-center text-sm font-medium">
          ${item.price.toFixed(2)}
        </div>
        {/* Subtotal */}
        <div className="flex-1 text-right text-sm font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
