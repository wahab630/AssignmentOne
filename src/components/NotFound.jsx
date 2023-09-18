import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-100  d-flex justify-content-center align-items-center">
      <div>
        <strong className="me-2">404</strong> |
        <span className="ms-2">This page could not be found.</span>
      </div>
      <div>
        <Link to={"/"} className="btn btn-info">Go Back to Home Page </Link>
      </div>
    </div>
  );
};

export default NotFound;
