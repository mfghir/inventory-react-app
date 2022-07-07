import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      ProductList
      {products.map((product) => {
        return (
          <div class="flex items-center justify-between mb-2 w-full min-w-[400px]">
            <span class="text-slate-400">{product.title}</span>
            <div class="flex items-center gap-x-3">
              <span class="text-slate-400">
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </span>

              <span class="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                {product.categoryId}
              </span>

              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                {product.quantity}
              </span>
              <button class="delete-product border px-2 py-o.5 rounded-2xl border-red-400 text-red-400 delete-product">
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
