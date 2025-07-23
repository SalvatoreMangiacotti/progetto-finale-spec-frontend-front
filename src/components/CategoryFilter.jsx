function CategoryFilter({ categoryFilter, setCategoryFilter, categories }) {

    return (

        <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
        >

            <option value="">Seleziona una categoria</option>

            {categories.map((category, i) => (

                <option key={i} value={category}>
                    {category}
                </option>

            ))}

        </select>

    )

}

export default CategoryFilter;