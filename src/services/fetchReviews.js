import axios from 'axios';

const key = '9ac98fc7f7b54439f7d280280d36743b';

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}`
  );
  const details = response.data.results;

  return details;
};
