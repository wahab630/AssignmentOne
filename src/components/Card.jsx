import React from "react";
import "./card.css";

const Card = ({ product }) => {
  return (
    <>
      <div className="card h-100 shadow ">
        <img src={product.image} className="card-img-top  object-fit-sm-contain" alt="no image" />
        <div className="card-body ">
          <h5 className="card-title">{product.title} </h5>
          <div className="d-flex justify-content-between">
            <span>
              USD <span className="fw-bold price-red"> {product.price}</span> $
            </span>
            <span>
              Rating
              <span className="fw-bold rating-yellow">
                {product.rating.rate}
              </span>
            </span>
          </div>
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
