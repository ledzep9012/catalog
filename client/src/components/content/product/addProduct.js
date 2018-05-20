import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: 'Coffee',
      sku: 13,
      price: 250,
      quantity: 2,
      picture: null
    }
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
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

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
              Picture:
              <img
                name="picture"
                src={this.state.picture}
                alt={this.state.name}
              />
            </label>
            <div className="form-group col-md-6">
              <input type="file" className="form-control-file" />
            </div>
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
