import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts, editProduct, addProduct } from "../actions/index";
import ProductList from "../components/content/productsList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dispatch: this.props.dispatch
    };
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onConfirmAdd = this.onConfirmAdd.bind(this);
  }
  static propTypes = {
    products: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  onAddProduct(event) {
    event.preventDefault();
    var options = {
      pathname: "/addProduct",
      onConfirmAdd: this.onConfirmAdd
    };
    console.log(options);
    //Open new route here to edit current product
    this.props.history.push(options);
  }

  onConfirmAdd(newProduct) {
    const { dispatch } = this.state;
    console.log("updating", newProduct);
    dispatch(addProduct(newProduct));
  }

  render() {
    return (
      <div className="container">
        {this.props.isFetching ? (
          <h2>Loading..</h2>
        ) : this.props.products ? (
          <ProductList
            products={this.props.products}
            dispatch={this.props.dispatch}
            history={this.props.history}
          />
        ) : (
          <h2> No Products</h2>
        )}

        <div className="container">
          <button className="btn btn-success" onClick={this.onAddProduct}>
            Add New Product
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isFetching, items, item, isEditing } = state.products;
  return {
    isFetching: isFetching,
    products: items,
    isEditing,
    product: item
  };
};

export default connect(mapStateToProps)(Home);
