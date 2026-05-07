'use client';

import React, { useEffect, useState } from 'react';
import { ShopProductCard } from '../shop/ShopProductCard';
import { productService } from '@/services/productService';
import { Product } from '@/types/product';

interface RelatedProductsProps {
  category: string;
  excludeId: number;
}

export const RelatedProducts = ({ category, excludeId }: RelatedProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        setLoading(true);
        const allProducts = await productService.getProductsByCategory(category);
        const filtered = allProducts
          .filter((p) => p.id !== excludeId)
          .slice(0, 4);
        setProducts(filtered);
      } catch (err) {
        console.error('Failed to fetch related products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [category, excludeId]);

  if (loading || products.length === 0) return null;

  return (
    <section className="w-full mt-24 mb-16">
      <div className="flex items-center justify-between mb-10 px-4 md:px-0">
        <h2 className="text-3xl font-semibold text-[#111827]">You may also like</h2>
        <button className="text-black font-bold underline underline-offset-4 hover:opacity-70 transition-opacity uppercase text-xs tracking-widest">
          More Products
        </button>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-6 md:pb-0 px-4 md:px-0 scrollbar-hide">
        {products.map((product) => (
          <div key={product.id} className="min-w-[280px] md:min-w-0">
            <ShopProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
