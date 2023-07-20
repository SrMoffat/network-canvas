import { prisma, SEED_THEMES, SEED_LANGUAGES, SEED_ROLES } from '@/lib';

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

