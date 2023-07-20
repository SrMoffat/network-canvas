import { NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';

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
  return NextResponse.json({ body });
}