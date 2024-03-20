import FilmsListPageTemplate from '../../templates/FilmsListPageTemplate';
import { FilmsPaths } from '../../types';

function FilteredPage() {
  return <FilmsListPageTemplate path={FilmsPaths.FILTER_AND_SORT} />;
}

export default FilteredPage;
