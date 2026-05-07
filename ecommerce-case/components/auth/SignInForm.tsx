'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAuthStore } from '@/store/useAuthStore';
import { authService } from '@/services/authService';

export const SignInForm = () => {
  const router = useRouter();
  const { login, setLoading, setError, loading, error } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('identifier') as string;
    const password = formData.get('password') as string;

    try {
      setLoading(true);
      const { token } = await authService.login(username, password);
      
      // Fake Store API doesn't return user info on login, so we fetch it separately
      // Using ID 1 for the demo user based on the requested credentials
      const userData = await authService.getCurrentUser(1);
      
      login(userData, token);
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Invalid username or password');
    }
  };

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

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
            {error}
          </div>
        )}
        
        <Input 
          type="text" 
          placeholder="Username (e.g. mor_2314)" 
          name="identifier"
          required
          defaultValue="mor_2314"
        />
        <Input 
          isPassword 
          placeholder="Password (e.g. 83r5^_)" 
          name="password"
          required
          defaultValue="83r5^_"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-gray-300 text-[#10B981] focus:ring-[#10B981] transition-all cursor-pointer"
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

        <Button type="submit" className="mt-2" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
};
