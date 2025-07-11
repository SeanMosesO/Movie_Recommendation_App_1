import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/tmdb";
import MovieList from "../components/MovieList";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovieDetails(id);
      setMovie(result);
    };
    fetchData();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
      <p>{movie.overview}</p>
      <p className="mt-2 text-sm text-gray-600">Release Date: {movie.release_date}</p>
      <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>

      {movie.videos?.results?.length > 0 && (
        <div className="my-4">
          <iframe
            title="Trailer"
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      )}

      {movie.recommendations?.results?.length > 0 && (
        <>
          <h3 className="text-xl mt-6 mb-2 font-semibold">Recommended</h3>
          <MovieList movies={movie.recommendations.results.slice(0, 8)} />
        </>
      )}
    </div>
  );
};

export default MoviePage;
