import React from 'react';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { CouponForm } from '@/components/cart/CouponForm';
import { CheckoutSteps } from '@/components/cart/CheckoutSteps';

const cartData = [
  {
    id: 1,
    title: 'Minimalist Armchair',
    color: 'Black',
    price: 199.00,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Loveseat Sofa',
    color: 'Beige',
    price: 399.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Table Lamp',
    color: 'Gray',
    price: 49.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
  },
];

export const metadata = {
  title: 'Shopping Cart | VisioCreate',
  description: 'Review your items and proceed to checkout.',
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Header Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-16 flex flex-col items-center gap-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111111]">Cart</h1>
        <CheckoutSteps />
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Product List */}
          <div className="flex-1 w-full">
            {/* Desktop Table Header */}
            <div className="hidden md:flex items-center pb-4 border-b border-gray-100 mb-2">
              <span className="flex-1 text-sm font-bold text-gray-400 uppercase tracking-widest">Product</span>
              <div className="flex-1 flex justify-between">
                <span className="flex-1 text-center text-sm font-bold text-gray-400 uppercase tracking-widest">Quantity</span>
                <span className="flex-1 text-center text-sm font-bold text-gray-400 uppercase tracking-widest">Price</span>
                <span className="flex-1 text-right text-sm font-bold text-gray-400 uppercase tracking-widest">Subtotal</span>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex flex-col">
              {cartData.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Coupon Section (Desktop Position) */}
            <div className="mt-12 hidden md:block">
              <CouponForm />
            </div>
          </div>

          {/* Right Side: Summary Card */}
          <div className="w-full lg:w-auto">
            <CartSummary />
            
            {/* Coupon Section (Mobile Position) */}
            <div className="mt-8 md:hidden">
              <CouponForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
