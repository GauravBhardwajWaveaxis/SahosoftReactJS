import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fun1 from "./Fun1";
import Fun2 from "./Fun2";
import Fun3 from "./Fun3";
import Fun4 from "./Fun4";
import ClassDemo1 from "./ClassDemo1";
import ClassDemo2 from "./ClassDemo2";
import { InnerDemo } from "./ClassDemo2";
import StateDemo from "./StateDemo";
import { StateDemo2 } from "./StateDemo";

ReactDOM.render(
  <>
    <h1>Functional Component In React !!!</h1>
    <Fun1 />
    <Fun2 />
    <Fun3 />
    <Fun4 />
    <ClassDemo1 />
    <ClassDemo2 />
    <InnerDemo />
    <StateDemo />
    <StateDemo2 />
  </>,
  document.getElementById("root")
);
