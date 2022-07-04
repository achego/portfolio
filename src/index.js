import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./store/reducers/rootReducer";
// import thunk from 'redux-thunk'

const app = (
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
