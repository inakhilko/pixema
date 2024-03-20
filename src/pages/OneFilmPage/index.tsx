import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { number } from 'yup';
import Navigation from '../../components/Navigation';
import { AppDispatch, RootState } from '../../redux';
import getCurrentFilm from '../../redux/thunks/films/getCurrentFilm';
import ButtonBlock from '../../components/ButtonBlock';
import { ICurrentFilm } from '../../redux/slices/Films';
import Sticker from '../../components/Sticker';
import './OneFilmPage.styles.css';
import RecommendationsSlider from '../../components/RecommendationsSlider';

const shortFilmInfoFields = [
  'Year', 'Released', 'BoxOffice', 'Country', 'Production', 'Actors', 'Director', 'Writers',
];

const titles = {
  recommendations: 'Recommendations',
};

const oneFilmButtons = [
  {
    content: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.77 20.7843L12.48 17.4943C12.0722 17.1843 11.5078 17.1843 11.1 17.4943L6.77 20.7843C6.45424 21.0381 6.02377 21.0959 5.65228 20.9343C5.28078 20.7727 5.02957 20.4184 5 20.0143V5.95431C5.03878 5.12998 5.40465 4.35513 6.01656 3.80141C6.62847 3.24769 7.4359 2.96081 8.26 3.00431H15.26C16.0891 2.96643 16.8987 3.26256 17.5077 3.82643C18.1166 4.39029 18.4741 5.17479 18.5 6.00431V20.0143C18.4611 20.4038 18.2163 20.7426 17.8586 20.9017C17.501 21.0609 17.0855 21.0161 16.77 20.7843Z"
          fill="white"
        />
      </svg>
    ),
    onClick: () => console.log('clicked'),
  },
  {
    content: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="7.54545"
          cy="11.6363"
          r="2.54545"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="16.4546"
          cy="6.54545"
          r="2.54545"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="16.4546"
          cy="16.7273"
          r="2.54545"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M13.9998 16L10.0908 13.5455M10.0908 10.5L13.9998 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    onClick: () => console.log('clicked'),
  },
];

function OneFilmPage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const {
    title,
    poster_path,
    vote_average,
    genres,
    runtime,
    popularity,
    overview,
    release_date,
    revenue,
    production_countries,
    production_companies,
  } = useSelector<RootState, ICurrentFilm>(
    (state) => state.filmsStore.currentFilm,
  );

  const releaseYear = release_date?.split('-')[0];
  const releaseDayAndMonth = new Date(release_date).toDateString().split(' ').slice(1, 3);
  const newReleasedDate = releaseDayAndMonth.reverse().join(' ') + releaseYear;
  const boxOffice = `$${revenue}`;
  const countries = production_countries?.map(({ name }) => name).join(', ');
  const companies = production_companies?.map(({ name }) => name).join(', ');

  const formFilmsFieldsData = [
    releaseYear,
    newReleasedDate,
    boxOffice,
    countries,
    companies,
  ];

  useEffect(() => {
    if (id) {
      dispatch(getCurrentFilm(id));
    }
  }, []);
  return (
    <div className="wrapper">
      <div className="container container__one-film">
        <Navigation />
        <div className="poster-block">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="poster"
          />
          <ButtonBlock buttonBlockData={oneFilmButtons} />
        </div>
        <div className="info-block">
          <p className="genres">
            {genres && genres.map(({ name }) => name).join(' • ')}
          </p>
          <h2 className="film__title">{title}</h2>
          <div className="stickers__wrapper">
            <Sticker rating={vote_average} />
            <Sticker imdbRating={popularity} />
            <Sticker runtime={runtime} />
          </div>
          <p className="film__description">{overview}</p>
          <div className="short-info">
            {shortFilmInfoFields.map((field) => (
              <p className="short-info__field" key={field}>
                {field}
              </p>
            ))}
            {formFilmsFieldsData.map((content, index) => (
              <p className="short-info__content" key={number}>
                {content}
                {' '}
              </p>
            ))}
            {/* <p className="short-info__content">{release_date?.split('-')[0]}</p> */}

            {/* <p className="short-info__content">2015</p> */}
            {/* <p className="short-info__content">2015</p> */}
            {/* <p className="short-info__content">2015</p> */}
            {/* <p className="short-info__content">2015</p> */}
            {/* <p className="short-info__content">2015</p> */}
            {/* <p className="short-info__content">2015</p> */}
            {/* <p className="short-info__content">2015</p> */}
          </div>
          <div className="recommendations">
            <h3 className="recommendations__title">{titles.recommendations}</h3>
            <RecommendationsSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneFilmPage;
