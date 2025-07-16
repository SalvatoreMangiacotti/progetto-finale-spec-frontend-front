function CategorySelect({ setCategory, categories }) {

    return (

        <select onChange={(e) => setCategory(e.target.value)}>

            <option value="">Tutte le categorie</option>

            {categories.map((category, i) => (

                <option key={i} value={category}>
                    {category}
                </option>

            ))}

        </select>

    )

}

export default CategorySelect;