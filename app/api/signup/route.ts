import * as bcrypt from 'bcrypt';

import { omit } from 'lodash';
import { ValidationError } from 'yup';
import { NextResponse } from 'next/server';

import { userSignUpSchema } from '@/lib';
import { createNewUser, fetchDefaults } from '@/lib';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

interface RequestBody {
    username: string;
    email: string;
    password: string
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();
    await userSignUpSchema.validate(body);
    const {
      email,
      username,
      password,
    } = body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const data = {
      email,
      username,
      password: hashedPassword,
    };
    const defaults = await fetchDefaults();
    const user = await createNewUser(data, defaults);
    return NextResponse.json({ body: omit(user, 'password') });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    if (error instanceof PrismaClientKnownRequestError) {
      // https://www.prisma.io/docs/reference/api-reference/error-reference
      const userExistsCode = 'P2002';
      const dupError = error.code === userExistsCode;
      if (dupError) {
        return NextResponse.json({ errors: ['User already exists!'] }, { status: 400 });
      }
    }
    return NextResponse.json({ errors: ['Something went wrong'] }, { status: 500 });

  }
}