import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from '../../components/Navigation';
import { AppDispatch } from '../../redux';
import getCurrentFilm from '../../redux/thunks/films/getCurrentFilm';

function OneFilmPage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (id) {
      dispatch(getCurrentFilm(id));
    }
  }, []);
  return (
    <div className="wrapper">
      <div className="container container__all-films">
        <Navigation />
        <div className="poster-block">
          <img />
        </div>
        <div className="info-block" />

      </div>
    </div>
  );
}

export default OneFilmPage;
