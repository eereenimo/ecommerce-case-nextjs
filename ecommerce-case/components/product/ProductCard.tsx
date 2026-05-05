import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-zinc-900/50">
        {/* Image Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-white p-6 dark:bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute top-4 right-4 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-sm backdrop-blur-sm">
            {product.category}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col p-5">
          <h3 className="mb-2 line-clamp-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
            {product.title}
          </h3>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center space-x-1">
               <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-gray-500 dark:text-gray-400">{product.rating.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
