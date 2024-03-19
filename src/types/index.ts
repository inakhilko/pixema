export interface IUser {
  email?: string;
  username?: string;
  id?: number
}

export type LoginCredentialsType = {
  email: string;
  password: string;
};

export enum FILMS_PATHS {
  ALL = '3/trending/movie/week',
  TRENDING = '3/trending/movie/day',
  ONE_FILM = '3/movie/',
}
