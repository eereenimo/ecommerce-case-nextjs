'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore, CartState } from '@/store/useCartStore';
import { useWishlistStore, WishlistState } from '@/store/useWishlistStore';
import { useAuthStore } from '@/store/useAuthStore';

const Header = () => {
  const [isPromoVisible, setIsPromoVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cartItems = useCartStore((state: CartState) => state.items);
  const wishlistItems = useWishlistStore((state: WishlistState) => state.items);
  const getTotalItems = useCartStore((state: CartState) => state.getTotalItems);
  const { isAuthenticated, user, logout } = useAuthStore();

  const totalCartItems = getTotalItems();
  const wishlistCount = wishlistItems.length;

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Product', href: '/product' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full">
      {/* Top Promo Bar */}
      {isPromoVisible && (
        <div className="w-full bg-gray-100 py-2.5 px-4 flex items-center justify-between text-sm">
          <div className="flex-1 flex justify-center items-center gap-3">
            <span className="text-gray-700 font-medium">30% off storewide — Limited time!</span>
            <Link href="/shop" className="text-black hover:opacity-70 flex items-center gap-1 font-semibold border-b border-black">
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </Link>
          </div>
          <button 
            onClick={() => setIsPromoVisible(false)}
            className="text-gray-500 hover:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      )}

      {/* Main Header */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Left: Mobile Menu + Logo */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-black"
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                )}
              </button>
              
              <Link href="/" className="text-2xl font-bold tracking-tight text-black">
                VisioCreate
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-[15px] font-medium text-gray-600 hover:text-black transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/my-account/wishlist" className="p-1 text-gray-700 hover:text-black relative transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                {mounted && wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              
              <Link href={isAuthenticated ? "/my-account" : "/sign-in"} className="p-1 text-gray-700 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </Link>

              <Link href="/cart" className="p-1 text-gray-700 hover:text-black relative transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                {mounted && totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">
                    {totalCartItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`lg:hidden bg-white border-t border-gray-100 transition-all ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-800 hover:text-black">
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
              <Link href={isAuthenticated ? "/my-account" : "/sign-in"} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-gray-700 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>{isAuthenticated ? user?.name.firstname : 'Sign In'}</span>
              </Link>
              {isAuthenticated && (
                <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-left text-red-500 font-medium text-sm">Log Out</button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
