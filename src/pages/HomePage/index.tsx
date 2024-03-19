import FilmsListPageTemplate from '../../templates/FilmsListPageTemplate';
import { FilmsPaths } from '../../types';

function HomePage() {
  return <FilmsListPageTemplate path={FilmsPaths.ALL} />;
}

export default HomePage;
