// import { IUser, LoginCredentialsType } from '../types';
import axios from 'axios';
import { redirect } from 'react-router-dom';
// import fetchWithTokens from '../utils/fetchWithTokens';
export const APP_STORAGE_KEYS = {
  USER: 'blogUser',
  TOKENS: 'blogTokens',
};
// 'https://studapi.teachmeskills.by/activate/:uid/:token',

class UserServiceApi {
  public static async registerUser({
    username, email, password, confirmationPassword,
  }) {
    const response = await fetch(
      'https://studapi.teachmeskills.by/auth/users/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ username, email, password }),
      },
    );
    const result: { refresh: string; access: string } = await response.json();
    localStorage.setItem(APP_STORAGE_KEYS.TOKENS, JSON.stringify(result));
    return result;
  }

  public static async activateUser({ uid, token }:Record<string, string>) {
    try {
      await axios.post('https://studapi.teachmeskills.by/auth/users/activation/', {
        uid,
        token,
      });
      return redirect('signin');
    } catch (error) {
      return redirect('signin');
    }

    // const response = await fetch(
    //     'https://studapi.teachmeskills.by/auth/users/',
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8',
    //         },
    //         body: JSON.stringify({ username, email, password }),
    //     },
    // );
    // const result: { refresh: string; access: string } = await response.json();
    // localStorage.setItem(APP_STORAGE_KEYS.TOKENS, JSON.stringify(result));
    // return result;
  }

  // public static async signIn({ email, password }: LoginCredentialsType) {
  //   const response = await fetch(
  //     'https://studapi.teachmeskills.by/auth/jwt/create/',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     },
  //   );
  //   const result: { refresh: string; access: string } = await response.json();
  //   localStorage.setItem(APP_STORAGE_KEYS.TOKENS, JSON.stringify(result));
  //   return result;
  // }
  //
  // public static async getUser(): Promise<IUser | null> {
  //   const response = await fetchWithTokens('https://studapi.teachmeskills.by/auth/users/me/');
  //   return response.json();
  // }
  //
  // public static getLocalStorageData(key: string) {
  //   try {
  //     const data = localStorage.getItem(key);
  //     return data ? JSON.parse(data) : null;
  //   } catch (e) {
  //     return null;
  //   }
  // }
}

export default UserServiceApi;
