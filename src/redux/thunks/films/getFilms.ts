import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films';

const getFilms = createAsyncThunk(
  'films/getFilms',
  async ({ path, searchQuery }: { path: string; searchQuery?: string }) => FilmsServiceApi.getFilms({ path, searchQuery }),
);

export default getFilms;
