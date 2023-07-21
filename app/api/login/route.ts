import * as bcrypt from 'bcrypt';

import { omit } from 'lodash';
import { NextResponse } from 'next/server';

import { prisma } from '@/lib';
import { RequestBody } from '@/lib/types';

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const userExists = await prisma.user.findFirst({
    where: {
      email: body?.email,
    },
    include: {
      language: true,
      role: true,
      theme: true,
    },
  });
  if (userExists) {
    const valid = await bcrypt.compare(
      body.password,
      userExists.password,
    );
    if (valid) {
      return NextResponse.json({ data: omit(userExists, 'password') });
    };
  }
  return NextResponse.json({ data: null });
}
