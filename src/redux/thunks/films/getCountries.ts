import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films';

const getCountries = createAsyncThunk('films/getCountries', async () => FilmsServiceApi.getCountries());

export default getCountries;
