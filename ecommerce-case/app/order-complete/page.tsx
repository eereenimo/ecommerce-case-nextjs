import { CheckoutSteps } from '@/components/checkout/CheckoutSteps';
import { OrderSuccessCard } from '@/components/order/OrderSuccessCard';

export const metadata = {
  title: 'Order Complete | VisioCreate',
  description: 'Thank you for your purchase! Your order has been successfully received.',
};

export default function OrderCompletePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Header Section */}
      <section className="max-w-4xl mx-auto px-5 md:px-10 py-10 md:py-16 flex flex-col items-center gap-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#111111]">Complete!</h1>
        <CheckoutSteps currentStep="complete" />
      </section>

      {/* Main Success Card Area */}
      <section className="max-w-4xl mx-auto px-5 md:px-10 pb-24 flex flex-col items-center">
        <OrderSuccessCard />
      </section>
    </main>
  );
}
