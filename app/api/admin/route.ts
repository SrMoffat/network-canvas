import { omit } from 'lodash';
import { NextResponse } from 'next/server';

import { prisma } from '@/lib';

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      language: true,
      role: true,
      theme: true,
    },
  });
  const data = users.map(entry => omit(entry, ['password', 'roleId', 'themeId', 'languageId']));
  return NextResponse.json({ data });
}
