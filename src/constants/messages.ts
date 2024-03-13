import insertEmailIntoMessage from '../helpers/insertEmailIntoMessage';

export interface IMessage {
  title:string;
  message:string;
  button:string
}

export const registrationConfirmationMessage: IMessage = {
  title: 'Registration Confirmation',
  message: insertEmailIntoMessage('Please activate your account with the activation link in the email', 'example@gmail.com', '. Please, check your email'),
  button: 'Ok',
};

export const successSignUpMessage: IMessage = {
  title: 'Success',
  message: 'Email confirmed. Your registration is now completed',
  button: 'Go to sign in',
};
