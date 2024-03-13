import './AllFilms.styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import getFilms from '../../redux/thunks/FilmsThunk';
import FilmCard from '../../components/FilmCard';

function AllFilms() {
  const dispatch = useDispatch<AppDispatch>();
  // const onClick = () => {
  //   dispatch(getFilms());
  // };
  const filmsList = useSelector((state:RootState) => state.filmsStore.films);
  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="container container__all-films">
        <Navigation />
        <div className="all-films">
          {filmsList && filmsList.map(({ Poster, Title }) => (
            <FilmCard Poster={Poster} Title={Title} />
          ))}
        </div>
        {/* <button onClick={onClick}> 123</button> */}
      </div>
      <Footer />

    </div>
  );
}

export default AllFilms;
