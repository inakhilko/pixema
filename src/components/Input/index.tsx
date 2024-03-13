import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import './Input.styles.css';
import { Link } from 'react-router-dom';

type InputPropsType = {
  label: string;
  inputHelper?: {
    helpingQuestion?: string,
    path?: string
  }
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input({
  label, inputHelper, id, className = '', ...inputProps
}: InputPropsType) {
  return (
    <label className="input__label" htmlFor={id}>
      {label}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input className={`input ${className}`} id={id} {...inputProps} />
      {inputHelper && (
      <Link className="input__helper" to={`../${inputHelper.path}`}>
        {inputHelper.helpingQuestion}
      </Link>
      )}
    </label>

  );
}

export default Input;
