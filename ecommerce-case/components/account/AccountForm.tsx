import React from 'react';

const InputField = ({ label, placeholder, type = 'text', helperText }: { label: string, placeholder: string, type?: string, helperText?: string }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full h-11 border border-[#d9d9d9] rounded px-4 text-sm outline-none focus:border-black transition-all placeholder:text-gray-300 bg-white"
    />
    {helperText && <p className="text-[11px] text-gray-400 italic leading-tight">{helperText}</p>}
  </div>
);

export const PasswordSection = () => {
  return (
    <div className="flex flex-col gap-5 w-full pt-8 border-t border-gray-100 mt-8">
      <h2 className="text-base font-bold text-[#111111] uppercase tracking-tight">Password</h2>
      <div className="flex flex-col gap-4">
        <InputField label="Old Password" placeholder="Old Password" type="password" />
        <InputField label="New Password" placeholder="New Password" type="password" />
        <InputField label="Repeat New Password" placeholder="Repeat New Password" type="password" />
      </div>
    </div>
  );
};

export const AccountForm = () => {
  return (
    <div className="flex-1 w-full flex flex-col">
      <h2 className="text-xl font-bold text-[#111111] mb-6">Account Details</h2>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <InputField label="First Name" placeholder="First Name" />
          <InputField label="Last Name" placeholder="Last Name" />
        </div>
        <InputField 
          label="Display Name" 
          placeholder="Display Name" 
          helperText="This will be how your name will be displayed in the account section and in reviews"
        />
        <InputField label="Email" placeholder="Email Address" type="email" />

        <PasswordSection />

        <button className="w-full md:w-[180px] h-12 bg-black text-white text-xs font-bold rounded-md hover:bg-gray-800 transition-all uppercase tracking-widest mt-4 active:scale-95">
          Save changes
        </button>
      </div>
    </div>
  );
};
