import React from "react";
import PropTypes from "prop-types";
import Product from "./product/product";

const ProductList = ({ products }) => {
  function onProductEdit(event, id) {
    event.preventDefault();
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
        {/* {products.map((todo, index) => (
      <Product key={index} {...products} onClick={() => onProductEdit} />
    ))} */}
      </tbody>
    </table>
  );
};

export default ProductList;
