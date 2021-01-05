import axios from "axios";
import { OMDBService } from "./OMDB";
import { SearchServerInterface, MovieSearchInterface } from "./types";

export class SearchServer implements SearchServerInterface {
  readonly movieSearchService: MovieSearchInterface;

  constructor() {
    const apiInstance = axios.create({ timeout: 10000 });

    this.movieSearchService = new OMDBService({ apiInstance });
  }
}
