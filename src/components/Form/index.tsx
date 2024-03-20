import { Link } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import Input from '../Input';
import './Form.style.css';
import Button from '../Button';
import { FormProps } from '../../types/formsData';

function Form<T extends FieldValues>({
  formInfo: {
    title,
    button,
    inputsData,
    linkInfo,
    defaultValues,
    getDynamicMessage,
    resolver,
  },
  onSubmit,
  staticMessage,
}: FormProps<T>) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues, resolver });
  const values = getValues();
  const message = staticMessage || getDynamicMessage?.(values, errors);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">{title}</h2>
      {message && <p className="form__message">{message}</p>}
      <div className="form__wrapper">
        {inputsData.map(({
          label, inputName, placeholder, inputHelper,
        }) => (
          <Input
            label={label}
            placeholder={placeholder}
            key={inputName}
            inputName={inputName}
            inputHelper={inputHelper}
            register={register}
            type={inputName === 'password' || inputName === 'passwordConfirmation' ? 'password' : ''}
            errorMessage={errors[inputName]?.message}
          />

        ))}
      </div>

      <Button type="submit" additionalClass="submit-btn">{button}</Button>
      {linkInfo && (
        <p className="form__helper">
          {linkInfo.helpingQuestion}
          {' '}
          <Link className="form__link" to={`../${linkInfo.path}`}>
            {linkInfo.link}
          </Link>
        </p>
      )}
    </form>
  );
}

Form.defaultProps = {
  staticMessage: '',
};

export default Form;
