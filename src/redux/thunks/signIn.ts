import { createAsyncThunk } from '@reduxjs/toolkit';
import UserServiceApi from '../../api/user';
import getUserData from './getUserData';

const signIn = createAsyncThunk(
  'user/signIn',
  async ({ email, password }: { email:string, password:string }, { dispatch }) => {
    const tokens = await UserServiceApi.signIn({ email, password });
    dispatch(getUserData());
    return tokens;
  },
);

export default signIn;
