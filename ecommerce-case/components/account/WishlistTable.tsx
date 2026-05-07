import React from 'react';
import Image from 'next/image';

const wishlistData = [
  { id: 1, name: 'Minimalist Armchair', color: 'Black', price: '$199.00', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop' },
  { id: 2, name: 'Loveseat Sofa', color: 'Beige', price: '$399.00', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&auto=format&fit=crop' },
  { id: 3, name: 'Table Lamp', color: 'Gray', price: '$49.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=200&auto=format&fit=crop' },
];

export const WishlistTable = () => {
  return (
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
          {wishlistData.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 last:border-0 group">
              <td className="py-6 flex items-center gap-4">
                {/* Remove Icon */}
                <button className="text-gray-300 hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                {/* Image */}
                <div className="relative w-16 h-20 bg-[#f3f4f6] rounded flex items-center justify-center p-1 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill unoptimized className="object-contain" />
                </div>
                {/* Info */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-[#111111]">{item.name}</span>
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Color: {item.color}</span>
                </div>
              </td>
              <td className="py-6 text-sm font-bold text-[#111111] text-right pr-20">
                {item.price}
              </td>
              <td className="py-6 text-right">
                <button className="bg-black text-white px-5 py-2.5 rounded text-xs font-bold hover:bg-gray-800 transition-all uppercase tracking-widest">
                  Add to cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
