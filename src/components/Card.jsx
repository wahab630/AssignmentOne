import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleChartItem = (prod) => {
    dispatch(addToCart(prod));
  };
  const { cart } = useSelector((state) => state.rootReducer);

  const currentItem = cart.cart.find((item) => item.id === product.id);
  // console.log(currentItem);
  const handleIncrement = (id) => {
    dispatch(increaseQty(id));
  };
  const handleDecrement = (id) => {
    dispatch(decreaseQty(id));
  };
  const handleRemoveFromCart = (id)=>{
    dispatch(removeFromCart(id))
  }

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "…" : str;
  }

  const description = product.description;
  const truncatedDescription = truncate(description, 60);

  return (
    <>
      <div className="card h-100 shadow ">
        <img
          src={product.image}
          className="card-img-top  object-fit-sm-contain"
          alt="no image"
        />
        <div className="card-body ">
          <Link className="card-linked" to={`/detail/${product.id}`}>
            <h5 className="card-title">{product.title.slice(0, 10)}... </h5>
          </Link>
          <div className="d-flex justify-content-between">
            <span>
              USD <span className="fw-bold price-red"> {product.price}</span> $
            </span>
            <span>
              Rating:
              <span className="fw-bold rating-yellow">
                {product.rating.rate}
              </span>
            </span>
          </div>
          <p className="card-text">{truncatedDescription}</p>
          {currentItem ? (
            <span>
              <button
                className="btn btn-danger"
                onClick={() => handleIncrement(product.id)}
                disabled={currentItem.qty >= 10}
              >
                +
              </button>
              <input
                type="text"
                className="mx-2"
                style={{ width: "50px" }}
                value={currentItem.qty}
              />
              <button
                className="btn btn-danger"
                onClick={() => {
                  if (currentItem.qty > 1) {
                    handleDecrement(product.id);
                  } else {
                    handleRemoveFromCart(product.id);
                  }
                }}
              >
                -
              </button>
            </span>
          ) : (
            <button
              className="btn btn-info"
              onClick={() => handleChartItem(product)}
            >
              Add to Chart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
