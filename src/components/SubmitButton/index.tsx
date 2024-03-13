import './SubmitButton.styles.css';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type SubmitButtonProps = {
  buttonText: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
function SubmitButton({ buttonText }: SubmitButtonProps) {
  return <button className="button submit-btn" type="submit">{buttonText}</button>;
}

export default SubmitButton;
