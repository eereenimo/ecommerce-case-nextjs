'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';

export const OrderSummary = () => {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    
    // In a real app, you would send the order to the API here
    // For this case, we clear the cart and redirect
    clearCart();
    router.push('/order-complete');
  };

  return (
    <div className="w-full lg:w-[380px] border border-[#d9d9d9] rounded-sm p-5 md:p-6 flex flex-col gap-5 sticky top-24 shadow-none bg-white">
      <h2 className="text-base font-bold text-[#111111] uppercase tracking-tight">Order summary</h2>

      {/* Mini Product List */}
      <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-1">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="relative w-14 h-18 bg-[#f3f4f6] rounded flex-shrink-0 flex items-center justify-center p-1">
              <Image src={item.image} alt={item.title} fill unoptimized className="object-contain" />
            </div>
            <div className="flex flex-col flex-1 gap-0.5">
              <span className="text-xs font-bold text-[#111111] line-clamp-1">{item.title}</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Qty: {item.quantity}</span>
            </div>
            <span className="text-xs font-bold text-black">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="flex flex-col gap-2.5 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subtotal</span>
          <span className="text-xs font-bold text-black">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shipping</span>
          <span className="text-xs font-bold text-black">Free</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
          <span className="text-sm font-bold text-black uppercase tracking-widest">Total</span>
          <span className="text-sm font-bold text-black">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button 
        onClick={handlePlaceOrder}
        className="w-full h-12 bg-black text-white font-bold rounded-sm hover:bg-gray-800 transition-all active:scale-95 text-xs uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={items.length === 0}
      >
        Place Order
      </button>
    </div>
  );
};
