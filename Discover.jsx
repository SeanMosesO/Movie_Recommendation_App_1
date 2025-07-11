import { useEffect, useState } from "react";
import { discoverMovies, searchMovies } from "../services/tmdb";
import SearchBar from "../components/searchBar.jsx";
import Filters from "../components/Filters";
import MovieList from "../components/MovieList";

const Discover = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      if (searchTerm) {
        const results = await searchMovies(searchTerm, filters);
        setMovies(results);
      } else {
        const results = await discoverMovies(filters);
        setMovies(results);
      }
    };
    loadMovies();
  }, [filters, searchTerm]);

  return (
    <div className="p-4">
      <SearchBar onSearch={setSearchTerm} />
      <Filters filters={filters} setFilters={setFilters} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Discover;
