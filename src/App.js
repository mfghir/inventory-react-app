import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <Navbar />

        <div className="container max-w-screen-sm mx-auto p-4">
          <Category setCategories={setCategories} />
          <Products categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default App;
