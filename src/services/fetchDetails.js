import axios from 'axios';

const key = '9ac98fc7f7b54439f7d280280d36743b';

export const fetchDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`
  );

  const details = response.data;

  return details;
};
