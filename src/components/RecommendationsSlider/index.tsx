import {
  useEffect,
} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './RecommendationsSlider.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux';
import { IFilm } from '../../api/films';
import FilmCard from '../FilmCard';
import getRecommendations from '../../redux/thunks/films/getRecommendations';

function RecommendationsSlider() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const recommendedFilms = useSelector<RootState, IFilm[]>(
    (state) => state.filmsStore.recommendations,
  );

  useEffect(() => {
    if (id) {
      dispatch(getRecommendations(id));
    }
  }, []);

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={40}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {recommendedFilms && recommendedFilms.map(
        ({
          title, poster_path, genre_ids, vote_average, id,
        }) => (
          <SwiperSlide key={id}>
            <FilmCard
              title={title}
              genres={genre_ids}
              poster={poster_path}
              rating={vote_average}
              filmId={id}
              key={id}
            />
          </SwiperSlide>
        ),
      )}
      {/* <SwiperSlide>1</SwiperSlide> */}
      {/* <SwiperSlide>2</SwiperSlide> */}
      {/* <SwiperSlide>3</SwiperSlide> */}
      {/* <SwiperSlide>4</SwiperSlide> */}
      {/* <SwiperSlide>5</SwiperSlide> */}
      {/* <SwiperSlide>6</SwiperSlide> */}
      {/* <SwiperSlide>7</SwiperSlide> */}

    </Swiper>
  );
}

export default RecommendationsSlider;
