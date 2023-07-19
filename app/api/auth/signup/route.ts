console.log('GET /api/auth/signup');

import { NextResponse } from 'next/server';

export async function POST() {
  const data = {
    id: 2,
    name: 'Test',
    type: '.json',
    content: '{some: "data"}',
    createdAt: 'hehehe',
    updatedAt: 'Admin',

  };
  return NextResponse.json({ data });
}