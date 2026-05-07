'use client';

import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sofia Harree',
    date: 'March 14, 2024',
    rating: 5,
    text: 'I bought this chair for my reading nook and it is absolutely perfect! The quality of the fabric is even better than in the photos.',
    avatar: 'https://i.pravatar.cc/150?u=sofia',
  },
  {
    id: 2,
    name: 'Nicolas Markham',
    date: 'March 10, 2024',
    rating: 5,
    text: 'Very clean design and easy to assemble. The wooden legs are sturdy and have a beautiful finish. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?u=nicolas',
  },
  {
    id: 3,
    name: 'Elena Gilbert',
    date: 'February 28, 2024',
    rating: 4,
    text: 'The comfort level is great, and it fits perfectly in my minimalist living room. Shipping was also faster than expected.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
  {
    id: 4,
    name: 'Damon Salvatore',
    date: 'February 25, 2024',
    rating: 5,
    text: 'Premium quality and very sleek. It has that luxury feel without being too bulky. Definitely worth every penny.',
    avatar: 'https://i.pravatar.cc/150?u=damon',
  },
  {
    id: 5,
    name: 'Bonnie Bennett',
    date: 'February 15, 2024',
    rating: 5,
    text: 'Love the texture of the fabric. It was easy to clean a small spill, which is a huge plus for me. The color is exactly as shown.',
    avatar: 'https://i.pravatar.cc/150?u=bonnie',
  },
];

export const ReviewList = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl">
      {/* Reviews Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#111827]">Customer Reviews</h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-black fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-500">11 Reviews</span>
          </div>
          <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mt-1">Minimalist Armchair</p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-400 uppercase">Sort by:</span>
          <div className="flex items-center gap-1 border border-gray-200 rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-xs font-bold text-black">Newest</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </div>

      {/* Write Review Section */}
      <div className="flex flex-col gap-4 bg-white border border-gray-100 rounded-2xl p-4 md:p-6 shadow-sm">
        <div className="flex items-center gap-3 text-xl">
          <span>😊</span>
          <span>😍</span>
          <span>😐</span>
          <span>😒</span>
        </div>
        <textarea 
          placeholder="Share your thoughts about the product..."
          className="w-full min-h-[100px] bg-gray-50/50 border border-gray-100 rounded-xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all resize-none"
        />
        <div className="flex justify-end">
          <button className="bg-black text-white text-xs font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-all active:scale-95">
            Write Review
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="flex flex-col">
        {reviews.map((review, idx) => (
          <div 
            key={review.id} 
            className={`py-8 flex flex-col md:flex-row gap-6 ${idx !== reviews.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            {/* Avatar Left */}
            <div className="flex-shrink-0">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm"
              />
            </div>

            {/* Content Right */}
            <div className="flex-grow flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-[#111827]">{review.name}</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 text-black fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-[11px] font-medium text-gray-300 uppercase tracking-wider">{review.date}</span>
              </div>
              
              <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                {review.text}
              </p>

              <div className="flex items-center gap-6 mt-2">
                <button className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  Like
                </button>
                <button className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button className="px-10 py-2.5 rounded-full border border-gray-200 text-[11px] font-bold text-black uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300">
          Load more
        </button>
      </div>
    </div>
  );
};
