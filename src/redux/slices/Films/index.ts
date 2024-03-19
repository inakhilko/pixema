import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getFilms from '../../thunks/films/getFilms';
import { IFilm } from '../../../api/films';
import getGenres from '../../thunks/films/getGenres';
import getMoreFilms from '../../thunks/films/getMoreFilms';
import getCurrentFilm from '../../thunks/films/getCurrentFilm';
import getRecommendations from '../../thunks/films/getRecommendations';

export interface IGenre {
  id: number,
  name: string
}

export interface ICurrentFilm {
  genres?: IGenre[],
  imdb_id?: string,
  overview?: string,
  poster_path?: string,
  production_companies?: [
    {
      id?: number,
      logo_path?: string,
      name?: string,
      origin_country?: string
    },
  ],
  production_countries?: [
    {
      iso_3166_1?: string,
      name?: string
    },
  ],
  release_date?: string,
  revenue?: number,
  runtime?: number,
  status?: string,
  tagline?: string,
  title?: string,
  vote_average?: number,
  vote_count?: number,
  popularity?: number
}

type FilmsStoreType = {
  films: IFilm[];
  genres: IGenre[];
  currentFilm: ICurrentFilm;
  recommendations: IFilm[];
};

const initialState: FilmsStoreType = {
  films: [],
  genres: [],
  currentFilm: {},
  recommendations: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(
      getFilms.fulfilled,
      (state, action: PayloadAction<IFilm[]>) => ({
        ...state,
        films: action.payload,
      }),
    )
    .addCase(
      getMoreFilms.fulfilled,
      (state, action: PayloadAction<IFilm[]>) => ({
        ...state,
        films: [...state.films, ...action.payload],
      }),
    )
    .addCase(
      getGenres.fulfilled,
      (state, action: PayloadAction<IGenre[]>) => ({
        ...state,
        genres: action.payload,
      }),
    )
    .addCase(
      getCurrentFilm.fulfilled,
      (state, action: PayloadAction<ICurrentFilm>) => ({
        ...state,
        currentFilm: action.payload,
      }),
    )
    .addCase(
      getRecommendations.fulfilled,
      (state, action: PayloadAction<IFilm[]>) => ({
        ...state,
        recommendations: action.payload,
      }),
    ),

});

// export const { toggleFavoritePost } = filmsSlice.actions;
export default filmsSlice.reducer;
