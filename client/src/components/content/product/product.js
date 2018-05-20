import React, { Component } from "react";
import PropTypes from "prop-types";

class Product extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = Object.freeze({
      onClick : this.props.onProductEdit,
      product: this.props.product
    })

    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(event) {
    event.preventDefault();
    console.log(this.state);
    this.state.onClick(this.state.product);
  }

  render() {
    return (
      <tr>
        <td>{this.props.product.sku}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.quantity}</td>
        <td>{this.props.product.price}</td>
        <td>
          <button className="btn btn-primary" onClick={this.onEdit}>
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

Product.propTypes = {
  onProductEdit: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

export default Product;
