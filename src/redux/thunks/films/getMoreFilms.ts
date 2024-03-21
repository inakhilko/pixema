import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi, { IFilm } from '../../../api/films';
import { FilmsPaths } from '../../../types';
import type { RootState } from '../../index';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getMoreFilms = createAsyncThunk<IFilm[], {
  path: string;
  page: number;
  searchQuery?:string;
  onSuccess?:(
  ) => void;
}, { state:RootState }>(
    'films/getMoreFilms',
    async ({
      path,
      page,
      onSuccess,
      searchQuery,
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default getMoreFilms;
