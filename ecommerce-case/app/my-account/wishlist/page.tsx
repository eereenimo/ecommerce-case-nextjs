'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AccountLayout } from '@/components/account/AccountLayout';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useCartStore } from '@/store/useCartStore';

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

  return (
    <AccountLayout activeTab="wishlist" title="My Account">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-xl font-bold text-[#111111]">Your Wishlist</h2>
        
        {items.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center gap-4 border border-dashed border-gray-200 rounded-xl">
            <p className="text-gray-500 font-medium">Your wishlist is empty.</p>
            <Link href="/shop" className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {/* Desktop Table */}
            <div className="hidden md:block w-full overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest w-[50%]">Product</th>
                    <th className="py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right pr-20">Price</th>
                    <th className="py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 last:border-0 group">
                      <td className="py-6 flex items-center gap-4">
                        <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-black transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                        <div className="relative w-16 h-20 bg-[#f3f4f6] rounded flex items-center justify-center p-1 flex-shrink-0">
                          <Image src={item.image} alt={item.title} fill unoptimized className="object-contain" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-bold text-[#111111]">{item.title}</span>
                          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Category: {item.category}</span>
                        </div>
                      </td>
                      <td className="py-6 text-sm font-bold text-[#111111] text-right pr-20">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-6 text-right">
                        <button onClick={() => addItem(item)} className="bg-black text-white px-5 py-2.5 rounded text-xs font-bold hover:bg-gray-800 transition-all uppercase tracking-widest">
                          Add to cart
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="flex md:hidden flex-col gap-6 w-full">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 py-6 border-b border-gray-100 last:border-0">
                  <div className="flex items-start gap-4">
                    <button onClick={() => removeItem(item.id)} className="text-gray-300 pt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                    <div className="relative w-20 h-24 bg-[#f3f4f6] rounded flex items-center justify-center p-2 flex-shrink-0">
                      <Image src={item.image} alt={item.title} fill unoptimized className="object-contain" />
                    </div>
                    <div className="flex flex-col gap-1 justify-center h-24">
                      <span className="text-sm font-bold text-[#111111] leading-tight line-clamp-2">{item.title}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Category: {item.category}</span>
                      <span className="text-sm font-bold text-[#111111] mt-1">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <button onClick={() => addItem(item)} className="w-full h-11 bg-black text-white rounded-lg text-xs font-bold uppercase tracking-widest active:scale-95 transition-all">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AccountLayout>
  );
}
