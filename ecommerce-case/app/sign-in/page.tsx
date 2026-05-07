import React from 'react';
import Image from 'next/image';
import { SignInForm } from '@/components/auth/SignInForm';

export const metadata = {
  title: 'Sign In | VisioCreate',
  description: 'Sign in to your VisioCreate account to manage your workspace.',
};

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-5 py-6 md:px-10 md:py-8">
      {/* Left Image Section */}
      <section className="w-full md:w-[48%] h-[340px] md:h-[720px] relative overflow-hidden rounded-[24px] group">
        <Image
          src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000&auto=format&fit=crop"
          alt="Modern warm living room"
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay Logo */}
        <div className="absolute top-0 left-0 p-[28px]">
          <span className="text-white text-xl md:text-2xl font-semibold tracking-tight">
            VisioCreate
          </span>
        </div>
      </section>

      {/* Right Form Section */}
      <section className="w-full md:flex-1 flex items-center justify-center py-10 md:py-0">
        <SignInForm />
      </section>
    </main>
  );
}
