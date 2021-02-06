import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import KitchenAlert from "./components/KitchenAlert";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <h1>AI Kitchen Helper</h1>
        <KitchenAlert />
      </React.Fragment>
    </Provider>
  );
};

export default App;
