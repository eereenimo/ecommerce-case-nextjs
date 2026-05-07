import React from 'react';
import { AccountLayout } from '@/components/account/AccountLayout';
import { WishlistTable } from '@/components/account/WishlistTable';
import { MobileWishlistCard } from '@/components/account/MobileWishlistCard';

export const metadata = {
  title: 'Your Wishlist | VisioCreate',
  description: 'View and manage your saved products.',
};

export default function WishlistPage() {
  return (
    <AccountLayout activeTab="wishlist" title="My Account">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-xl font-bold text-[#111111]">Your Wishlist</h2>
        
        {/* Desktop View */}
        <WishlistTable />

        {/* Mobile View */}
        <MobileWishlistCard />
      </div>
    </AccountLayout>
  );
}
