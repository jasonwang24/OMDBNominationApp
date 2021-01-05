import { AxiosInstance } from "axios";
import { ENDPOINTS } from "./constants";
import { deserializeMovies } from "./serializers";
import { FilterMovieOptions, MovieSearchInterface } from "./types";

export class OMDBService implements MovieSearchInterface {
  private apiInstance: AxiosInstance;

  constructor({ apiInstance }: { apiInstance: AxiosInstance }) {
    this.apiInstance = apiInstance;
  }

  async getMovies(filterOptions: FilterMovieOptions): Promise<any> {
    let queryString = "&";
    queryString += Object.entries(filterOptions)
      .map(([parameter, value]) => (value ? `${parameter}=${value}` : ""))
      .join("&");
    const endpoint = `${ENDPOINTS.OMDBSEARCH}${queryString}`;
    const resp = await this.apiInstance.get(endpoint);
    return deserializeMovies(resp);
  }
}
