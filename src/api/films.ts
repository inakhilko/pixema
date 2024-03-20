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

  private static getFilmsController = new AbortController();

  public static async getFilms({ path, searchQuery }:{ path: string, searchQuery?: string }) {
    try {
      FilmsServiceApi.getFilmsController.abort();
      FilmsServiceApi.getFilmsController = new AbortController();
      const result = await axios.get(`${this.urls.baseMoviesUrl + path}`, {
        params: {
          api_key: this.apiKey,
          query: searchQuery || null,
        },
        signal: FilmsServiceApi.getFilmsController.signal,
      });
      return result.data.results;
    } catch (e) {
      return [];
    }
  }

  public static async getMoreFilms(path: string, page = 2, searchQuery?: string) {
    try {
      const result = await axios.get(`${this.urls.baseMoviesUrl + path}`, {
        params: {
          api_key: this.apiKey,
          page,
          query: searchQuery || '',
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

  public static async searchFilm(query: string) {
    try {
      const result = await axios.get(`${this.urls.baseMoviesUrl + FilmsPaths.SEARCH}`, {
        params: {
          api_key: this.apiKey,
          query,
        },
      });
      return result.data;
    } catch (e) {
      return [];
    }
  }
}
export default FilmsServiceApi;
