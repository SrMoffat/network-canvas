const { PrismaClient } = require('@prisma/client');

const SEED_LANGUAGES = [
  {
    name: 'English',
    code: 'en-US',
  },
  {
    name: 'English',
    code: 'en-GB',
  },
  {
    name: 'Spanish',
    code: 'es-ES',
  },
  {
    name: 'Portuguese',
    code: 'pt-BR',
  },
  {
    name: 'French',
    code: 'fr-CA',
  },
  {
    name: 'Chinese',
    code: 'zh-TW',
  },
];
const SEED_ROLES = [
  {
    name: 'participant',
    description: 'Research participant',
  },
  {
    name: 'user',
    description: 'Researcher owning project',
  },
  {
    name: 'admin',
    description: 'Admin with priviledges',
  },
];
const SEED_THEMES = ['dark', 'light'];

const prisma = new PrismaClient();

const seedThemes = async () => {
  for (const theme of SEED_THEMES) {
    await prisma.theme.create({
      data: {
        name: theme,
      },
    });
  }
};
const seedLanguages = async () => {
  for (const language of SEED_LANGUAGES) {
    await prisma.language.create({
      data: {
        name: language?.name,
        code: language?.code,
      },
    });
  }
};
const seedRoles = async () => {
  for (const role of SEED_ROLES) {
    await prisma.role.create({
      data: {
        name: role?.name,
        description: role?.description,
      },
    });
  }
};
async function seedDatabase() {
  try {
    await seedThemes();
    await seedLanguages();
    await seedRoles();
  } catch (error) {
    // console.error('Error seeding DB==>', error);
  }
};
seedDatabase();

