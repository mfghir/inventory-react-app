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

  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

  useEffect(() => {
    let res = products;
    res = filterSearchTitle(res);
    res = filterSelectCategory(res);
    res = sortDate(res);
    setFilteredProducts(res);
  }, [products, sort, searchValue, selectedCategory]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const sortDate = (array) => {
    const sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const selectCategoryHandler = (e) => {
    setselectedCategory(e.target.value);
  };

  const filterSelectCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  useEffect(() => {
    const savedProdocuts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];

    setProducts(savedProdocuts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar products={products} />

      <div className="container max-w-screen-sm mx-auto p-4">
        <Category setCategories={setCategories} />
        <Products categories={categories} setProducts={setProducts} />
        <Filter
          onSort={sortHandler}
          onSearch={searchHandler}
          sort={sort}
          searchValue={searchValue}
          categories={categories}
          onselectCategory={selectCategoryHandler}
          selectedCategory={selectedCategory}
        />
        <ProductList
          products={filteredProducts}
          categories={categories}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
