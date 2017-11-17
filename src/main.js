import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import HelloMessage from "./HelloMessage";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("mount")
  );
};

render(HelloMessage);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./HelloMessage", () => {
    render(HelloMessage);
  });
}
