import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films';

const getGenres = createAsyncThunk('films/getGenres', async () => FilmsServiceApi.getGenres());

export default getGenres;
