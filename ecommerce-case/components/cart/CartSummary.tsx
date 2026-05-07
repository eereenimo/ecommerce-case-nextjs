'use client';

import React, { useState } from 'react';

const shippingOptions = [
  { id: 'free', label: 'Free shipping', price: 0 },
  { id: 'express', label: 'Express shipping', price: 15 },
  { id: 'pickup', label: 'Pick Up', price: 0 },
];

export const CartSummary = () => {
  const [selectedShipping, setSelectedShipping] = useState('free');

  const subtotal = 1345.00;
  const shippingPrice = shippingOptions.find(o => o.id === selectedShipping)?.price || 0;
  const total = subtotal + shippingPrice;

  return (
    <div className="w-full lg:w-[410px] border border-[#e5e7eb] rounded-xl p-8 shadow-sm flex flex-col gap-6 sticky top-24">
      <h2 className="text-xl font-semibold text-[#111111]">Cart summary</h2>

      {/* Shipping Options */}
      <div className="flex flex-col gap-3">
        {shippingOptions.map((option) => (
          <label 
            key={option.id}
            className={`flex items-center justify-between p-4 border rounded-md cursor-pointer transition-all ${
              selectedShipping === option.id 
                ? 'border-black bg-gray-50' 
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <input 
                type="radio" 
                name="shipping" 
                className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                checked={selectedShipping === option.id}
                onChange={() => setSelectedShipping(option.id)}
              />
              <span className="text-sm font-medium text-gray-700">{option.label}</span>
            </div>
            <span className="text-sm font-medium">
              {option.price === 0 ? '$0.00' : `+$${option.price.toFixed(2)}`}
            </span>
          </label>
        ))}
      </div>

      {/* Totals */}
      <div className="flex flex-col gap-4 py-2 border-t border-gray-100 mt-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 font-medium">Subtotal</span>
          <span className="text-[#111111] font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-lg md:text-xl border-t border-gray-100 pt-4">
          <span className="text-[#111111] font-bold">Total</span>
          <span className="text-[#111111] font-bold">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full h-[52px] bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all active:scale-95">
        Checkout
      </button>
    </div>
  );
};
