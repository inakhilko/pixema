import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films.ts';

const getMoreFilms = createAsyncThunk(
  'films/getMoreFilms',
  async ({
    path,
    page,
    onSuccess,
  }: {
    path: string;
    page: number;
    onSuccess?: () => void;
  }) => {
    const films = await FilmsServiceApi.getMoreFilms(path, page);
    onSuccess?.();
    return films;
  },
);

export default getMoreFilms;
