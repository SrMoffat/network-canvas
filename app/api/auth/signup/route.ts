import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

// import prisma from "@/app/lib/prismadb";


export async function POST(request: Request): Promise<Response> {
  const reqBody = await request.json();
  const {
    email,
    name,
    password,
  } = reqBody;
  const hashedPassword = await bcrypt.hash(password, 12);
  const body = {
    email,
    name,
    hashedPassword,
  };
  // TODO: Insert into DB

  // OAUTH Register with Github??
  return NextResponse.json({ body });
}