import { NextResponse } from 'next/server';

import { prisma } from '@/lib';

export async function GET() {
  const file = await prisma.file.findMany({
    take: 1,
    orderBy: {
      id: 'desc',
    },
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
  return NextResponse.json({ data: file });
}
