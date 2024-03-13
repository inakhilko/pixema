import { useForm } from 'react-hook-form';
import Input from '../Input';
import { IPageData } from '../../constants/forms';
import './Form.style.css';
import SubmitButton from '../SubmitButton';
import { Link } from 'react-router-dom';

type FormProps<T extends object> = {
  formInfo: IPageData<T>;
  onSubmit: (data: T) => void
  staticMessage?: string,
};

function Form<T extends object>({
  formInfo: {
    title, button, inputsData, linkInfo, defaultValues, getDynamicMessage,
  },
  onSubmit,
  staticMessage,
}: FormProps<T>) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues });
  const values = getValues();
  const message = staticMessage || (getDynamicMessage?.(values, errors));
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">{title}</h2>
      {staticMessage && <p className="form__message">{message}</p>}
      <div className="form__wrapper">
        {inputsData.map(({
          label, inputName, placeholder, inputHelper,
        }) => (
          <Input
            label={label}
            placeholder={placeholder}
            key={inputName}
            inputHelper={inputHelper}
                // eslint-disable-next-line react/jsx-props-no-spreading
            {...register(inputName)}
          />

        ))}
        {/* {errors && ( */}
        {/*   <p>{errors.messa}</p> */}
        {/* )} */}
      </div>

      <SubmitButton buttonText={button} />
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

export default Form;
