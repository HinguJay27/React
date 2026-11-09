import { useMemo, useState } from "react";

function App() {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);

    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Keyboard", price: 1500 },
        { id: 4, name: "Mouse", price: 800 },
        { id: 5, name: "Monitor", price: 12000 }
    ];

    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");

        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div>
            <h1>Product Search</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h3>Products:</h3>

            {filteredProducts.map((product) => (
                <p key={product.id}>
                    {product.name} - ₹{product.price}
                </p>
            ))}

            <hr />

            <h3>Counter: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase Counter
            </button>
        </div>
    );
}

export default App;