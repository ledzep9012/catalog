import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from './components/hoc/layout';
import Home from './containers/home';
import EditProduct from "./components/content/product/editProduct";

class Routes extends Component {
  
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/editProduct" component={EditProduct}/>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;