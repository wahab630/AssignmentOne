import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import ProductCartDetails from "./ProductCartDetails";

const Nav = () => {
  const { cart } = useSelector((state) => state.rootReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to={"/about"}>
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " to={"/contact"}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to={"/add-product "}>
                  Add Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to={"/trial "}>
                  trial
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-info me-2" onClick={closeModal}>
                  Login
                </button>
                <Link to="/productCartDetails" className="btn btn-primary">
                  <i class="bi bi-cart"></i>
                  {cart.cart && cart.cart.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isModalOpen ? <Modal closeModal={closeModal} /> : ""}
    </>
  );
};

export default Nav;
