function SearchBar({ search, setSearch }) {

    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    )

}

export default SearchBar;