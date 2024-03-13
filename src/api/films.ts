import axios from 'axios';

export interface IFilm {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
class FilmsServiceApi {
  public static async getFilm(): Promise<Array<IFilm>> {
    try {
      const result = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: 'f9df37ea',
          s: 'game',
        },
      });
      return result.data.Search;
    } catch (e) {
      return [];
    }
  }
}
export default FilmsServiceApi;
