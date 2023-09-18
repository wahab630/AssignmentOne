// import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const AddProduct = () => {
  // const [product, setProduct] = useState({
  //   title: "",
  //   description: "",
  //   price: undefined,
  //   image: "",
  //   category: "",
  // });
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(product);
  //   // const res = await fetch("https://fakestoreapi.com/products", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   //   body: JSON.stringify(product),
  //   // });

  //   const res = await axios.post("https://fakestoreapi.com/products", {
  //     product,
  //   }); // yaha product:product ko single ma represent kr re ha
  //   if (res) {
  //     console.log(res);
  //   }
  // };
  const {
    handleChange,
    handleReset,
    setFieldValue, //kyu?
    handleSubmit,
    handleBlur,
    values, // poora form ki values is ma as object available ho jae gi
    touched, // imp he yup saree fields pe error show kr ra he// kisi bi field ka error tab check kro jab wo touch hui ho //ye bhi aik object he or kisi field ko user ne touch kia he ya nai ye detect krega
    errors, // errors ka object saree errors ae ga
  } = useFormik({
    initialValues: {
      title: "",
      email: "",
      description: "",
      price: undefined,
      image: "",
      category: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(5, "plz enter atleast 5 chars")
        .max(20, "Too Long!")
        .required("title cannot be empty"),
      email: Yup.string().email("Invalid email").required("Required"),
      description: Yup.string().required("plz provide description"),
      price: Yup.number().required("plz provide price"),
      image: Yup.string().required(),
      category: Yup.string().required("plz provide category"),
      password: Yup.string().matches(
        "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$",
        "plz check password validity"
      ),
    }), // ye formik ma nai yup ma banega
    onSubmit: (vals) => {
      console.log(vals);
    },
  });
  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="title"
            name="title"
          />
          <div className="error" style={{ color: "red" }}>
            {
              touched.title && errors.title ? errors.title : "" // dono condition check krega touch bhi hua or error bhi ha agr error nai ha to beshak touch ho no problem
            }
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="email"
            name="email"
          />
          <div className="error" style={{ color: "red" }}>
            {touched.email && errors.email ? errors.email : ""}
          </div>
        </div>

        <div className="col-md-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="error" style={{ color: "red" }}>
            {touched.description && errors.description
              ? errors.description
              : ""}
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number" // taka string na add kr sake
            min="10"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="price"
            placeholder="price"
          />
          <div className="error" style={{ color: "red" }}>
            {touched.price && errors.price ? errors.price : ""}
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password" // taka string na add kr sake
            min="10"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="password"
            placeholder="password"
          />
          <div className="error" style={{ color: "red" }}>
            {touched.password && errors.password ? errors.password : ""}
          </div>
          <div
            className="error-box"
            style={{
              backgroundColor: "red",
              color: "#fff",
              padding: "24px",
              display: touched.password && errors.password ? "block" : "none",
            }}
          >
            <ul>
              <li>Ensure string has two uppercase letters.</li>
              <li>Ensure string has one special case letter</li>
              <li>Ensure string has two digits.</li>
              <li>Ensure string has three lowercase letters.</li>
              <li>Ensure string is of length 8.</li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            onChange={(event) => {
              const fileReader = new FileReader();
              fileReader.onload = () => {
                if (fileReader.readyState === 2) {
                  setFieldValue("image", fileReader.result);
                }
              };
              fileReader.readAsDataURL(event.target.files[0]);
            }}
            className="form-control"
            id="image"
            name="image"
            placeholder="image"
          />
          <div className="error" style={{ color: "red" }}>
            {touched.image && errors.image ? errors.image : ""}
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            onChange={handleChange}
            onBlur={handleBlur}
            name="category"
          >
            <option selected>Choose category</option>
            <option value="Diamond">Diamond</option>
          </select>
          <div className="error" style={{ color: "red" }}>
            {touched.category && errors.category ? errors.category : ""}
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
