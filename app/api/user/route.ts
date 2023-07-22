
import { NextResponse } from 'next/server';

import { prisma } from '@/lib';

export async function POST() {
  const data = {
    id: 2,
    name: 'Update details',
    type: 'Update details',
    content: '{some: "Update details"}',
    createdAt: 'Update details',
    updatedAt: 'Update details',
  };
  return NextResponse.json({ data });
}
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email') as string;
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      username: true,
      avatar_url: true,
      files: {
        select: {
          id: true,
          name: true,
          type: true,
          createdAt: true,
        },
      },
    },
  });
  return NextResponse.json({ data: user });
}
