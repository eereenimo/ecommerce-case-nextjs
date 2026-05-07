'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore, CartItem } from '@/store/useCartStore';
import { CheckoutSteps } from '@/components/checkout/CheckoutSteps';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-5">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/shop" className="bg-black text-white px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#111111] text-center mb-10">Cart</h1>
        <CheckoutSteps currentStep="cart" />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Cart Items List */}
          <div className="flex-1">
            <div className="hidden md:grid grid-cols-4 pb-4 border-b border-gray-100 mb-6">
              <span className="col-span-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Product</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">Quantity</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Subtotal</span>
            </div>

            <div className="flex flex-col gap-8">
              {items.map((item: CartItem) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 pb-8 border-b border-gray-50 last:border-0">
                  <div className="col-span-2 flex gap-4">
                    <div className="relative w-20 h-24 bg-[#f3f4f6] rounded-xl overflow-hidden p-2 flex-shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-contain" unoptimized />
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                      <h3 className="text-sm font-bold text-[#111111] line-clamp-2">{item.title}</h3>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Category: {item.category}</p>
                      <button onClick={() => removeItem(item.id)} className="text-[11px] font-bold text-gray-400 hover:text-red-500 transition-colors mt-auto uppercase tracking-widest flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Quantity */}
                  <div className="flex justify-center">
                    <div className="flex items-center bg-[#f3f4f6] rounded-md h-10 px-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-lg hover:text-black transition-colors">-</button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-lg hover:text-black transition-colors">+</button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <span className="text-sm font-bold text-[#111111]">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <div className="lg:w-[380px]">
            <div className="border border-gray-100 rounded-2xl p-6 md:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-[#111111] mb-6">Cart Summary</h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-sm text-gray-500">Subtotal</span>
                  <span className="text-sm font-bold text-[#111111]">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-base font-bold text-[#111111]">Total</span>
                  <span className="text-base font-bold text-[#111111]">${totalPrice.toFixed(2)}</span>
                </div>
                <Link href="/checkout" className="w-full bg-black text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest text-center mt-4 hover:bg-gray-800 transition-all active:scale-95">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
