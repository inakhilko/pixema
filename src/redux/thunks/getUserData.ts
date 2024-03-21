import { createAsyncThunk } from '@reduxjs/toolkit';
import UserServiceApi from '../../api/user';
import type { IUser } from '../../types';

const getUserData = createAsyncThunk<IUser | null>(
  'user/getUserData',
  async () => UserServiceApi.getUser(),
);

export default getUserData;
