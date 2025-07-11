import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export const searchMovies = async (query, filters = {}) => {
  const params = {
    api_key: apiKey,
    query,
    ...filters,
  };
  const res = await axios.get(`${baseUrl}/search/movie`, { params });
  return res.data.results;
};

export const discoverMovies = async (filters = {}) => {
  const params = {
    api_key: apiKey,
    sort_by: filters.sort_by || "popularity.desc",
    with_genres: filters.genre,
    primary_release_year: filters.year,
    "vote_average.gte": filters.rating,
  };
  const res = await axios.get(`${baseUrl}/discover/movie`, { params });
  return res.data.results;
};

export const getMovieDetails = async (movieId) => {
  const res = await axios.get(`${baseUrl}/movie/${movieId}`, {
    params: {
      api_key: apiKey,
      append_to_response: "videos,recommendations",
    },
  });
  return res.data;
};
