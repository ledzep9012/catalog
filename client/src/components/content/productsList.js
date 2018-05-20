import React from "react";
import PropTypes from "prop-types";
import { editProduct } from "../../actions/index";
import Product from "./product/product";

const ProductList = ({ products, dispatch, history }) => {
  function onProductEdit(product) {
    var options = {
      pathname: "/editProduct",
      product: product,
      onConfirmEdit
    };
    //Open new route here to edit current product
    history.push(options);
  }

  function onConfirmEdit(newProduct){
    console.log('here');
    dispatch(editProduct(newProduct));
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
        {products.length
          ? products.map((product, index) => (
              <Product
                key={index}
                product={product}
                onProductEdit={onProductEdit}
              />
            ))
          : "<tr>Loading</tr>"}
      </tbody>
    </table>
  );
};

export default ProductList;
