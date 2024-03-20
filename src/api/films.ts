import axios from 'axios';
import { FilmsPaths } from '../types';

export interface IFilm {
  title: string;
  genre_ids: number[];
  poster_path: string;
  vote_average: number;
  id: number;
}

export type FiltersFormType = {
  sortParameter?: number;
  movieName?: string;
  year?: string;
  yearsFrom?: string;
  yearsTo?: string;
  ratingFrom?: string;
  ratingTo?: string;
  country?: string;
  genres?: { id: number; name: string }[];
};

class FilmsServiceApi {
  private static apiKey = '9de80718fc856bba67d5b847bcb4176a';

  private static urls = {
    baseMoviesUrl: 'https://api.themoviedb.org/',
  };

  private static getFilmsController = new AbortController();

  public static async getFilms({
    path,
    searchQuery,
    filtersData = {},
  }: {
    path: string;
    searchQuery?: string;
    filtersData: FiltersFormType;
  }) {
    try {
      FilmsServiceApi.getFilmsController.abort();
      FilmsServiceApi.getFilmsController = new AbortController();
      const {
        ratingFrom,
        genres,
        ratingTo,
        yearsFrom,
        yearsTo,
        sortParameter,
        country,
      } = filtersData;

      const result = await axios.get(`${this.urls.baseMoviesUrl + path}`, {
        params: {
          api_key: this.apiKey,
          query: searchQuery || null,
          sort_by: sortParameter || null,
          'primary_release_date.gte': yearsFrom ? new Date(yearsFrom) : null,
          'primary_release_date.lte': yearsTo ? new Date(yearsTo) : null,
          'vote_average.gte': ratingFrom || null,
          'vote_average.lte': ratingTo || null,
          with_genres: genres?.length ? genres.map((el) => el.id) : null,
          // with_keywords: movieName || null,
          with_origin_country: country || null,
        },
        signal: FilmsServiceApi.getFilmsController.signal,
      });
      return result.data.results;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  public static async getMoreFilms({
    path,
    page = 2,
    searchQuery,
    filtersData = {},
  }: {
    path: string;
    page: number;
    searchQuery?: string;
    filtersData: FiltersFormType;
  }) {
    try {
      const {
        ratingFrom,
        genres,
        ratingTo,
        yearsFrom,
        yearsTo,
        sortParameter,
        country,
      } = filtersData;
      const result = await axios.get(`${this.urls.baseMoviesUrl + path}`, {
        params: {
          api_key: this.apiKey,
          page,
          query: searchQuery || null,
          sort_by: sortParameter || null,
          'primary_release_date.gte': yearsFrom ? new Date(yearsFrom) : null,
          'primary_release_date.lte': yearsTo ? new Date(yearsTo) : null,
          'vote_average.gte': ratingFrom || null,
          'vote_average.lte': ratingTo || null,
          with_genres: genres?.length ? genres.map((el) => el.id) : null,
          // with_keywords: movieName || null,
          with_origin_country: country || null,
        },
      });

      return result.data.results;
    } catch (e) {
      return [];
    }
  }

  public static async getGenres() {
    try {
      const result = await axios.get(
        `${this.urls.baseMoviesUrl + FilmsPaths.GENRES}`,
        {
          params: {
            api_key: this.apiKey,
          },
        },
      );
      return result.data.genres;
    } catch (e) {
      return [];
    }
  }

  public static async getCountries() {
    try {
      const result = await axios.get(
        `${this.urls.baseMoviesUrl + FilmsPaths.COUNTRIES}`,
        {
          params: {
            api_key: this.apiKey,
          },
        },
      );
      return result.data;
    } catch (e) {
      return [];
    }
  }

  public static async getFilm(id: string) {
    try {
      const result = await axios.get(
        `${this.urls.baseMoviesUrl + FilmsPaths.ONE_FILM + id}`,
        {
          params: {
            api_key: this.apiKey,
          },
        },
      );
      return result.data;
    } catch (e) {
      return {};
    }
  }

  public static async getRecommendations(id: string) {
    try {
      const result = await axios.get(
        `${this.urls.baseMoviesUrl + FilmsPaths.ONE_FILM + id + FilmsPaths.RECOMMENDATIONS}`,
        {
          params: {
            api_key: this.apiKey,
          },
        },
      );
      return result.data.results;
    } catch (e) {
      return [];
    }
  }

  public static async getCast(id: string) {
    try {
      const result = await axios.get(
        `${this.urls.baseMoviesUrl + FilmsPaths.ONE_FILM + id + FilmsPaths.CAST}`,
        {
          params: {
            api_key: this.apiKey,
          },
        },
      );
      return result.data;
    } catch (e) {
      return [];
    }
  }
}
export default FilmsServiceApi;
