import { Credentials } from '@/lib/types';

const BASE_URL = 'http://localhost:3000';

export async function loginUser(credentials: Credentials): Promise<any> {
  try {
    const res = await fetch(`${BASE_URL}/api/login`, {
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
export async function signUpUser(credentials: Credentials): Promise<any> {
  try {
    const res = await fetch(`${BASE_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: credentials?.username,
        email: credentials?.email,
        password: credentials?.password,
      }),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
export async function fetchUsers(): Promise<any> {
  try {
    const res = await fetch(`${BASE_URL}/api/admin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
export async function fetchFiles(): Promise<any> {
  try {
    const res = await fetch(`${BASE_URL}/api/file`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
export async function fetchUserFiles(email: string): Promise<any> {
  try {
    const res = await fetch(`${BASE_URL}/api/user?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
export async function uploadFile(data: FormData): Promise<any> {
  try {
    const res = await fetch('/api/file', {
      method: 'POST',
      body: data,
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
