'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AccountMobileCardProps {
  activeTab: string;
}

const navItems = [
  { id: 'account', label: 'Account', path: '/my-account' },
  { id: 'address', label: 'Address', path: '/my-account/address' },
  { id: 'orders', label: 'Orders', path: '/my-account/orders' },
  { id: 'wishlist', label: 'Wishlist', path: '/my-account/wishlist' },
  { id: 'logout', label: 'Log Out', path: '/logout' },
];

export const AccountMobileCard = ({ activeTab }: AccountMobileCardProps) => {
  const router = useRouter();

  const handleNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItem = navItems.find(item => item.label === e.target.value);
    if (selectedItem) {
      router.push(selectedItem.path);
    }
  };

  return (
    <div className="flex lg:hidden flex-col gap-6 w-full mb-8 bg-[#f3f4f6] rounded-2xl p-6 border border-gray-100 shadow-sm">
      {/* Profile Section Mobile */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-[64px] h-[64px]">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm aspect-square">
            <Image 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
              alt="User Avatar" 
              fill 
              className="object-cover"
              unoptimized
            />
          </div>
          <button className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
          </button>
        </div>
        <h3 className="text-base font-bold text-[#111111]">Sofia Harree</h3>
      </div>

      {/* Dropdown Selector */}
      <div className="relative">
        <select 
          className="w-full h-12 bg-white border border-[#d9d9d9] rounded-lg px-4 text-sm font-bold appearance-none outline-none focus:border-black transition-all"
          value={navItems.find(item => item.id === activeTab)?.label || 'Account'}
          onChange={handleNavChange}
        >
          {navItems.map((item) => (
            <option key={item.id}>{item.label}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
    </div>
  );
};
