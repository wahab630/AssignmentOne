import React from "react";
import Nav from "./Nav";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../features/deposit/depositSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const { depAmount } = useSelector((state) => state.rootReducer);

  const depositAmount = () => {
    dispatch(deposit(44));
  };
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="row">
        <div className="col-md-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad
          officiis non! Ea atque mollitia, quo, minima quod assumenda doloribus
          libero illo inventore porro doloremque eligendi cupiditate, dolor
          impedit sunt ab illum at esse alias nisi ut. Pariatur nisi eius
          quisquam quas rerum reiciendis eum deserunt! Suscipit, accusamus enda
          quaerat eum quos. Officia vitae ipsum consequatur nisi eligendi amet
          similique dolore sit, autem obcaecati beatae nemo dicta, nostrum
          tempora saepe. Quis, voluptates fuga placeat perspiciatis corporis
          amet quisquam ad maiores ea magni et ipsam alias deleniti quam!
          Distinctio at similique corporis omnis, velit sequi sed em non
          perspitatibus nisi, ad libero perferend
        </div>
        <div className="col-md-8">
          <Outlet />
        </div>
        <div className="col-md-2">
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              An active item
            </li>
            <li className="list-group-item active">A second item</li>
            <li className="list-group-item ">A third item</li>
            <li className="list-group-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
          <button onClick={depositAmount}>Deposit ${depAmount.value}</button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
