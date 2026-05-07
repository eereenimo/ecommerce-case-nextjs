import React from 'react';
import { AccountLayout } from '@/components/account/AccountLayout';
import { AddressCard } from '@/components/account/AddressCard';

export const metadata = {
  title: 'Address Book | VisioCreate',
  description: 'Manage your billing and shipping addresses.',
};

export default function AddressPage() {
  return (
    <AccountLayout activeTab="address" title="My Account">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-xl font-bold text-[#111111]">Address</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AddressCard 
            type="Billing Address"
            name="Sofia Harree"
            phone="(+1) 234 567 890"
            address="3456 North Street, Suite 100, New York, NY 10001, United States"
          />
          <AddressCard 
            type="Shipping Address"
            name="Sofia Harree"
            phone="(+1) 234 567 890"
            address="3456 North Street, Suite 100, New York, NY 10001, United States"
          />
        </div>
      </div>
    </AccountLayout>
  );
}
