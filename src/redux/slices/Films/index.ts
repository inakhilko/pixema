import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getFilms from '../../thunks/films/getFilms.ts';
import { IFilm } from '../../../api/films';
import getGenres from '../../thunks/films/getGenres';
import getMoreFilms from '../../thunks/films/getMoreFilms.ts';
import getCurrentFilm from '../../thunks/films/getCurrentFilm.ts';

export interface IGenre {
  id: number,
  name: string
}

type FilmsStoreType = {
  films: IFilm[];
  genres: IGenre[];
  currentFilm: {};
};

const initialState: FilmsStoreType = {
  films: [],
  genres: [],
  currentFilm: {},
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
      (state, action: PayloadAction<IFilm[]>) => ({
        ...state,
        genres: action.payload,
      }),
    )
    .addCase(
      getCurrentFilm.fulfilled,
      (state, action: PayloadAction<IFilm[]>) => ({
        ...state,
        currentFilm: action.payload,
      }),
    ),

});

// export const { toggleFavoritePost } = filmsSlice.actions;
export default filmsSlice.reducer;
