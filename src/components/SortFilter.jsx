function SortFilter({ sortOrder, setSortOrder }) {
    return (

        <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
        >
            <option value="">
                Ordina per:
            </option>

            <option value="title-asc">
                Titolo A-Z
            </option>

            <option value="title-desc">
                Titolo Z-A
            </option>

            <option value="category-asc">
                Categoria A-Z
            </option>

            <option value="category-desc">
                Categoria Z-A
            </option>
        </select>
    );
}

export default SortFilter;