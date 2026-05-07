'use client';

import React from 'react';
import { AccountSidebar } from './AccountSidebar';
import { AccountMobileCard } from './AccountMobileCard';

interface AccountLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  title: string;
}

export const AccountLayout = ({ children, activeTab, title }: AccountLayoutProps) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Header Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-16 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">{title}</h1>
      </section>

      {/* Main Dashboard Layout */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Sidebar / Mobile Card */}
          <div className="w-full lg:w-auto">
            <AccountSidebar activeTab={activeTab} />
            <AccountMobileCard activeTab={activeTab} />
          </div>

          {/* Right Column: Content */}
          <div className="flex-1 w-full">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};
