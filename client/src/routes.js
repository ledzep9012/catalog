import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from './components/hoc/layout';
import Home from './containers/home';

class Routes extends Component {
  
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;