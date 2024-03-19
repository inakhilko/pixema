import './Button.styles.css';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type SubmitButtonProps = {
  additionalClass?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
function Button({
  additionalClass, children, ...buttonProps
}: SubmitButtonProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <button className={`button ${additionalClass}`} type="button" {...buttonProps}>{children}</button>;
}
Button.defaultProps = {
  additionalClass: '',
};

export default Button;
