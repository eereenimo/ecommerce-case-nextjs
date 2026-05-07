'use client';

import React from 'react';

const categories = [
  'All Rooms',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Bathroom',
  'Dining',
  'Outdoor',
];

const prices = [
  'All Price',
  '$0.00 - 99.99',
  '$100.00 - 199.99',
  '$200.00 - 299.99',
  '$300.00 - 399.99',
  '$400.00+',
];

export const ShopSidebar = () => {
  return (
    <aside className="hidden lg:block w-[240px] flex-shrink-0">
      <div className="flex items-center gap-2 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="21" y2="21"/><line x1="4" x2="20" y1="3" y2="3"/><line x1="12" x2="12" y1="3" y2="21"/><path d="M4 11h16"/><path d="M8 15h8"/><path d="M8 7h8"/></svg>
        <span className="font-semibold text-lg">Filter</span>
      </div>

      {/* Categories */}
      <div className="mb-10">
        <h3 className="text-sm font-bold text-[#111827] mb-5 tracking-wider">CATEGORIES</h3>
        <ul className="flex flex-col gap-3">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`text-sm transition-all hover:text-black ${
                  category === 'Living Room'
                    ? 'font-semibold text-black underline underline-offset-4'
                    : 'text-gray-500'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-sm font-bold text-[#111827] mb-5 tracking-wider">PRICE</h3>
        <ul className="flex flex-col gap-4">
          {prices.map((price) => (
            <li key={price}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer appearance-none w-5 h-5 border border-gray-300 rounded transition-all checked:bg-black checked:border-black"
                    defaultChecked={price === 'All Price'}
                  />
                  <svg
                    className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-black transition-colors">
                  {price}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
