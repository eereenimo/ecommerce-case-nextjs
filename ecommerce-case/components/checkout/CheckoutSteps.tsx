'use client';

import React from 'react';

const steps = [
  { id: 1, label: 'Shopping cart' },
  { id: 2, label: 'Checkout details' },
  { id: 3, label: 'Order complete' },
];

interface CheckoutStepsProps {
  currentStep: 'cart' | 'checkout' | 'complete';
}

export const CheckoutSteps = ({ currentStep }: CheckoutStepsProps) => {
  const stepMap: Record<string, number> = {
    'cart': 1,
    'checkout': 2,
    'complete': 3
  };
  
  const currentStepId = stepMap[currentStep] || 1;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[600px]">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center gap-3 group">
              <div 
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step.id === currentStepId 
                    ? 'bg-black text-white' 
                    : step.id < currentStepId 
                    ? 'bg-[#38CB89] text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {step.id < currentStepId ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                ) : step.id}
              </div>
              <span 
                className={`text-xs md:text-sm font-bold transition-all ${
                  step.id <= currentStepId ? 'text-black' : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex-1 mx-4 h-[1px] bg-gray-100 hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
