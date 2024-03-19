import './FilmsListPageTemplate.styles.css';
import {
  createRef, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import Navigation from '../../components/Navigation';
import getFilms from '../../redux/thunks/films/getFilms';
import FilmCard from '../../components/FilmCard';
import getGenres from '../../redux/thunks/films/getGenres';
import getMoreFilms from '../../redux/thunks/films/getMoreFilms';

function FilmsListPageTemplate({ path }: { path: string }) {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch<AppDispatch>();
  const lastItem = createRef<HTMLDivElement>();
  const observerLoader = useRef<IntersectionObserver | null>(null);
  const actionInSight = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && page <= 500) {
      setPage((prevState) => prevState + 1);
      dispatch(
        getMoreFilms({
          path,
          page,
        }),
      );
    }
  };

  const filmsList = useSelector((state: RootState) => state.filmsStore.films);

  useEffect(() => {
    dispatch(getFilms(path));
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }
    observerLoader.current = new IntersectionObserver(actionInSight);

    setTimeout(() => {
      // eslint-disable-next-line max-len
      if (observerLoader.current && lastItem.current) observerLoader.current.observe(lastItem.current);
    }, 500);
  }, [lastItem]);

  return (
    <div className="wrapper">
      <div className="container container__all-films">
        <Navigation />
        <div className="all-films">
          {filmsList.length !== 0
            && filmsList.map(
              ({
                title, id, genre_ids, poster_path, vote_average,
              }, index) => {
                if (index + 1 === filmsList.length) {
                  return (
                    <FilmCard
                      filmId={id}
                      title={title}
                      genres={genre_ids}
                      poster={poster_path}
                      rating={vote_average}
                      key={id}
                      ref={lastItem}
                    />
                  );
                }
                return (
                  <FilmCard
                    filmId={id}
                    title={title}
                    genres={genre_ids}
                    poster={poster_path}
                    rating={vote_average}
                    key={id}
                  />
                );
              },
            )}
        </div>
      </div>
    </div>
  );
}

export default FilmsListPageTemplate;
