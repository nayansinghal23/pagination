"use client";

import ProductList from "./ProductList";
import Pagination from "./Pagination";

import useProduct from "@/hooks/useProducts";

const Products = () => {
  const { data, fetchProducts } = useProduct();

  return (
    <div className="p-2 flex flex-col gap-3">
      <ProductList products={data.products} />
      <Pagination
        pages={Math.ceil(data.total / data.limit)}
        page={Math.floor(data.skip / 10) + 1}
        onPageChange={(skip) =>
          fetchProducts((skip) * data.limit)
        }
      />
    </div>
  );
};

export default Products;
