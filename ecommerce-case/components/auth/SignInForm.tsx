'use client';

import React from 'react';
import Link from 'next/link';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const SignInForm = () => {
  return (
    <div className="w-full max-w-[420px] flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#111827] tracking-tight">
          Sign In
        </h1>
        <p className="text-gray-500 text-base">
          Don't have an account yet?{' '}
          <Link 
            href="/sign-up" 
            className="text-[#10B981] font-medium hover:underline transition-all"
          >
            Sign Up
          </Link>
        </p>
      </div>

      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <Input 
          type="text" 
          placeholder="Username or email address" 
          name="identifier"
          required
        />
        <Input 
          isPassword 
          placeholder="Password" 
          name="password"
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-gray-300 text-[#2F80ED] focus:ring-[#2F80ED] transition-all cursor-pointer"
            />
            <span className="text-gray-600 group-hover:text-black transition-colors">
              Remember me
            </span>
          </label>
          <Link 
            href="/forgot-password" 
            className="font-bold text-black hover:opacity-70 transition-opacity"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="mt-2">
          Sign In
        </Button>
      </form>
    </div>
  );
};
