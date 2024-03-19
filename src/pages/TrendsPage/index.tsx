import FilmsListPageTemplate from '../../templates/FilmsListPageTemplate';
import { FilmsPaths } from '../../types';

function TrendsPage() {
  return <FilmsListPageTemplate path={FilmsPaths.TRENDING} />;
}

export default TrendsPage;
