import ProductTable from "./ProductTable/ProductTable.js";
import { useState } from "react";

function FilterableProductTable({ json }) {
    const [searchData, setSearchData] = useState({
        filterText: "",
        inStockOnly: false,
    });
    return <ProductTable json={json} searchData={searchData} />;
}

export default FilterableProductTable;
