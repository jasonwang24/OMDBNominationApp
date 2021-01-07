import axios from "axios";
import { EmailService } from "./Email";
import { NominationService } from "./Nominations";
import { OMDBService } from "./OMDB";
import {
  SearchServerInterface,
  MovieSearchInterface,
  NominationInterface,
  EmailInterface,
} from "./types";

export class MovieServer implements SearchServerInterface {
  readonly movieSearchService: MovieSearchInterface;
  readonly nominationService: NominationInterface;
  readonly emailService: EmailInterface;

  constructor() {
    const apiInstance = axios.create({ timeout: 10000 });

    this.movieSearchService = new OMDBService({ apiInstance });
    this.nominationService = new NominationService({ apiInstance });
    this.emailService = new EmailService({ apiInstance });
  }
}
