import './FilmCard.styles.css';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFilmsGenres from '../../redux/selectors/useFilmsGenres';
import { IGenre } from '../../redux/slices/Films';
import Rating from '../Rating';

type FilmCardPropsType = {
  title: string,
  genres: number[],
  poster: string,
  rating: number,
  filmId: number
};
const FilmCard = forwardRef<HTMLDivElement, FilmCardPropsType>(({
  title, genres, poster, rating, filmId,
}, ref) => {
  const allGenresList = useFilmsGenres();
  const navigate = useNavigate();
  const onTitleClick = () => navigate(`../film/:${filmId}`);
  return (
    <div className="film-card" ref={ref}>
      <img className="film-poster" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="Film poster" />
      <Rating rating={rating} />
      <p className="title" onClick={onTitleClick} role="presentation">{title}</p>
      <p className="genre">
        {genres && genres.map((id) => {
          const genresList = allGenresList.filter((element: IGenre) => element.id === id);
          return genresList.map(({ name }) => name);
        }).join(' • ')}
      </p>
    </div>
  );
});

export default FilmCard;
