import React from "react";
import ProductList from "./content/productsList";

import fetchProducts from './content/product/productApi';

const Home = () => {
  (function listProducts(){
    fetchProducts()
    .then(response => response.ok ? response.json() : console.log(response))
    .then(products => console.table(products))
    .catch(err => console.table(err));
  }())
  
  return (
    <div className="container">
    <ProductList/>
    </div>
  );
};

export default Home;
