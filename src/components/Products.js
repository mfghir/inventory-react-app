import React from "react";

const Products = () => {
  return (
    <div class="mb-6">
      <h2 class="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form class="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label for="product-title" class="block mb-1 text-slate-400">
            title
          </label>
          <input
            type="text"
            name="product-title"
            id="product-title"
            class="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div>
          <label for="product-quantity" class="block mb-1 text-slate-400">
            quantity
          </label>
          <input
            class="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            type="number"
            name="product-quantity"
            id="product-quantity"
          />
        </div>
        <div>
          <label for="product-category" class="block mb-1 text-slate-400">
            category
          </label>
          <select
            name="product-category"
            id="product-category"
            class="bg-transparent text-slate-400 rounded-xl w-full"
          ></select>
        </div>
        <div class="flex items-center justify-between gap-x-4">
          <button
            id="add-new-product"
            class="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
          >
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Products;
