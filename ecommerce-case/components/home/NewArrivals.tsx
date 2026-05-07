'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productService } from '@/services/productService';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';

const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  
  const addItem = useCartStore((state) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  const fallbackImage = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getLimitedProducts(5);
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch new arrivals');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="h-[400px] flex items-center justify-center animate-pulse text-gray-400">Loading New Arrivals...</div>;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      const position = (scrollLeft / totalScrollable) * 100;
    }
  };

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      {/* Header Row */}
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          New Arrivals
        </h2>
        <Link 
          href="/shop" 
          className="text-sm font-semibold text-gray-900 hover:text-teal-600 flex items-center gap-1 border-b border-black hover:border-teal-600 pb-0.5 transition-all"
        >
          More Products
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </Link>
      </div>

      {/* Product List with Horizontal Scroll */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto pb-6 snap-x no-scrollbar"
      >
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex-shrink-0 w-[260px] md:w-[240px] snap-start"
          >
            {/* Product Card Container */}
            <div className="flex flex-col h-full group">
              
              {/* Gray Container Block (Image + Action) */}
              <div className="bg-gray-100 rounded-2xl p-4 relative flex flex-col">
                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <span className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                    New
                  </span>
                  <span className="bg-[#38CB89] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                    -50%
                  </span>
                </div>

                {/* Wishlist Button Overlay */}
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md transition-all hover:scale-110 active:scale-90 ${isInWishlist(product.id) ? 'text-red-500' : 'text-gray-400'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </button>

                {/* Centered Image Area */}
                <Link href={`/product/${product.id}`} className="h-40 flex items-center justify-center overflow-hidden p-6">
                  <Image 
                    src={imageErrors[product.id] ? fallbackImage : product.image} 
                    alt={product.title}
                    width={180}
                    height={140}
                    className="object-contain max-h-[140px] transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                    onError={() => handleImageError(product.id)}
                  />
                </Link>

                {/* Add to Cart Button (Refined Blue style) */}
                <button 
                  onClick={() => addItem(product)}
                  className="w-full bg-[#2f80ed] text-white py-2.5 mt-4 rounded-xl text-sm font-bold transition-all hover:bg-[#1c6dd0] active:scale-[0.98] shadow-sm"
                >
                  Add to cart
                </button>
              </div>

              {/* Product Details (Stay outside) */}
              <div className="px-1 mt-4 space-y-1">
                <div className="flex gap-0.5 text-[10px]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating.rate) ? 'text-black' : 'text-gray-300'}>
                      ⭐
                    </span>
                  ))}
                </div>
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-base font-semibold text-gray-900 truncate group-hover:text-[#2f80ed] transition-colors">
                    {product.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${(product.price * 2).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Static Scroll Progress Bar (75% Filled) */}
      <div className="mt-8">
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gray-900 rounded-full"
            style={{ width: '75%' }}
          />
        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default NewArrivals;
