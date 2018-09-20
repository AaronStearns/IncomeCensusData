import React from "react";
import { Component } from "react";
import { Values } from "redux-form-website-template";

import TitleBar from "../containers/title-bar";
import SimpleForm from "../containers/SimpleForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <SimpleForm />
        <Values form="simple" />
      </div>
    );
  }
}