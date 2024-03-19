import FilmsListPageTemplate from '../../templates/FilmsListPageTemplate';
import { FILMS_PATHS } from '../../types';

function TrendsPage() {
  return <FilmsListPageTemplate path={FILMS_PATHS.TRENDING} />;
}

export default TrendsPage;
