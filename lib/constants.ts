export const REQUIRED_FIELD_MESSAGE = (field: string) => `${field} is a required field`;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const AUTH_VALIDATION_ERRORS = {
  name: {
    required: REQUIRED_FIELD_MESSAGE('Name'),
    invalid: 'Name must be more than 2 characters.',
  },
  email: {
    required: REQUIRED_FIELD_MESSAGE('Email'),
    invalid: 'Invalid email provided.',
  },
  password: {
    required: REQUIRED_FIELD_MESSAGE('Password'),
    invalid: 'Password have 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character',
  },
};
export const SEED_USERS = [
  {
    name: 'Test User 1',
    email: 'testuser1@seed.com',
    password: '12345678Qq!',
  },
  {
    name: 'Test User 2',
    email: 'testuser2@seed.com',
    password: '12345678Qq!',
  },
  {
    name: 'Test User 3',
    email: 'testuser3@seed.com',
    password: '12345678Qq!',
  },
];
export const SEED_LANGUAGES = [
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
export const SEED_ROLES = [
  {
    name: 'participant',
    description: 'Research pariticpant',
  },
  {
    name: 'user',
    description: 'Researcher',
  },
  {
    name: 'admin',
    description: 'User with all priviledges',
  },
];
export const SEED_THEMES = ['dark', 'light'];