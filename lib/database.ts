import { prisma } from '@/lib';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const conectionObject = (value: string | number | undefined) => {
  return {
    connect: {
      id: value,
    },
  };
};
export const fetchDefaultRole = async () => {
  try {
    const defaultRole = await prisma.role.findFirst({
      where: {
        name: {
          contains: 'participant',
        },
      },
    });
    return defaultRole;
  } catch (err: any) {
    throw new PrismaClientKnownRequestError(err?.message, {
      code: 'P2002',
      clientVersion: '',
    });
  }
};
export const fetchDefaultLanguage = async () => {
  try {
    const defaultLanguage = await prisma.language.findFirst({
      where: {
        code: {
          contains: 'en-US',
        },
      },
    });
    return defaultLanguage;
  } catch (err: any) {
    throw new PrismaClientKnownRequestError(err?.message, {
      code: 'P2002',
      clientVersion: '',
    });
  }
};
export const fetchDefaultTheme = async () => {
  try {
    const defaultTheme = await prisma.theme.findFirst({
      where: {
        name: {
          contains: 'dark',
        },
      },
    });
    return defaultTheme;
  } catch (err: any) {
    throw new PrismaClientKnownRequestError(err?.message, {
      code: 'P2002',
      clientVersion: '',
    });
  }
};
export const fetchDefaults = async () => {
  try {
    const defaultTheme = await fetchDefaultTheme();
    const defaultLanguage = await fetchDefaultLanguage();
    const defaultRole = await fetchDefaultRole();
    return {
      theme: defaultTheme?.id,
      role: defaultRole?.id,
      language: defaultLanguage?.id,
    };
  } catch (err: any) {
    throw new PrismaClientKnownRequestError(err?.message, {
      code: 'P2002',
      clientVersion: '',
    });
  }
};

// @ts-ignore
export const createNewUser = async (data) => {
  const defaults = await fetchDefaults();
  const userExists = await prisma.user.findFirst({
    where: {
      email: data?.email,
    },
  });
  if (!userExists) {
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
  } else {
    throw new PrismaClientKnownRequestError('User already exists', {
      code: 'P2002',
      clientVersion: '',
    });
  }
};