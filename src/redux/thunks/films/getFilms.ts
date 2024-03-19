import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films';

const getFilms = createAsyncThunk('films/getFilms', async (path: string) => FilmsServiceApi.getFilms(path));

export default getFilms;
