import React from 'react';

interface AddressCardProps {
  type: 'Billing Address' | 'Shipping Address';
  name: string;
  phone: string;
  address: string;
}

export const AddressCard = ({ type, name, phone, address }: AddressCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 border border-[#d9d9d9] rounded-xl bg-white transition-all hover:border-black group">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-[#111111]">{type}</h4>
        <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-black transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
          Edit
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-[#111111]">{name}</p>
        <p className="text-sm text-gray-500">{phone}</p>
        <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{address}</p>
      </div>
    </div>
  );
};
