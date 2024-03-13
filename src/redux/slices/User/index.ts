import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import signIn from '../thunks/signIn';
// import getUserData from '../thunks/getUserData';

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
};

const initialState: UserStoreType = {
  tokens: {},
  userData: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => ({
      ...state,
      tokens: {},
      userData: {},
    }),
  },
  extraReducers: (builder) => builder,
  // .addCase(
  //   signIn.fulfilled,
  //   (state, action: PayloadAction<UserStoreType['tokens']>) => ({
  //     ...state,
  //     tokens: action.payload,
  //   }),
  // )
  // .addCase(
  //   getUserData.fulfilled,
  //   (state, action: PayloadAction<UserStoreType['userData']>) => ({
  //     ...state,
  //     userData: action.payload,
  //   }),
  // ),
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
