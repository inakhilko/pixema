import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnClickOutside } from 'usehooks-ts';

import FilterAutocomplete from '../Autocomplete';
import { AppDispatch, RootState } from '../../redux';
import './Filters.styles.css';
import { closeFilters, initialFiltersState, setFiltrationData } from '../../redux/slices/Filters';
import Button from '../Button';
import Select from '../Select';
import { filterLabels, placeholders } from '../../constants/titlesAndFields';
import getCountries from '../../redux/thunks/films/getCountries';
import SortButtons from '../SortButtons';
import { filterButtons, filtersButtonBlockData } from '../../constants/buttonsData';
import { FiltersFormType } from '../../api/films';

function Filters() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);

  const { filmsStore: { genres, countries }, filtersStore: { isOpen } } = useSelector((state: RootState) => state);

  const formMethods = useForm({ defaultValues: initialFiltersState.filtrationData });
  const {
    register,
    handleSubmit,
  } = formMethods;

  const onSubmit = (data: FiltersFormType) => {
    dispatch(setFiltrationData(data));
    dispatch(closeFilters());
    navigate('filters');
  };

  const onClosure = () => {
    dispatch(closeFilters());
  };

  useOnClickOutside(ref, onClosure);

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <div
      className={clsx('filters__wrapper', isOpen && 'filters__wrapper--open')}
    >
      <div className="filters" ref={ref}>
        <div className="filters__top-block">
          <h3 className="filters__title">Filters</h3>
          <button className="filters__close" type="button" onClick={onClosure}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6569 16.2426L13.4142 12L17.6569 7.75735C18.0472 7.36702 18.0472 6.73346 17.6569 6.34313C17.2665 5.95281 16.633 5.95281 16.2426 6.34313L12 10.5858L7.75736 6.34313C7.36704 5.95281 6.73347 5.95281 6.34315 6.34313C5.95282 6.73346 5.95282 7.36702 6.34315 7.75735L10.5858 12L6.34315 16.2426C5.95212 16.6337 5.95282 17.2665 6.34315 17.6568C6.73347 18.0472 7.36633 18.0479 7.75736 17.6568L12 13.4142L16.2426 17.6568C16.6337 18.0479 17.2665 18.0472 17.6569 17.6568C18.0472 17.2665 18.0479 16.6337 17.6569 16.2426Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <FormProvider {...formMethods}>
          <form className="filtration__form" onSubmit={handleSubmit(onSubmit)}>
            <SortButtons
              buttonsInfo={filtersButtonBlockData}
              title={filterLabels.sort}
              name="sortParameter"
            />
            <label className="filters__label" htmlFor="1">
              {filterLabels.movieName}
              <input
                className="filters__input"
                id="1"
                placeholder={placeholders.movieName}
                {...register('movieName')}
              />
            </label>
            <FilterAutocomplete options={genres} name="genre" />
            <label className="filters__label" htmlFor="2">
              {filterLabels.year}
              <div className="filters__input-block">
                <input
                  className="filters__input"
                  id="2"
                  placeholder={placeholders.from}
                  {...register('yearsFrom')}
                />
                <input
                  className="filters__input"
                  placeholder={placeholders.to}
                  {...register('yearsTo')}
                />
              </div>
            </label>
            <label className="filters__label" htmlFor="3">
              {filterLabels.rating}
              <div className="filters__input-block">
                <input
                  className="filters__input"
                  id="3"
                  placeholder={placeholders.from}
                  {...register('ratingFrom')}
                />
                <input
                  className="filters__input"
                  placeholder={placeholders.to}
                  {...register('ratingTo')}
                />
              </div>
            </label>
            <Select label={filterLabels.country} options={countries} name="country" />
            <div className="filters__buttons">
              {filterButtons.map(({
                content,
                onClick,
                additionalClass,
                type,
                id,
              }) => (
                <Button
                  additionalClass={`${clsx('filters-button', additionalClass && additionalClass)}`}
                  type={type}
                  key={id}
                  onClick={onClick}
                >
                  {content}
                </Button>
              ))}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Filters;
