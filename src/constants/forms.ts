import { yupResolver } from '@hookform/resolvers/yup';
import {
  newPassValidationSchema,
  resetPassValidationSchema,
  signInValidationSchema,
  signUpValidationSchema,
} from './validationSchemas';
import {
  IFormData, NewPasswordFormFieldsType,
  ResetPasswordFormFieldsType,
  SignInFormFieldsType,
  SignUpFormFieldsType,
} from '../types/formsData';

export const signInFormData: IFormData<SignInFormFieldsType> = {
  title: 'Sign In',
  inputsData: [
    {
      label: 'Email',
      inputName: 'email',
      placeholder: 'Your email',
    },
    {
      label: 'Password',
      inputName: 'password',
      placeholder: 'Your password',
      inputHelper: {
        helpingQuestion: 'Forgot password?',
        path: 'reset-password',
      },
    },
  ],
  button: 'Sign in',
  linkInfo: {
    helpingQuestion: 'Don’t have an account? ',
    link: 'Sign Up',
    path: 'signup',
  },
  defaultValues: {
    email: '',
    password: '',
  },
  validationSchema: signInValidationSchema,
  resolver: yupResolver(signInValidationSchema),
};

export const signUpFormData: IFormData<SignUpFormFieldsType> = {
  title: 'Sign Up',
  inputsData: [
    {
      label: 'Name',
      inputName: 'username',
      placeholder: 'Your name',
    },
    {
      label: 'Email',
      inputName: 'email',
      placeholder: 'Your email',
    },
    {
      label: 'Password',
      inputName: 'password',
      placeholder: 'Your password',
    },
    {
      label: 'Confirm password',
      inputName: 'passwordConfirmation',
      placeholder: 'Confirm password',
    },
  ],
  button: 'Sign up',
  linkInfo: {
    helpingQuestion: 'Already have an account? ',
    link: 'Sign In',
    path: 'signin',
  },
  defaultValues: {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  },
  validationSchema: signUpValidationSchema,
  resolver: yupResolver(signUpValidationSchema),
};

export const resetPasswordFormData: IFormData<ResetPasswordFormFieldsType> = {
  title: 'Reset password',
  inputsData: [
    {
      label: 'Email',
      inputName: 'email',
      placeholder: 'Your email',
    },
  ],
  button: 'Reset',
  defaultValues: {
    email: '',
  },
  getDynamicMessage: (data, errors) => (!errors.email ? `You will receive an email ${data.email} with a link to reset your password!` : ''),
  validationSchema: resetPassValidationSchema,
  resolver: yupResolver(resetPassValidationSchema),
};

export const newPasswordFormData: IFormData<NewPasswordFormFieldsType> = {
  title: 'New password',
  inputsData: [
    {
      label: 'Password',
      inputName: 'password',
      placeholder: 'Your password',
    },
    {
      label: 'Confirm password',
      inputName: 'passwordConfirmation',
      placeholder: 'Confirm your password',
    },
  ],
  button: 'Set password',
  defaultValues: {
    password: '',
    passwordConfirmation: '',
  },
  validationSchema: newPassValidationSchema,
  resolver: yupResolver(newPassValidationSchema),
};
