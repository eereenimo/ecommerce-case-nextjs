import React from 'react';

const InputField = ({ label, placeholder, type = 'text' }: { label: string, placeholder: string, type?: string }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full h-11 border border-[#d9d9d9] rounded px-4 text-sm outline-none focus:border-black transition-all placeholder:text-gray-300 bg-white"
    />
  </div>
);

export const BillingSection = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-base font-bold text-[#111111] uppercase tracking-tight">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
        <InputField label="First Name" placeholder="First Name" />
        <InputField label="Last Name" placeholder="Last Name" />
        <InputField label="Phone Number" placeholder="Phone Number" />
        <InputField label="Email Address" placeholder="Email Address" type="email" />
      </div>
    </div>
  );
};

export const ShippingSection = () => {
  return (
    <div className="flex flex-col gap-5 w-full pt-8 border-t border-gray-100 mt-8">
      <h2 className="text-base font-bold text-[#111111] uppercase tracking-tight">Shipping Address</h2>
      <div className="flex flex-col gap-4">
        <InputField label="Street Address" placeholder="Street Address" />
        <InputField label="Country" placeholder="Country" />
        <InputField label="Town / City" placeholder="Town / City" />
        <div className="grid grid-cols-2 gap-4">
          <InputField label="State" placeholder="State" />
          <InputField label="Zip Code" placeholder="Zip Code" />
        </div>
      </div>
    </div>
  );
};
