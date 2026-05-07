import React from 'react';

const DetailRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col gap-1 md:items-start">
    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
    <span className="text-sm font-bold text-[#111111]">{value}</span>
  </div>
);

export const OrderDetails = () => {
  return (
    <div className="w-full flex flex-col gap-5 py-6 border-t border-gray-100">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-10">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest min-w-[100px] text-right">Order code</span>
          <span className="text-sm font-bold text-[#111111] min-w-[100px] text-left">#0123_4567</span>
        </div>
        <div className="flex items-center justify-center gap-10">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest min-w-[100px] text-right">Date</span>
          <span className="text-sm font-bold text-[#111111] min-w-[100px] text-left">October 27, 2023</span>
        </div>
        <div className="flex items-center justify-center gap-10">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest min-w-[100px] text-right">Total</span>
          <span className="text-sm font-bold text-[#111111] min-w-[100px] text-left">$762.00</span>
        </div>
        <div className="flex items-center justify-center gap-10">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest min-w-[100px] text-right">Payment</span>
          <span className="text-sm font-bold text-[#111111] min-w-[100px] text-left">Credit Card</span>
        </div>
      </div>
    </div>
  );
};
