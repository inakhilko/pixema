import FilmsListPageTemplate from '../../templates/FilmsListPageTemplate';
import { FILMS_PATHS } from '../../types';

function HomePage() {
  return <FilmsListPageTemplate path={FILMS_PATHS.ALL} />;
}

export default HomePage;
