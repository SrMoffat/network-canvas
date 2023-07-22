import { NextResponse, NextRequest } from 'next/server';
// import { writeFile } from 'fs/promises';

import { prisma } from '@/lib';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  console.log('open', {
    data,
    file,
  });


  // if (!file) {
  //   return NextResponse.json({ success: false })
  // }

  // const bytes = await file.arrayBuffer()
  // const buffer = Buffer.from(bytes)

  // // For this, we'll just write it to the filesystem in a new location
  // const path = `/tmp/${file.name}`
  // await writeFile(path, buffer)
  // console.log(`open ${path} to see the uploaded file`)

  return NextResponse.json({ success: true });
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
