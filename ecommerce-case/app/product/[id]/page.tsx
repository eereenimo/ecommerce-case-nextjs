import React from "react";
import Image from "next/image";
import { getProduct, getProducts } from "@/lib/api";
import { notFound } from "next/navigation";

// Generate static params for all products (SSG)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

import AddToCartButton from "@/components/product/AddToCartButton";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  try {
    const product = await getProduct(id);

    if (!product) {
      return notFound();
    }

    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-gray-100 bg-white p-12 dark:border-gray-800">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center space-x-2">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                {product.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="mr-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {product.title}
            </h1>

            <p className="mt-4 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              ${product.price.toFixed(2)}
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider">Description</h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <AddToCartButton product={product} />
              <button className="flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-gray-800">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }
}
