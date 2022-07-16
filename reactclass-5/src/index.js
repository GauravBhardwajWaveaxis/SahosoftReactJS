import react, { createElement } from "react";
import reactDom from "react-dom";
import Student from "./Student";

let ele = <h1>This Is Welcome Page...</h1>;

let ele1 = createElement("div", null, "this is div element");

reactDom.render(
  <>
    {ele}
    {ele1}
    <Student />
  </>,
  document.getElementById("root")
);
