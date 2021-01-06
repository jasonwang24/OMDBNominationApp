import { Movie } from "./types";

export function deserializeMovieIds(moviesObj: any): string[] {
  return moviesObj.Search.map((movie: any) => movie.imdbID);
}

export function deserializeMovieInfo(movieObj: any): Movie {
  return {
    poster: movieObj.data.Poster,
    title: movieObj.data.Title,
    genre: movieObj.data.Genre,
    director: movieObj.data.Director,
    year: movieObj.data.Year,
    imdbRating: movieObj.data.imdbRating,
    plot: movieObj.data.Plot,
    id: movieObj.data.imdbID,
  };
}
