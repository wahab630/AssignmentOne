import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCartDetails = () => {
  const { cart } = useSelector((state) => state.rootReducer);
  const cartDetail = cart.cart;
  
  // const handleDelete = () => {

  // };

  return (
    <div>
      {cartDetail.map((product) => (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 border ">
              <img
                src={product.image}
                className="img-fluid rounded-start  d-block mx-auto "
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h5 className="card-title">${product.price}</h5>
              </div>
              {/* <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button> */}
            </div>
          </div>
        </div>
      ))}
      <Link to="/" className="btn btn-primary">
        Continue shopping
      </Link>
    </div>
  );
};

export default ProductCartDetails;
