import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "Coffee",
      sku: 13,
      price: 250,
      quantity: 2,
      picture: "8.8.8.8"
    };
  }

  handleSubmit(event) {
    //console.log(this.props);
    event.preventDefault();
    const { onConfirmAdd } = this.props.location;
    console.log(this.state);
    onConfirmAdd(this.state);
    window.history.back();
  }

  handleInputChange(event) {
    const target = event.target;

    let value = target.value;
    let name = target.name;
    if (name === "sku") value = value ? Number.parseInt(value) : 0;
    this.setState({
      [name]: value
    });
  }

  getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>
              SKU:
              <input
                type="text"
                name="sku"
                onChange={this.handleInputChange}
                value={this.state.sku}
              />
            </label>
          </div>
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
            onClick={this.handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default AddProduct;
