'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { id: 'account', label: 'Account', path: '/my-account' },
  { id: 'address', label: 'Address', path: '/my-account/address' },
  { id: 'orders', label: 'Orders', path: '/my-account/orders' },
  { id: 'wishlist', label: 'Wishlist', path: '/my-account/wishlist' },
  { id: 'logout', label: 'Log Out', path: '/logout' },
];

interface AccountSidebarProps {
  activeTab: string;
}

export const AccountSidebar = ({ activeTab }: AccountSidebarProps) => {
  return (
    <div className="hidden lg:flex flex-col w-[260px] bg-[#f3f4f6] rounded-2xl p-8 border border-gray-100 h-fit">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="relative w-[72px] h-[72px]">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm aspect-square">
            <Image 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
              alt="User Avatar" 
              fill 
              className="object-cover"
              unoptimized
            />
          </div>
          <button className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-full flex items-center justify-center border-2 border-white shadow-sm hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
          </button>
        </div>
        <h3 className="text-base font-bold text-[#111111]">Sofia Harree</h3>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link 
            key={item.id}
            href={item.path}
            className={`text-sm font-bold text-left py-2 border-b transition-all ${
              item.id === activeTab 
                ? 'text-black border-black' 
                : 'text-gray-400 border-transparent hover:text-black'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
