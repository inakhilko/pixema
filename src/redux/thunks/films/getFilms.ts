/* eslint-disable @typescript-eslint/ban-ts-comment */

import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi, { IFilm } from '../../../api/films';
import { FilmsPaths } from '../../../types';
import type { RootState } from '../../index';

// @ts-ignore
const getFilms = createAsyncThunk<IFilm[], {
  path: string;
  searchQuery?: string
},
{ state:RootState }>(
  'films/getFilms',
  async ({ path, searchQuery }, { getState }) => {
    let filters = {};

    if (path === FilmsPaths.FILTER_AND_SORT) {
      const store:RootState = getState();
      filters = store.filtersStore.filtrationData;
    }

    return FilmsServiceApi.getFilms({
      path,
      searchQuery,
      filtersData: filters,
    });
  },
);

// @ts-ignore
export default getFilms;
