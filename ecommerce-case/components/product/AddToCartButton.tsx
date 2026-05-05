"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex flex-1 items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-500 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
