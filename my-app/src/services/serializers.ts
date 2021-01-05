import { Movie } from "./types";

export function deserializeMovies(moviesObj: any): Movie[] {
  return moviesObj.data.Search.map((movie: any) => deserializeMovie(movie));
}

export function deserializeMovie(movie: any): Movie {
  return {
    poster: movie.Poster,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    id: movie.imdbID,
  };
}
