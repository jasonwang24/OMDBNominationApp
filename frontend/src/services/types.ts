export interface MovieSearchInterface {
  searchMovies(filterOptions: FilterMovieOptions): Promise<any>;
  getMovieInfo(filterOptions: FilterMovieInfoOptions): Promise<any>;
}

export interface NominationInterface {
  submitNomination(movie: Movie): Promise<any>;
  checkUserExists(email: string): Promise<any>;
  storeUser(email: string): Promise<any>;
  getRankings(): Promise<any>;
}

export interface SearchServerInterface {
  movieSearchService: MovieSearchInterface;
  nominationService: NominationInterface;
}

export interface FilterMovieOptions {
  s: string;
  y?: string;
}

export interface FilterMovieInfoOptions {
  i: string;
}

export interface Movie {
  poster: string;
  title: string;
  genre: string;
  director: string;
  year: string;
  imdbRating: string;
  plot: string;
  id: string;
}
