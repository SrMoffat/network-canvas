import { Credentials } from '@/lib/types';

export async function loginUser(credentials: Credentials): Promise<any> {
  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials?.email,
        password: credentials?.password,
      }),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

