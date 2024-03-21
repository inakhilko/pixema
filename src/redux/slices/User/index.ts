import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import signIn from '../../thunks/signIn';
import getUserData from '../../thunks/getUserData';

export interface IUser {
  email?: string;
  username?: string;
  id?: number
}

export interface ITokens {
  refresh?: string;
  access?: string;
}

type UserStoreType = {
  tokens: ITokens;
  userData: IUser;
  isAuthorized: boolean
};

const initialState: UserStoreType = {
  tokens: {},
  userData: {},
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => ({
      ...state,
      tokens: {},
      userData: {},
      isAuthorized: false,
    }),
    authorize: (state) => ({
      ...state,
      isAuthorized: true,
    }),
  },
  extraReducers: (builder) => builder
    .addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<ITokens>) => ({
        ...state,
        tokens: action.payload,
      }),
    )
    .addCase(
      getUserData.fulfilled,
      (state, action: PayloadAction<UserStoreType['userData']>) => ({
        ...state,
        userData: action.payload,
      }),
    ),
});

export const { logout, authorize } = userSlice.actions;
export default userSlice.reducer;
