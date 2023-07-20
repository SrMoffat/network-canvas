import * as bcrypt from 'bcrypt';
import { omit } from 'lodash';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib'

interface RequestBody {
    name: string;
    email: string;
    password: string
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();
    const userExists = await prisma.user.findFirst({
        where: {
            email: body?.email
        }
    })
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