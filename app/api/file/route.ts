import { omit } from 'lodash';
import { writeFile, unlink } from 'fs/promises';
import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/config"

import { prisma, uploadFile } from '@/lib';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const session = await getServerSession(authOptions)
  const file: File | null = data.get('file') as unknown as File;
  if (!file) {
    // TODO: Return proper errors
    return NextResponse.json({ success: false });
  }
  const path = `./${file.name}`;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await writeFile(path, buffer);
  const uploadResult = await uploadFile(path, file.name);
  if (uploadResult) {
    unlink(path);
  }
  const newFile = await prisma.file.create({
    data: {
      name: file?.name,
      type: `${file?.size}`,
      user: {
        // Get user uploading file
        connect: {
          email: session?.user?.email as string
        },
      },
      url: uploadResult as string,
    },
  });
  return NextResponse.json({ data: omit(newFile, 'content') });
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
