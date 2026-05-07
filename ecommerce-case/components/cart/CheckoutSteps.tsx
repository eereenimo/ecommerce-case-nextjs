'use client';

import React from 'react';

const steps = [
  { id: 1, label: 'Shopping cart' },
  { id: 2, label: 'Checkout details' },
  { id: 3, label: 'Order complete' },
];

export const CheckoutSteps = () => {
  const currentStep = 1;

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex items-center justify-center gap-4 md:gap-16">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-2 md:gap-4 group">
            <div 
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all ${
                step.id === currentStep 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step.id}
            </div>
            <span 
              className={`text-sm md:text-base font-bold transition-all ${
                step.id === currentStep ? 'text-black' : 'text-gray-400'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-100" />
    </div>
  );
};
