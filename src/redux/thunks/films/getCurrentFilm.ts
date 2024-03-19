import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films';

const getCurrentFilm = createAsyncThunk('films/getCurrentFilm', async (id: string) => FilmsServiceApi.getFilm(Number(id)));

export default getCurrentFilm;
