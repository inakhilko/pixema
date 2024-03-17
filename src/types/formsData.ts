import {
  DefaultValues, FieldErrors, Path, Resolver,
} from 'react-hook-form';
import { ObjectSchema } from 'yup';

export interface IFormData<T extends object> {
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
  getDynamicMessage?: (data: T, errors: FieldErrors<T>) => string,
  resolver: Resolver<T>,
  validationSchema: ObjectSchema<T>
}

export type FormProps<T extends object> = {
  formInfo: IFormData<T>;
  onSubmit: (data: T) => void
  staticMessage?: string,
};
export type SignInFormFieldsType = {
  email: string,
  password: string
};
export type SignUpFormFieldsType = {
  username: string,
  email: string,
  password: string,
  passwordConfirmation: string
};

export type ResetPasswordFormFieldsType = {
  email: string
};

export type NewPasswordFormFieldsType = {
  password: string,
  passwordConfirmation: string
};
