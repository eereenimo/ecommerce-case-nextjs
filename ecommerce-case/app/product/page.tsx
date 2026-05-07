import React from 'react';
import Link from 'next/link';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductTabs } from '@/components/product/ProductTabs';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import Newsletter from '@/components/home/Newsletter';

export const metadata = {
  title: 'Minimalist Armchair | VisioCreate',
  description: 'Handcrafted luxury armchair with premium fabric and Scandinavian design.',
};

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-5 md:px-10 py-6 md:py-8 flex items-center gap-2">
        <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">Home</Link>
        <span className="text-gray-300">{">"}</span>
        <Link href="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">Shop</Link>
        <span className="text-gray-300">{">"}</span>
        <Link href="/product" className="text-sm text-gray-500 hover:text-black transition-colors">Living Room</Link>
        <span className="text-gray-300">{">"}</span>
        <span className="text-sm text-[#111827] font-semibold">Product</span>
      </nav>

      {/* Product Hero Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-8 lg:gap-16 py-4 lg:py-6">
        {/* Left: Gallery */}
        <div className="flex-1 lg:max-w-[580px]">
          <ProductGallery />
        </div>

        {/* Right: Info */}
        <div className="flex-1 lg:pt-2">
          <ProductInfo />
        </div>
      </section>

      {/* Product Tabs (Description, Reviews, etc.) */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 mt-12 md:mt-16">
        <ProductTabs />
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 border-t border-gray-100">
        <RelatedProducts />
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
