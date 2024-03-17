import { createAsyncThunk } from '@reduxjs/toolkit';
import UserServiceApi from '../../api/user';

const getUserData = createAsyncThunk(
  'user/getUserData',
  async () => {
    const user = await UserServiceApi.getUser();

    return user;
  },
);

export default getUserData;
