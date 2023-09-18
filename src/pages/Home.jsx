import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./home.css";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useLoaderData();
  const {cart} = useSelector((state) => state.rootReducer);
  // const [productApi, setProductApi] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const getData = async () => {
  //   try {
  //     // setLoading(true);
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     // setLoading(false);
  //     setProductApi(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // });
  // const [screenError, setScreenError] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProductApi(data))
  //     .catch((error) => setScreenError(error));
  // });
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <h1 className="text-center text-white">Products</h1>
          <h1 className="text-center text-white">${cart.value}</h1>
          {/* <h1 className="color-red">{screenError}</h1> */}
          <div className="row g-5 mx-auto">
            {products.map((product) => (
              <div className="col-4" key={product.id}>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getData = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  // no need .json() kyunka axios khud convert krta he
  // return res.json(); // ye bhi promise return kr ra he pr react router dom khud ise convert kr lega
  return res.data;
};
