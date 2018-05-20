import React from "react";
import PropTypes from "prop-types";
import Product from "./product/product";

const ProductList = ({products}) => {

  function onProductEdit(id) {
    console.log('check', id);
    alert("Clicked Button");
  }
 
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>sku</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Picture</th>
        </tr>
        { products.length ?
          products.map((product, index) => (
          <Product key={index} product={product} onProductEdit={onProductEdit} />
        )) : '<tr>Loading</tr>'}
      </tbody>
    </table>
  );
};

export default ProductList;
