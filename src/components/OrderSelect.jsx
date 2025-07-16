function OrderSelect({ setSortBy, setSortOrder }) {

    return (
        <>
            <select onChange={(e) => setSortBy(e.target.value)}>

                <option value=""> Ordina per </option>
                <option value="title">Titolo</option>
                <option value="category">Categoria</option>

            </select>

            <select onChange={(e) => setSortOrder(e.target.value)}>

                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>

            </select>
        </>
    )

}

export default OrderSelect;