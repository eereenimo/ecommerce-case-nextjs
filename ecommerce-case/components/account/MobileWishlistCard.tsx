import React from 'react';
import Image from 'next/image';

const wishlistData = [
  { id: 1, name: 'Minimalist Armchair', color: 'Black', price: '$199.00', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop' },
  { id: 2, name: 'Loveseat Sofa', color: 'Beige', price: '$399.00', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&auto=format&fit=crop' },
  { id: 3, name: 'Table Lamp', color: 'Gray', price: '$49.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=200&auto=format&fit=crop' },
];

export const MobileWishlistCard = () => {
  return (
    <div className="flex md:hidden flex-col gap-6 w-full">
      {wishlistData.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 py-6 border-b border-gray-100 last:border-0">
          <div className="flex items-start gap-4">
            {/* Remove Icon */}
            <button className="text-gray-300 pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            {/* Image */}
            <div className="relative w-20 h-24 bg-[#f3f4f6] rounded flex items-center justify-center p-2 flex-shrink-0">
              <Image src={item.image} alt={item.name} fill unoptimized className="object-contain" />
            </div>
            {/* Info */}
            <div className="flex flex-col gap-1 justify-center h-24">
              <span className="text-sm font-bold text-[#111111] leading-tight">{item.name}</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Color: {item.color}</span>
              <span className="text-sm font-bold text-[#111111] mt-1">{item.price}</span>
            </div>
          </div>
          {/* Action Button */}
          <button className="w-full h-11 bg-black text-white rounded-lg text-xs font-bold uppercase tracking-widest active:scale-95 transition-all">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
