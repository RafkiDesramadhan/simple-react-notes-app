import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import axios from "axios";

import "./assets/scss/style.scss";
import "./assets/fontawesome/scss/fontawesome.scss";
import "./assets/fontawesome/scss/solid.scss";
import "./assets/fontawesome/scss/brands.scss";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
