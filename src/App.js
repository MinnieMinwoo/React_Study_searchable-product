import ProductCategoryRow from "./components/ProductTable/ProductCategoryRow.js";

function App() {
    let json = [
        {
            category: "Electronics",
            price: "$99.99",
            stocked: true,
            name: "iPod Touch",
        },
        {
            category: "Electronics",
            price: "$399.99",
            stocked: false,
            name: "iPhone 5",
        },
        {
            category: "Electronics",
            price: "$199.99",
            stocked: true,
            name: "Nexus 7",
        },
    ];
    return (
        <div className="App">
            <ProductCategoryRow data={json} />
        </div>
    );
}

export default App;
