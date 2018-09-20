import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./containers/store";
import showResults from "./containers/showResults";
import SimpleForm from "./containers/SimpleForm";
import "./index.css"

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Predicting if income exceeds $50k/year based on 1994 Census Data</h2>        
      <h3>US Adult Census dataset of 48,842 entries from 1994. Prediction is done through simple classification techniques.</h3>
    <SimpleForm onSubmit={showResults} />
      <Values form="simple" />
    </div>
  </Provider>,
  rootEl
);
