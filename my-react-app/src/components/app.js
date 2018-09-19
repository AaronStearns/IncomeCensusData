import React from "react";
import { Component } from "react";

import TitleBar from "../containers/title-bar";
import SimpleForm from "../containers/data-render-box";

export default class App extends Component {
  render() {
    return (
      <div>
        <SimpleForm />
      </div>
    );
  }
}