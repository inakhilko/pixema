import './FilmCard.styles.css';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sticker from '../Sticker';
import combineGenres from '../../helpers/combineGenres';
import useFilmsGenres from '../../redux/selectors/useFilmsGenres';

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
  const navigate = useNavigate();
  const allGenresList = useFilmsGenres();
  const onTitleClick = () => navigate(`../film/${filmId}`);
  return (
    <div className="film-card" ref={ref}>
      <img
        className="film-poster"
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt="Film poster"
      />
      <Sticker rating={rating} />
      <p className="title" onClick={onTitleClick} role="presentation">{title}</p>
      <p className="genre">
        {genres && combineGenres(genres, allGenresList)}
      </p>

    </div>
  );
});

export default FilmCard;
