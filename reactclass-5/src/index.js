import React, { createElement } from "react";
import ReactDOM from "react-dom";
import Student from "./Student";

let ele1 = <h1>This Is Welcome Page !!!</h1>;

let ele2 = React.createElement("h1", null, "Welcome to Sahosoft Solutions");

let ele3 = React.createElement(
  "h1",
  null,
  createElement("h1", null, "Welcome to Sahosoft Solutions")
);

ReactDOM.render(
  <>
    {ele1}

    {ele2}

    {ele3}
    <Student />
  </>,
  document.getElementById("root")
);
