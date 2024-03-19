import { createAsyncThunk } from '@reduxjs/toolkit';
import FilmsServiceApi from '../../../api/films';

const getRecommendations = createAsyncThunk('films/getRecommendations', async (id:string) => FilmsServiceApi.getRecommendations(id));

export default getRecommendations;
