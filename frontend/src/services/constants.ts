export const ENDPOINTS = {
  OMDBSEARCH: `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`,
  OMDBSEARCHMOVIEINFO: `https://www.omdbapi.com/?plot=short&apikey=${process.env.REACT_APP_API_KEY}`,
  NOMINATIONSUBMISSION: "https://omdb-nomination.herokuapp.com/movies/add",
  USERSTORE: "https://omdb-nomination.herokuapp.com/users/add",
  CHECKUSER: "https://omdb-nomination.herokuapp.com/users/checkuser",
  RANKINGS: "https://omdb-nomination.herokuapp.com/movies/top",
  EMAIL: "https://omdb-nomination.herokuapp.com/emails",
};

export const SWRKeys = {
  RANKINGS: "rankings",
};
