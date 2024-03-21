import FilmsListPageTemplate from '../../templates/FilmsListPageTemplate';
import { FilmsPaths } from '../../types';

function FavoritesPage() {
  return <FilmsListPageTemplate path={FilmsPaths.ALL} />;
}

export default FavoritesPage;
