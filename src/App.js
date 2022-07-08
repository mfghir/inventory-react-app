import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Category from "./components/Category";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    
  }, [products]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <Navbar />

        <div className="container max-w-screen-sm mx-auto p-4">
          <Category setCategories={setCategories} />
          <Products categories={categories} setProducts={setProducts} />
          <Filter products={products}  setFilteredProducts={setFilteredProducts} />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
