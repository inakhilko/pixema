import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../api/films';

const getFilms = createAsyncThunk('films/getFilms', async () => FilmsServiceApi.getFilm());

export default getFilms;
