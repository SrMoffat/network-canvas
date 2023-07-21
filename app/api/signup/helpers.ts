import { NextResponse } from 'next/server';
import { prisma } from '@/lib';

export const conectionObject = (value: string | number | undefined) => {
  return {
    connect: {
      id: value,
    },
  };
};

export const fetchDefaults = async () => {
  try {
    const defaultTheme = await prisma.theme.findFirst({
      where: {
        name: {
          contains: 'dark',
        },
      },
    });
    const defaultLanguage = await prisma.language.findFirst({
      where: {
        code: {
          contains: 'en-US',
        },
      },
    });
    const defaultRole = await prisma.role.findFirst({
      where: {
        name: {
          contains: 'participant',
        },
      },
    });
    return {
      theme: defaultTheme?.id,
      role: defaultRole?.id,
      language: defaultLanguage?.id,
    };
  } catch (err) {
    return NextResponse.json({ errors: ['Something went wrong'] }, { status: 500 });
  }
};

// @ts-ignore
export const createNewUser = async (data, defaults) => {
  const user = await prisma.user.create({
    data: {
      ...data,
      role: {
        connect: {
          // @ts-ignore
          id: defaults.role,
        },
      },
      language: {
        connect: {
          // @ts-ignore
          id: defaults.language,
        },
      },
      theme: {
        connect: {
          // @ts-ignore
          id: defaults.theme,
        },
      },
    },
  });
  return user;
};
