import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow rounded p-2">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded"
        />
        <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
        <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
