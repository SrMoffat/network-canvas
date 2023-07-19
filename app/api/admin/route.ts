console.log('GET /api/admin');

import { NextResponse } from 'next/server';

export async function GET() {
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