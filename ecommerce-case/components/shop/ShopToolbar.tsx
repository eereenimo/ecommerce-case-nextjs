'use client';

import React from 'react';

export const ShopToolbar = () => {
  return (
    <div className="flex items-center justify-between mb-8 pb-4">
      {/* Left: Category Title (Desktop) / Filter Button (Mobile) */}
      <div className="flex items-center">
        <h2 className="hidden lg:block text-xl font-semibold text-[#111827]">
          Living Room
        </h2>
        <button className="lg:hidden flex items-center gap-2 font-semibold text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          Filter
        </button>
      </div>

      {/* Right: Sort and Layout Icons */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-sm font-semibold text-black">Sort by</span>
          <svg className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-1.5 rounded bg-gray-100 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          </button>
          <button className="p-1.5 text-gray-400 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};
