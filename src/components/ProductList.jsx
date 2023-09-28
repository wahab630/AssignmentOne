import React from "react";
import { useGetAllProductsQuery } from "../features/productslisting/productApi";

const ProductList = () => {
  console.log("hello productlist");
  const { data, error, isLoading } = useGetAllProductsQuery();
  if (isLoading) return <h1>Loading......</h1>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      {data.map((item) => (
        <p>{item.title}</p>
      ))}
    </>
  );
};

export default ProductList;
