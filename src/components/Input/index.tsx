import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import './Input.styles.css';
import { Link } from 'react-router-dom';
import { Path, UseFormRegister } from 'react-hook-form';

export type InputPropsType<T extends object> = {
  label: string;
  inputHelper?: {
    helpingQuestion?: string,
    path?: string
  };
  inputName: Path<T>,
  register: UseFormRegister<T>,
  errorMessage?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input<T extends object>({
  label, inputHelper, id, className = '', register, inputName, errorMessage, ...inputProps
}: InputPropsType<T>) {
  return (
    <label className="input__label" htmlFor={id}>
      {label}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input className={`input ${className} ${errorMessage ? 'error' : ''}`} id={id} {...register(inputName)} {...inputProps} />
      {errorMessage && (<p className="input__error-text">{errorMessage}</p>)}
      {inputHelper && (
      <Link className="input__helper" to={`../${inputHelper.path}`}>
        {inputHelper.helpingQuestion}
      </Link>
      )}
    </label>

  );
}
Input.defaultProps = {
  inputHelper: {
    helpingQuestion: '',
    path: '',
  },
  errorMessage: '',
};
export default Input;
