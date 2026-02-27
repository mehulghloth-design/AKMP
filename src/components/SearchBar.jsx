function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search knowledge..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      aria-label="Search Knowledge"
      className="search"
    />
  );
}

export default SearchBar;