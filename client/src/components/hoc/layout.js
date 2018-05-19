import React, { Component } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
