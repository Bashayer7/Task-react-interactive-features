import React, { useState } from "react";

// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = () => {
  const [e, setstate] = useState("");
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar />
      <div className="listWrapper">{productList}</div>
    </>
  );
  return <button onclick="myFunction()">Click me</button>;
};

export default ProductList;
