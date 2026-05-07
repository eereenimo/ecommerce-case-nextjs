'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductTabs } from '@/components/product/ProductTabs';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import Newsletter from '@/components/home/Newsletter';
import { productService } from '@/services/productService';
import { Product } from '@/types/product';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await productService.getProductById(Number(id));
        setProduct(data);
      } catch (err) {
        setError('Product not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="w-12 h-12 border-4 border-gray-100 border-t-black rounded-full animate-spin" />
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loading Product...</span>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">{error || 'Product not found'}</h1>
        <Link href="/shop" className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-5 md:px-10 py-6 md:py-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">Home</Link>
        <span className="text-gray-300">/</span>
        <Link href="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">Shop</Link>
        <span className="text-gray-300">/</span>
        <span className="text-sm text-gray-500 capitalize">{product.category}</span>
        <span className="text-gray-300">/</span>
        <span className="text-sm text-[#111827] font-semibold truncate max-w-[200px]">{product.title}</span>
      </nav>

      {/* Product Hero Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-8 lg:gap-16 py-4 lg:py-6">
        {/* Left: Gallery */}
        <div className="flex-1 lg:max-w-[580px]">
          <ProductGallery product={product} />
        </div>

        {/* Right: Info */}
        <div className="flex-1 lg:pt-2">
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Product Tabs (Description, Reviews, etc.) */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 mt-12 md:mt-16">
        <ProductTabs />
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 border-t border-gray-100">
        <RelatedProducts category={product.category} excludeId={product.id} />
      </section>

      <Newsletter />
    </main>
  );
}
