import React, { Component } from "react";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      name: this.props.location.product.name,
      sku: this.props.location.product.sku,
      picture: this.props.location.product.picture,
      price: this.props.location.product.price,
      quantity: this.props.location.product.quantity
    };
  }

  handleEdit(event) {
    event.preventDefault();
    const { onConfirmEdit } = this.props.location;
    onConfirmEdit(this.state);
    window.history.back();
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name === "quantity") value = value ? Number.parseInt(value) : 0;
    
    this.setState({
      [name]: value
    });
  }

  handleDelete(event) {
    event.preventDefault();
    const { onDelete } = this.props.location;
    onDelete(this.state.sku);
    window.history.back();
  }

  render() {
    return (
      <div className="container">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={this.handleInputChange}
                value={this.state.name}
              />
            </label>
          </div>
          <div className="form-group col-md-6">
            <label>
              Price:
              <input
                type="text"
                name="price"
                onChange={this.handleInputChange}
                value={this.state.price}
              />
            </label>
          </div>
          <div className="form-group col-md-6">
            <label>
              Quantity:
              <input
                type="text"
                name="quantity"
                onChange={this.handleInputChange}
                value={this.state.quantity}
              />
            </label>
          </div>
          <div className="form-group col-md-6">
            <label>
              URL:
              <input
                type="text"
                name="picture"
                onChange={this.handleInputChange}
                value={this.state.picture}
              />
            </label>
          </div>
        </div>
        <div className="row" id="centerButton">
          <button
            className="btn btn-warning"
            value="confirm"
            onClick={this.handleEdit}
          >
            Confirm Edit
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-danger"
            value="delete"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EditProduct;
