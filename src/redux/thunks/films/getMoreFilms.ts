import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films.ts';

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
  }) => {
    const films = await FilmsServiceApi.getMoreFilms(path, page, searchQuery);
    onSuccess?.();
    return films;
  },
);

export default getMoreFilms;
