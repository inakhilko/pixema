import { useFormContext } from 'react-hook-form';
import { ICountry } from '../../redux/slices/Films';
import './Select.styles.css';

type SelectPropsType = {
  options: ICountry[],
  label: string,
  name:string
};
function Select({ options, label, name }: SelectPropsType) {
  const { register } = useFormContext();
  return (
    <label className="select__label" htmlFor="4">
      {label}
      <select className="select" id={`${label}-select`} {...register(name)}>
        <option value="" />
        {options.map(({ iso_3166_1, english_name }) => (
          <option className="option" key={iso_3166_1} value={iso_3166_1}>
            {english_name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
