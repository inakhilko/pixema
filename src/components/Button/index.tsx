import './Button.styles.css';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type SubmitButtonProps = {
  buttonText: string,
  additionalClass?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
function Button({ buttonText, additionalClass, ...buttonProps }: SubmitButtonProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <button className={`button ${additionalClass}`} type="button" {...buttonProps}>{buttonText}</button>;
}
Button.defaultProps = {
  additionalClass: '',
};

export default Button;
