import styles from "./SearchBar.module.css";

function SearchBar() {
    return (
        <div>
            <form>
                <input className={styles.searchBar} placeholder="Search..." />
                <input className={styles.searchCheckBox} type="checkbox" />
                <label>Only show products in stock</label>
            </form>
        </div>
    );
}
export default SearchBar;
