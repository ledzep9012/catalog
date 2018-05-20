import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts, editProduct } from "../actions/index";
import ProductList from "../components/content/productsList";

class Home extends Component {
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
    alert("Adding");
  }

  render() {
    return (
      <div className="container">
        {this.props.isFetching ? (
          <h2>Loading..</h2>
        ) : (
          <ProductList
            products={this.props.products}
            dispatch={this.props.dispatch}
            history={this.props.history}
          />
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
