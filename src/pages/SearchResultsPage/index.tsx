import FilmsListPageTemplate from '../../templates/FilmsListPageTemplate';
import { FilmsPaths } from '../../types';

function SearchResultsPage() {
  return <FilmsListPageTemplate path={FilmsPaths.SEARCH} />;
}

export default SearchResultsPage;
