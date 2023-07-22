import { NextResponse } from 'next/server';

import { prisma } from '@/lib';

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
export async function GET() {
  const files = await prisma.file.findMany({
    include: {
      user: {
        select: {
          id: true,
          username: true,
          email: true,
          avatar_url: true,
        },
      },
    },
  });
  return NextResponse.json({ data: files });
}