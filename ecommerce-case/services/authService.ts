import { apiClient } from '@/lib/api-client';

export const authService = {
  login: (username: string, password: string) => 
    apiClient<{ token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),
    
  getCurrentUser: (id: number) => 
    apiClient<any>(`/users/${id}`),
};
