import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../components/Navigation';
import { AppDispatch, RootState } from '../../redux';
import getCurrentFilm from '../../redux/thunks/films/getCurrentFilm';
import ButtonBlock from '../../components/ButtonBlock';
import { ICurrentFilm } from '../../redux/slices/Films';
import Sticker from '../../components/Sticker';
import './OneFilmPage.styles.css';
import RecommendationsSlider from '../../components/RecommendationsSlider';
import { oneFilmButtons } from '../../constants/buttonsData';
import { shortFilmInfoFields, titles } from '../../constants/titlesAndFields';

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
          {/* <ButtonBlock buttonBlockData={oneFilmButtons} /> */}
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
              <p className="short-info__content" key={index}>
                {content}
                {' '}
              </p>
            ))}
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
