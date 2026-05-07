'use client';

import React from 'react';

export const CouponForm = () => {
  return (
    <div className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold text-[#111111]">Have a coupon?</h3>
        <p className="text-sm text-gray-500">Add your code for an instant cart discount</p>
      </div>

      <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-2 focus-within:border-black transition-colors bg-white">
        <div className="pl-2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5 9 19"/><rect width="18" height="14" x="3" y="5" rx="2"/><path d="M7 9h.01"/><path d="M17 15h.01"/></svg>
        </div>
        <input 
          type="text" 
          placeholder="Coupon Code" 
          className="flex-1 text-sm font-medium outline-none bg-transparent"
        />
        <button className="text-sm font-bold text-black px-4 py-2 hover:opacity-70 transition-opacity">
          Apply
        </button>
      </div>
    </div>
  );
};
