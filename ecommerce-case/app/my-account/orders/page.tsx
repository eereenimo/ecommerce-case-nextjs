import React from 'react';
import { AccountLayout } from '@/components/account/AccountLayout';
import { OrdersTable } from '@/components/account/OrdersTable';
import { MobileOrderCard } from '@/components/account/MobileOrderCard';

export const metadata = {
  title: 'Order History | VisioCreate',
  description: 'View and track your past orders.',
};

export default function OrdersPage() {
  return (
    <AccountLayout activeTab="orders" title="My Account">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-xl font-bold text-[#111111]">Orders History</h2>
        
        {/* Desktop View */}
        <OrdersTable />

        {/* Mobile View */}
        <MobileOrderCard />
      </div>
    </AccountLayout>
  );
}
