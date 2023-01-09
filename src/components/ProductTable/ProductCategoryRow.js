import styles from "./ProductCategoryRow.module.css";
import ProductRow from "./ProductRow.js";
import PropTypes from "prop-types";

function ProductCategoryRow({ data }) {
    console.log(data);
    return (
        <div>
            <p className={styles.title}>Sporting Goods</p>
            {data.map((product) => (
                <ProductRow
                    id={product.name}
                    name={product.name}
                    price={product.price}
                    stocked={product.stocked}
                />
            ))}
        </div>
    );
}

ProductCategoryRow.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ProductCategoryRow;
