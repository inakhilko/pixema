export interface IUser {
  email?: string;
  username?: string;
  id?: number
}

export type LoginCredentialsType = {
  email: string;
  password: string;
};
