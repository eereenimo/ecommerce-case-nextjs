'use client';

import React from 'react';

const features = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'Order over $200',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M15 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M2 13h15V4H2v9Z" />
        <path d="M17 13h5l-2-5h-3v5Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Money-back',
    description: '30 days guarantee',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Secure Payments',
    description: 'Secured by Stripe',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Phone and Email support',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="bg-gray-100 rounded-2xl p-6 md:p-10 flex flex-col items-start transition-all duration-300 group"
          >
            <div className="text-gray-800 mb-6 transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </div>

            <div className="space-y-1">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;