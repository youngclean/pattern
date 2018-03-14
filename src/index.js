import React from "react";
import ReactDOM from "react-dom";
//import App from "./app";

const MOUNT_NODE = document.getElementById("root");

class App extends React.Component {
  render() {
    return null;
  }
}

ReactDOM.render(<div>kkk</div>, MOUNT_NODE);

if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error("Cannot apply hot update", err);
    }
  });
}
