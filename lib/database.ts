import { prisma } from '@/lib';

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
    return defaultRole
  } catch (err) {
    throw err;
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
    return defaultLanguage
  } catch (err) {
    throw err;
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
    return defaultTheme
  } catch (err) {
    throw err;
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
  } catch (err) {
    throw err;
  }
};

// @ts-ignore
export const createNewUser = async (data) => {
  const defaults = await fetchDefaults()
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
    throw new Error('Something went wrong');
  }

};