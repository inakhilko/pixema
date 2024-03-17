import axios from 'axios';
import { IUser, LoginCredentialsType } from '../types';
import { SignUpFormFieldsType } from '../types/formsData';
import api, { APP_STORAGE_KEYS } from './index';

class UserServiceApi {
  public static async registerUser({
    username, email, password,
  }:SignUpFormFieldsType) {
    await axios.post(
      'https://studapi.teachmeskills.by/auth/users/',
      { username, email, password },
    );
  }

  public static async activateUser({ uid, token }:Record<string, string>) {
    try {
      await axios.post('https://studapi.teachmeskills.by/auth/users/activation/', {
        uid,
        token,
      });
    } catch (error) {
      console.log(error);
    }
  }

  public static async signIn({ email, password }: LoginCredentialsType) {
    const response = await axios.post(
      'https://studapi.teachmeskills.by/auth/jwt/create/',
      { email, password },
    );
    const result: { refresh: string; access: string } = await response.data;
    localStorage.setItem(APP_STORAGE_KEYS.TOKENS, JSON.stringify(result));
    return result;
  }

  public static async getUser(): Promise<IUser | null> {
    const response = await api.get('https://studapi.teachmeskills.by/auth/users/me/');
    return response.data;
  }

  public static async resetPassword({ email }: { email: string }) {
    try {
      await axios.post('https://studapi.teachmeskills.by/auth/users/reset_password/', {
        email,
      });
    } catch (error) {
      console.log(error);
    }
  }

  public static async changePassword({ uid, token, newPassword: { password } }:{ uid: string | undefined, token: string | undefined, newPassword: { password: string } }) {
    try {
      await axios.post('https://studapi.teachmeskills.by/auth/users/reset_password_confirm/', {
        uid,
        token,
        new_password: password,
      });
    } catch (error) {
      console.log(error);
    }
  }
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
