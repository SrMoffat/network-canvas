import { writeFile } from 'fs/promises';
import { omit } from 'lodash';
import { NextResponse, NextRequest } from 'next/server';

import { prisma } from '@/lib';
import { getReadableFileSize } from '@/lib/roles';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;
  if (!file) {
    return NextResponse.json({ success: false })
  }
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const path = `./${file.name}`
  const decoder = new TextDecoder('utf-8');
  const jsonString = decoder.decode(buffer);
  await writeFile(path, buffer)
  const newFile = await prisma.file.create({
    data: {
      name: file?.name,
      type: `${file?.size}`,
      content: jsonString,
      user: {
        connect: {
          id: 2
        }
      }
    }
  })
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
