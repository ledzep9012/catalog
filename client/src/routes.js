import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from './components/hoc/layout';
import Home from './containers/home';
import EditProduct from "./components/content/product/editProduct";
import AddProduct from "./components/content/product/addProduct";

class Routes extends Component {
  
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/editProduct" component={EditProduct}/>
          <Route path="/addProduct" component={AddProduct}/>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;