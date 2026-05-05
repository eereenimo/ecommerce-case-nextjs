"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="rounded-full bg-gray-100 p-6 dark:bg-zinc-900">
            <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Your cart is empty</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            href="/"
            className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <div key={item.id} className="flex space-x-6 border-b border-gray-100 pb-8 dark:border-gray-800">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white p-2 dark:border-gray-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="ml-4 text-sm font-bold text-gray-900 dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 capitalize">{item.category}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Qty: {item.quantity}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            Clear entire cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="rounded-3xl bg-gray-50 p-8 dark:bg-zinc-900/50 h-fit">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
              <span className="text-sm text-gray-600 dark:text-gray-400">Shipping</span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">Free</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
              <span className="text-base font-bold text-gray-900 dark:text-white">Total</span>
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-10 rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-indigo-500 transition-all active:scale-95">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
