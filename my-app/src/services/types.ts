export interface MovieSearchInterface {
  getMovies(filterOptions: FilterMovieOptions): Promise<any>;
}

export interface SearchServerInterface {
  movieSearchService: MovieSearchInterface;
}

export interface FilterMovieOptions {
  s: string;
  y?: string;
}

export interface Movie {
  poster: string;
  title: string;
  type: string;
  year: string;
  id: string;
}
