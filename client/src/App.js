import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import Routes from "./routes";
import reducers from "./reducers/index";

const store = applyMiddleware(thunkMiddleware, createLogger())(createStore);

class App extends Component {
  render() {
    return (
      <Provider
        store={store(
          reducers,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
