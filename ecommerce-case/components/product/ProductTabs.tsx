'use client';

import React, { useState } from 'react';
import { ReviewList } from './ReviewList';

const tabs = ['Additional Info', 'Questions', 'Reviews'];

export const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('Reviews');

  return (
    <div className="w-full mt-12 md:mt-16 border-t border-gray-100 pt-8">
      {/* Tab Headers */}
      <div className="flex items-center gap-8 md:gap-12 border-b border-gray-100 mb-8 overflow-x-auto pb-0.5 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm md:text-base font-semibold whitespace-nowrap transition-all relative pb-3 ${
              activeTab === tab 
                ? 'text-black after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1.5px] after:bg-black' 
                : 'text-gray-400 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === 'Reviews' && <ReviewList />}
        {activeTab === 'Description' && (
          <div className="text-gray-600 leading-relaxed text-lg">
            <p className="mb-4">
              Step into a world of comfort and style with our Minimalist Armchair. Each piece is meticulously crafted to meet the highest standards of quality and design. Whether you're curling up with a book or hosting guests, this armchair provides the perfect balance of support and softness.
            </p>
            <p>
              The neutral tones and clean lines make it a versatile addition to any room, seamlessly blending with your existing decor while adding a touch of sophisticated luxury.
            </p>
          </div>
        )}
        {activeTab === 'Additional Info' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-black">Dimensions</span>
              <span>Height: 85cm | Width: 75cm | Depth: 80cm</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-black">Materials</span>
              <span>Solid oak legs, Premium linen fabric, High-density foam padding.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
