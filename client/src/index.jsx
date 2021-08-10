import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// HOT MODULE REPLACEMENT (HMR) - Remove this snippet to remove HMR
// LEARN MORE: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
