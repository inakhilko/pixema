import { IGenre } from '../redux/slices/Films';

const combineGenres = (genres: number[], allGenresList: IGenre[]) => genres.map((id) => {
  const genresList = allGenresList.filter((element: IGenre) => element.id === id);
  return genresList.map(({ name }) => name);
}).join(' • ');

export default combineGenres;
