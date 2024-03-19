import axios from 'axios';
import { FilmsPaths } from '../types';

export interface IFilm {
  title: string,
  genre_ids: number[],
  poster_path: string,
  vote_average: number,
  id: number
}

class FilmsServiceApi {
  private static apiKey = '9de80718fc856bba67d5b847bcb4176a';

  private static urls = {
    baseMoviesUrl: 'https://api.themoviedb.org/',
  };

  public static async getFilms(path: string) {
    try {
      const result = await axios.get(`${this.urls.baseMoviesUrl + path}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return result.data.results;
    } catch (e) {
      return [];
    }
  }

  public static async getMoreFilms(path: string, page = 2) {
    try {
      const result = await axios.get(`${this.urls.baseMoviesUrl + path}`, {
        params: {
          api_key: this.apiKey,
          page,
        },
      });
      return result.data.results;
    } catch (e) {
      return [];
    }
  }

  public static async getGenres() {
    try {
      const result = await axios.get(`${this.urls.baseMoviesUrl}3/genre/movie/list`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return result.data.genres;
    } catch (e) {
      return [];
    }
  }

  public static async getFilm(id: string) {
    try {
      const result = await axios.get(`${this.urls.baseMoviesUrl + FilmsPaths.ONE_FILM + id}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return result.data;
    } catch (e) {
      return {};
    }
  }

  public static async getRecommendations(id: string) {
    try {
      const result = await axios.get(`${this.urls.baseMoviesUrl + FilmsPaths.ONE_FILM + id + FilmsPaths.RECOMMENDATIONS}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return result.data.results;
    } catch (e) {
      return [];
    }
  }

  public static async getCast(id: string) {
    try {
      const result = await axios.get(`${this.urls.baseMoviesUrl + FilmsPaths.ONE_FILM + id + FilmsPaths.CAST}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return result.data;
    } catch (e) {
      return [];
    }
  }
}
export default FilmsServiceApi;
