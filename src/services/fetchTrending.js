import axios from 'axios';

const key = '9ac98fc7f7b54439f7d280280d36743b';

export const fetchTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
  );
  const trendingMovies = response.data.results;

  return trendingMovies;
};
