import * as yup from 'yup';

export const signInValidationSchema = yup
  .object().shape({
    email: yup.string().required('This field is required').email('Email must be a valid email'),
    password: yup.string().required('This field is required').min(8, 'Password should contain at least 8 characters'),
  }).required();
export const signUpValidationSchema = yup
  .object().shape({
    username: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').email('Email must be a valid email'),
    password: yup.string().required('This field is required').min(8, 'Password should contain at least 8 characters'),
    passwordConfirmation: yup.string().required('This field is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  }).required();
export const resetPassValidationSchema = yup
  .object().shape({
    email: yup.string().required('This field is required').email('Email must be a valid email'),
  }).required();

export const newPassValidationSchema = yup
  .object().shape({
    password: yup.string().required('This field is required').min(8, 'Password should contain at least 8 characters'),
    passwordConfirmation: yup.string().required('This field is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  }).required();
