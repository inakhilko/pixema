import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import signIn from '../../thunks/signIn';
import getUserData from '../../thunks/getUserData';
import { APP_STORAGE_KEYS } from '../../../api';

export interface IUser {
  email?: string;
  username?: string;
  id?: number
}

export type LoginCredentialsType = {
  email: string;
  password: string;
};

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
    checkTokens: (state) => {
      if (localStorage.getItem(APP_STORAGE_KEYS.TOKENS)) {
        return {
          ...state,
          tokens: {
            ...JSON.parse(localStorage.getItem(APP_STORAGE_KEYS.TOKENS)),
          },
        };
      }
    },
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

export const { logout, authorize, checkTokens } = userSlice.actions;
export default userSlice.reducer;
