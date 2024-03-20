import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films.ts';
import { FilmsPaths } from '../../../types';
import { RootState } from '../../index.ts';

const getMoreFilms = createAsyncThunk(
  'films/getMoreFilms',
  async ({
    path,
    page,
    onSuccess,
    searchQuery,
  }: {
    path: string;
    page: number;
    searchQuery?:string;
    onSuccess?: () => void;
  }, { getState }) => {
    let filters = {};

    if (path === FilmsPaths.FILTER_AND_SORT) {
      const store:RootState = getState();
      filters = store.filtersStore.filtrationData;
    }
    const films = await FilmsServiceApi.getMoreFilms({
      path, page, searchQuery, filtersData: filters,
    });
    onSuccess?.();
    return films;
  },
);

export default getMoreFilms;
