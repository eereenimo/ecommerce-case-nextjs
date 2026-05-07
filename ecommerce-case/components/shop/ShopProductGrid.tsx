'use client';

import React, { useEffect, useState } from 'react';
import { ShopProductCard } from './ShopProductCard';
import { productService } from '@/services/productService';
import { Product } from '@/types/product';

export const ShopProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col gap-3 animate-pulse">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl" />
            <div className="h-4 bg-gray-100 rounded w-3/4" />
            <div className="h-4 bg-gray-100 rounded w-1/4" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center flex flex-col items-center gap-4">
        <p className="text-gray-500 font-medium">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12 w-full">
        {products.map((product) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="px-8 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300">
        Show more
      </button>
    </div>
  );
};
