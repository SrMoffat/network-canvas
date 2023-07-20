// import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

// import { prisma } from '@/lib';
// import { userSignUpSchema } from '@/lib';

export async function POST(request: Request): Promise<Response> {
  const reqBody = await request.json();
  // const isValid = await userSignUpSchema.validate(reqBody);
  // if (!isValid) {
  //   console.log("NOT Valid", isValid)

  //   return NextResponse.json({
  //     body: {
  //       status: 422
  //     }
  //   });
  // }
  // try {
  //   const reqBody = await request.json();
  //   const isValid = await userSignUpSchema.validate(reqBody);
  // if (!isValid) {
  //   console.log("NOT Valid", isValid)
  //   return NextResponse.json({ body: {
  //     status: 422
  //   } });
  //   } else {
  //     console.log("Valid", isValid)
  //   }
  // } catch (error) {
  //   console.log("error", error)
  //   throw error
  // }
  // const {
  //   email,
  //   username,
  //   password,
  // } = reqBody;
  // const hashedPassword = await bcrypt.hash(password, 12);
  // const body = {
  //   email,
  //   username,
  //   hashedPassword,
  // };

  // const user = await prisma.user.create({
  //   data: {
  //     email,
  //     username,
  //     password: hashedPassword,
  //     role:
  //   }
  // });
  // TODO: Insert into DB

  // OAUTH Register with Github??
  return NextResponse.json({ body: reqBody });
}