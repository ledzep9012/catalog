import React, { Component } from "react";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: this.props.location.product.name,
      sku: this.props.location.product.sku,
      picture: this.props.location.product.picture,
      price: this.props.location.product.price,
      quantity: this.props.location.product.quantity
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onConfirmEdit } = this.props.location;
    onConfirmEdit(this.state);
    window.history.back();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container">
        <form className="form-group">
          <label>
            SKU:
            <input
              type="text"
              name="sku"
              onChange={this.handleInputChange}
              value={this.state.sku}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              onChange={this.handleInputChange}
              value={this.state.price}
            />
          </label>
          <label>
            Quantity:
            <input
              type="text"
              name="quantity"
              onChange={this.handleInputChange}
              value={this.state.quantity}
            />
          </label>
          <label>
            Picture:
            <input
              type="text"
              name="picture"
              onChange={this.handleInputChange}
              value={this.state.picture}
            />
          </label>
          <button value="confirm" onClick={this.handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    );
  }
}

export default EditProduct;
