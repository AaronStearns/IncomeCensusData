import React from "react";
import { Component } from "react";
import { Values } from "redux-form-website-template";

import SimpleForm from "../containers/SimpleForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <SimpleForm />
        <Values form="simple" />
      </div>
    );
  }
}