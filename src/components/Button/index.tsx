import './Button.styles.css';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type SubmitButtonProps = {
  buttonText: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
function Button({ buttonText }: SubmitButtonProps) {
  return <button className="button black-btn" type="button">{buttonText}</button>;
}

export default Button;
