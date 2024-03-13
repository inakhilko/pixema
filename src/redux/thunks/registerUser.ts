import { createAsyncThunk } from '@reduxjs/toolkit';
import UserServiceApi from '../../api/user.ts';

const registerUser = createAsyncThunk('user/registerUser', async ({
  username, email, password, confirmationPassword,
}) => UserServiceApi.registerUser({
  username, email, password, confirmationPassword,
}));

export default registerUser;
