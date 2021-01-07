import axios from "axios";
import { NominationService } from "./Nominations";
import { OMDBService } from "./OMDB";
import {
  SearchServerInterface,
  MovieSearchInterface,
  NominationInterface,
} from "./types";

export class MovieServer implements SearchServerInterface {
  readonly movieSearchService: MovieSearchInterface;
  readonly nominationService: NominationInterface;

  constructor() {
    const apiInstance = axios.create({ timeout: 10000 });

    this.movieSearchService = new OMDBService({ apiInstance });
    this.nominationService = new NominationService({ apiInstance });
  }
}
