import React from 'react';
import { CheckoutSteps } from '@/components/checkout/CheckoutSteps';
import { BillingSection, ShippingSection } from '@/components/checkout/FormSections';
import { PaymentSection } from '@/components/checkout/PaymentSection';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import Newsletter from '@/components/home/Newsletter';

export const metadata = {
  title: 'Checkout | VisioCreate',
  description: 'Complete your order with our secure checkout.',
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Header Section */}
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 py-8 md:py-12 flex flex-col items-center gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#111111]">Check Out</h1>
        <CheckoutSteps />
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Side: Forms */}
          <div className="lg:w-[65%] w-full flex flex-col">
            <div className="p-5 md:p-6 border border-[#d9d9d9] rounded-sm bg-white">
              <BillingSection />
              <ShippingSection />
              <PaymentSection />
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:w-[35%] w-full">
            <OrderSummary />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
