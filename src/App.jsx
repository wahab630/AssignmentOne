import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { products } from "./products";

function App() {
  // const [n, setN] = useState(45);
  const [storeProducts, setStoreProducts] = useState(products)
  // const [...products]=products
  // console.log(products);
  // const [product, setProduct] = useState({
  //   title: "wrist Watch",
  //   price: 234,
  //   description: "some description",
  // });
  // const updatePrice = () => {
  //...product// ka matlab title ,price, description , price:30 //ye price pichla ko overrite kr dega
  //   setProduct({ ...product, price: 30 });
  // }
  // let p ={
  //   data:23,
  //   name:"usman",
  //   qual:"ms"
  // }
  // const [nums, setNums] = useState([23, 43, 52, 64]);
  // const updateNums = () => {
  //23, 43, 52, 64 ,10 yu spread kr dia
  // setNums([...nums, 10]); // copy kia
  // nums.push(10)// usestate ka apna setter fn nai use kia
  // setNums(num+10)
  // setNums([10])// update k time bhi wohi datatype ya format hona chahiya
  // };
  // const [x, setX] = useState(90);
  // const decrement = () => {
  //   setX(x - 6);
  // };
  // const increment = () => {
  //   setX(x + 6);
  // };
  return (
    <>
      <Home products={storeProducts}/>
      <About />
      {/* <h1>{product.title}</h1>
      <h1>{product.price}</h1>
      <h1>{product.description}</h1>
      <button onClick={updatePrice}>Update Price</button> */}
      {/* {nums.map((val) => (
        <p key={val.id}>{val}</p>
      ))} */}
      {/* <button onClick={updateNums}>Add 10 to Array</button> */}
      {/* <button onClick={increment} disabled={x >= 100 ? true : false}>
        Increment
      </button>
      <button onClick={decrement} disabled={x <= 0 ? true : false}>
        Decrement
      </button> */}
    </>
  );
}

export default App;
