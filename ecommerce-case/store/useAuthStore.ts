import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: number;
  username: string;
  email: string;
  name: {
    firstname: string;
    lastname: string;
  };
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      
      login: (user: User, token: string) => {
        // Sync with cookie for middleware
        document.cookie = `auth-token=${token}; path=/; max-age=86400; SameSite=Lax`;
        set({ user, token, isAuthenticated: true, loading: false, error: null });
      },

      logout: () => {
        // Clear cookie
        document.cookie = 'auth-token=; path=/; max-age=0; SameSite=Lax';
        set({ user: null, token: null, isAuthenticated: false, loading: false, error: null });
      },

      setLoading: (loading: boolean) => set({ loading }),
      setError: (error: string | null) => set({ error, loading: false }),
    }),
    {
      name: 'visio-auth-storage',
    }
  )
);
