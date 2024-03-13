import { DefaultValues, FieldErrors, Path } from 'react-hook-form';

export interface IPageData<T extends object> {
  title: string,
  button: string,
  inputsData: {
    label: string,
    inputName: Path<T>,
    placeholder: string
    inputHelper?: {
      helpingQuestion?: string,
      path?: string
    }
  }[],
  linkInfo?: {
    helpingQuestion?: string,
    link?: string,
    path?: string
  },
  defaultValues: DefaultValues<T>,
  getDynamicMessage?: (data: T, errors: FieldErrors<T>) => string
}
type SignInFormDataType = {
  email: string,
  password: string
};
export const signInPageData: IPageData<SignInFormDataType> = {
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
  message: 'Your password has been changed !',
  linkInfo: {
    helpingQuestion: 'Don’t have an account? ',
    link: 'Sign Up',
    path: 'signup',
  },
  defaultValues: {
    email: '',
    password: '',
  },
};

export const signUpPageData: IPageData = {
  title: 'Sign Up',
  inputsData: [
    {
      label: 'Name',
      inputName: 'name',
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
};

type ResetPasswordFormType = {
  email: string
};
export const ResetPassPageData: IPageData<ResetPasswordFormType> = {
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
};

export const newPassPageData: IPageData = {
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
};
