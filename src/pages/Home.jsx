import React from "react";
import Card from "../components/Card";

const Home = ({ products }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row g-5 mx-auto">
          {products.map((product) => (
            <Card product={product} key={products.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
