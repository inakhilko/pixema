import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getFilms from '../../thunks/FilmsThunk';
import { IFilm } from '../../../api/films';

type FilmsStoreType = {
  films: IFilm[];
};

const initialState: FilmsStoreType = {
  films: [],
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
    ),
});

// export const { toggleFavoritePost } = filmsSlice.actions;
export default filmsSlice.reducer;
