import axios from 'axios';

const key = '9ac98fc7f7b54439f7d280280d36743b';

export const fetchSearched = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
  );
  const searchedMovies = response.data.results;

  return searchedMovies;
};
