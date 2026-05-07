'use client';

import React, { useState } from 'react';

const paymentMethods = [
  { id: 'card', label: 'Credit Card', icon: '💳' },
  { id: 'paypal', label: 'PayPal', icon: '🅿️' },
  { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
];

export const PaymentSection = () => {
  const [method, setMethod] = useState('card');

  return (
    <div className="flex flex-col gap-5 w-full pt-8 border-t border-gray-100 mt-8">
      <h2 className="text-base font-bold text-[#111111] uppercase tracking-tight">Payment Method</h2>
      
      <div className="flex flex-col gap-2">
        {paymentMethods.map((pm) => (
          <div key={pm.id} className="flex flex-col gap-2">
            <label 
              className={`flex items-center justify-between p-3.5 border rounded cursor-pointer transition-all ${
                method === pm.id 
                  ? 'border-black bg-gray-50' 
                  : 'border-[#d9d9d9] hover:border-gray-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <input 
                  type="radio" 
                  name="payment" 
                  className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  checked={method === pm.id}
                  onChange={() => setMethod(pm.id)}
                />
                <span className="text-sm font-semibold text-gray-700">{pm.label}</span>
              </div>
              <span className="text-base opacity-70">{pm.icon}</span>
            </label>

            {/* Credit Card Fields (Conditional) */}
            {method === 'card' && pm.id === 'card' && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 p-4 bg-gray-50/50 rounded border border-gray-100 animate-in fade-in slide-in-from-top-1 duration-300">
                <div className="col-span-2 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Card Number</label>
                  <input placeholder="0000 0000 0000 0000" className="w-full h-10 border border-[#d9d9d9] rounded px-4 text-sm outline-none focus:border-black transition-all bg-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expiry Date</label>
                  <input placeholder="MM/YY" className="w-full h-10 border border-[#d9d9d9] rounded px-4 text-sm outline-none focus:border-black transition-all bg-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CVC</label>
                  <input placeholder="000" className="w-full h-10 border border-[#d9d9d9] rounded px-4 text-sm outline-none focus:border-black transition-all bg-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
