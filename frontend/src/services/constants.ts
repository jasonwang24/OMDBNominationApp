export const ENDPOINTS = {
  OMDBSEARCH: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`,
  OMDBSEARCHMOVIEINFO: `http://www.omdbapi.com/?plot=short&apikey=${process.env.REACT_APP_API_KEY}`,
  NOMINATIONSUBMISSION: "http://localhost:5000/movies/add",
  USERSTORE: "http://localhost:5000/users/add",
  CHECKUSER: "http://localhost:5000/users/checkuser",
  RANKINGS: "http://localhost:5000/movies/top",
};

export const SWRKeys = {
  RANKINGS: "rankings",
};
