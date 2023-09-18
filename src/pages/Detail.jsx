import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const product = useLoaderData();

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{product.description}</p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $ {product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;

export const getProductById = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};
