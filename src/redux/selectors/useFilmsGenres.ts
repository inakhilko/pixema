import { useSelector } from 'react-redux';
import { RootState } from '../index';

const useFilmsGenres = () => useSelector((state: RootState) => state.filmsStore.genres);

export default useFilmsGenres;
