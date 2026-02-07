"use client";

import { useEffect, useState } from "react";

import { IData } from "@/interface/interface";

const useProduct = () => {
  const [data, setData] = useState<IData>({
    limit: 10,
    products: [],
    skip: 0,
    total: 0,
  });

  const fetchProducts = async (skip: number) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${data.limit}&skip=${skip}`
      );
      const { products, total } = await response.json();
      setData((prevData) => ({ ...prevData, products, total, skip }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(0);
  }, []);

  return {
    data,
    setData,
    fetchProducts,
  };
};

export default useProduct;
