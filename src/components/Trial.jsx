import React, { useState, useEffect } from "react";

const Trial = () => {
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products/category/${categoryName}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryName]);

  return (
    <div>
      <h2>Products by Category: {categoryName}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trial;
