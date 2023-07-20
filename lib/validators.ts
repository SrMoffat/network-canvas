import * as yup from 'yup';

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

const { name, email, password } = AUTH_VALIDATION_ERRORS;

const commonAuthFields = {
  username: yup.string()
    .required(name.required)
    .min(2, name.invalid),
  email: yup.string()
    .required(email.required)
    .email(email.invalid),
};
const userSignUpSchema = yup.object({
  ...commonAuthFields,
  password: yup.string()
    .required(password.required)
    .matches(
      PASSWORD_REGEX,
      password.invalid
    ),
});
export {
  userSignUpSchema,
};
