import { createAsyncThunk } from '@reduxjs/toolkit';
import UserServiceApi from '../../api/user';
import getUserData from './getUserData';
import type { ITokens } from '../slices/User';

const signIn = createAsyncThunk<ITokens, { email:string, password:string }>(
  'user/signIn',
  async (
    { email, password },
    { dispatch },
  ) => {
    const tokens = await UserServiceApi.signIn({ email, password });
    dispatch(getUserData());
    return tokens;
  },
);

export default signIn;
