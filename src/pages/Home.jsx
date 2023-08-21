import React from "react";
import Card from "../components/Card";
import './home.css'

const Home = ({ products }) => {
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <h1 className="text-center text-white">Products</h1>
          <div className="row g-5 mx-auto">
            {products.map((product) => (
              <div className="col-3">
                <Card product={product} key={product.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
