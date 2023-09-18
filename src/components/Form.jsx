import React, { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState({
    title: "",
  });
  return (
    <div className="w-50 mx-auto">
      <div className="input-group ">
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <p> {product.title}</p>
    </div>
  );
};

export default Form;
