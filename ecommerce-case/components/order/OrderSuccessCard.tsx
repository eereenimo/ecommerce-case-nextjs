import React from 'react';
import { ProductPreviewRow } from './ProductPreviewRow';
import { OrderDetails } from './OrderDetails';

export const OrderSuccessCard = () => {
  return (
    <div className="w-full max-w-[700px] bg-white border border-[#e5e7eb] rounded-xl shadow-sm p-6 md:p-12 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Thank you! 🎉</span>
        <h2 className="text-2xl md:text-4xl font-bold text-[#111111] text-center leading-tight max-w-[400px]">
          Your order has been received
        </h2>
      </div>

      {/* Product Previews */}
      <ProductPreviewRow />

      {/* Order Summary Details */}
      <OrderDetails />

      {/* Action Button */}
      <div className="w-full flex justify-center mt-2">
        <button className="w-full md:w-[220px] h-12 bg-black text-white text-xs font-bold rounded-full hover:bg-gray-800 transition-all uppercase tracking-widest shadow-lg active:scale-95">
          Purchase History
        </button>
      </div>
    </div>
  );
};
