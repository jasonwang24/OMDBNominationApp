import { AxiosInstance } from "axios";
import { ENDPOINTS } from "./constants";
import { deserializeMovieInfo } from "./serializers";
import {
  FilterMovieInfoOptions,
  FilterMovieOptions,
  MovieSearchInterface,
} from "./types";

export class OMDBService implements MovieSearchInterface {
  private apiInstance: AxiosInstance;

  constructor({ apiInstance }: { apiInstance: AxiosInstance }) {
    this.apiInstance = apiInstance;
  }

  async searchMovies(filterOptions: FilterMovieOptions): Promise<any> {
    let queryString = "&";
    queryString += Object.entries(filterOptions)
      .map(([parameter, value]) => (value ? `${parameter}=${value}` : ""))
      .join("&");
    const endpoint = `${ENDPOINTS.OMDBSEARCH}${queryString}`;
    const resp = await this.apiInstance.get(endpoint);
    return resp.data;
  }

  async getMovieInfo(filterOptions: FilterMovieInfoOptions): Promise<any> {
    const endpoint = `${ENDPOINTS.OMDBSEARCHMOVIEINFO}&i=${filterOptions.i}`;
    const resp = await this.apiInstance.get(endpoint);
    return deserializeMovieInfo(resp);
  }
}
