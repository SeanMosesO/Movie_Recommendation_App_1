const Filters = ({ filters, setFilters }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <select
        value={filters.genre}
        onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
      >
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
        {/* Add more genres as needed */}
      </select>

      <input
        type="number"
        placeholder="Year"
        value={filters.year || ""}
        onChange={(e) => setFilters({ ...filters, year: e.target.value })}
      />

      <input
        type="number"
        placeholder="Rating ≥"
        value={filters.rating || ""}
        onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
      />

      <select
        value={filters.sort_by}
        onChange={(e) => setFilters({ ...filters, sort_by: e.target.value })}
      >
        <option value="popularity.desc">Popularity</option>
        <option value="vote_average.desc">Top Rated</option>
        <option value="release_date.desc">Newest</option>
      </select>
    </div>
  );
};

export default Filters;
