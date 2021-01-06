export interface MovieSearchInterface {
  searchMovies(filterOptions: FilterMovieOptions): Promise<any>;
  getMovieInfo(filterOptions: FilterMovieInfoOptions): Promise<any>;
}

export interface SearchServerInterface {
  movieSearchService: MovieSearchInterface;
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
